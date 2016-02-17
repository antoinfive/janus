class ProjectSerializer < ActiveModel::Serializer
  embed :ids, include :true
  attributes :id, :name, :github_link, :state, :description
  belongs_to :user
  has_many :stories, :bookmarks
end
