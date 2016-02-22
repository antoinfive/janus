class BookmarkSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :link, :title
  has_many :projects, each_serializer: ProjectNoAssociationsSerializer
  has_many :tags
end
