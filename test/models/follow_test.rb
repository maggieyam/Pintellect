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
require 'test_helper'

class FollowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
