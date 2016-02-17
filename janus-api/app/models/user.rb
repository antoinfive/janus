class User < ActiveRecord::Base
  has_many :projects, dependent: :destroy
  has_many :stories, through: :projects
  validates_presence_of: :username, :uid, :provider
  validates_uniqueness_of: :username, :uid
end
