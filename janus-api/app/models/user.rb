class User < ActiveRecord::Base
  has_many :projects, dependent: :destroy
  has_many :stories, through: :projects
  has_many :snippets
  validates_presence_of :username, :uid, :provider
  validates_uniqueness_of :username, :uid
end
