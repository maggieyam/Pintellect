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
#  description     :text
#  url             :string
#  location        :string
#  background      :string
#
class User < ApplicationRecord
    validates :email, :session_token, uniqueness: true, presence: true
    validates :password_digest, :age, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_many :boards, 
    foreign_key: :author_id,
    dependent: :destroy

    has_many :pins,
    foreign_key: :author_id,
    dependent: :destroy

    has_many :users_followed,
      foreign_key: :author_id,
      class_name: :Follow

    has_many :following_users,
      foreign_key: :follower_id,
      class_name: :Follow

    has_many :followers,
      through: :users_followed,
      source: :follower
    
    has_many :followings,
      through: :following_users,
      source: :following

    has_one_attached :photo

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
    return if self.email == ""    
    self.username = self.email
  end
  
  def set_first_name
    return "" if !self.email
    temp = self.email.split("@")[0].capitalize()
    self.first_name ||= temp.split("_")[0];
  end

  def set_last_name
    return "" if !self.email
    temp = self.email.split("@")[0].capitalize()
    name = temp.split("_")[1];
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
