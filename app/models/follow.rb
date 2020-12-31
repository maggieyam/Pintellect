# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  follower_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Follow < ApplicationRecord
    validates_uniqueness_of :author_id, :scope => [:follower_id]
    
    belongs_to :following,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :follower,
        foreign_key: :follower_id,
        class_name: :User
end
