class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :link, :title, :project_ids
end
