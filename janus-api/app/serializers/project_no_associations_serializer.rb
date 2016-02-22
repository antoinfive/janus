class ProjectNoAssociationsSerializer < ActiveModel::Serializer
  attributes :id, :name, :github_link, :state, :description, :bookmark_ids, :story_ids
end
