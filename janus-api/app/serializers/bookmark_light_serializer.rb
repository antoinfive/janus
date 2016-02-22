class BookmarkLightSerializer < ActiveModel::Serializer
  attributes :id, :link, :title, :project_ids, :tag_ids
end
