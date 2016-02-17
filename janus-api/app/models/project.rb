class Project < ActiveRecord::Base
  belongs_to :user
  has_many :stories, dependent: :destroy
  validate :valid_state?

  private
  def valid_state?
    self.JanusApi::PROJECT_STATE.include?(self.state)
  end
end
