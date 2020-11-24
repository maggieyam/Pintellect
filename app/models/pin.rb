# == Schema Information
#
# Table name: pins
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  title       :string
#  description :text
#  comments    :text
#  link        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Pin < ApplicationRecord
    belongs_to :author,
        class_name: :User
    has_many :board_pins
    has_many :boards,
        through: :board_pins,
        source: :board
    has_one_attached :photo
    # after_initalization :set_author

end
