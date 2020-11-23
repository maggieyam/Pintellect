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
require 'test_helper'

class PinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
