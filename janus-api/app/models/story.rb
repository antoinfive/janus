class Story < ActiveRecord::Base
  belongs_to :project
  validates_presence_of: :name
  validate :valid_state?, :valid_points?

  private
  def valid_state?
    self.JanusApi::STORY_STATE.include?(self.state)
  end

  def valid_points?
    self.JanusApi::POINTS.include?(self.points) || (self.points = nil)
  end
end
