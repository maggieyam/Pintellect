# == Schema Information
#
# Table name: boards
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  end_date    :date
#  description :text
#  private     :boolean          default(FALSE)
#  start_date  :date
#
require 'test_helper'

class BoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
