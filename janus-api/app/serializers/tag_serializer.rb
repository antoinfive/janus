class TagSerializer < ActiveModel::Serializer
  attributes :id, :name, :bookmark_ids
end
