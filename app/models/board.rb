# == Schema Information
#
# Table name: boards
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  title       :string           not null
#  description :text
#  private     :boolean          default(FALSE)
#  start_date  :date
#  end_date    :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Board < ApplicationRecord
    validates :title, presence: true
    # validate :valid_date_period, availability: true
    # after_initialize : set_status, :
    # def status
    belongs_to :author,
        class_name: :User
    
    # def valid_date_period
    #     return false if !self.start_date ^ !self.end_date
    #     return false if self.start_date > self.end_date
    #     return true
    # end
end
