class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :link, :title, :jankiness, :project_ids, :jankiness_tags, :tag_ids
end
