class Bookmark < ActiveRecord::Base
  has_many :bookmark_tags, dependent: :destroy
  has_many :tags, through: :bookmark_tags

  has_many :project_bookmarks, dependent: :destroy
  has_many :projects, through: :project_bookmarks
  validates_presence_of :link
end
