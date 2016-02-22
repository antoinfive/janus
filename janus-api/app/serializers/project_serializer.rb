class ProjectSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name, :github_link, :state, :description
  has_many :stories
  has_many :bookmarks, each_serializer: BookmarkLightSerializer
  has_one :user
end
