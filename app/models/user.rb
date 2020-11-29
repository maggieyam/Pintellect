# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string
#  first_name      :string
#  last_name       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  age             :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, :session_token, uniqueness: true, presence: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_many :boards, 
    foreign_key: :author_id,
    dependent: :destroy

    has_many :pins,
    foreign_key: :author_id,
    dependent: :destroy

    # has_one_attached :photo

    after_initialize :ensure_session_token, :set_username, :set_first_name, :set_last_name 
   
    attr_reader :password, 
    
  def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		return nil unless user && user.is_password?(password)
		user
  end
  
  def password=(password)
    @password = password    
	  self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bc_password = BCrypt::Password.new(self.password_digest)
    bc_password.is_password?(password) 
  end
  
  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save! 
    self.session_token
  end
	
  def set_username
      self.username = self.email.split("@")[0].capitalize()
  end
  
  def set_first_name
    self.first_name ||= self.username.split("_")[0];
  end

  def set_last_name
    name = self.username.split("_")[1];
    if name 
      self.last_name = name.capitalize();
    end
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def self.generate_session_token
	  SecureRandom::urlsafe_base64
  end

end
