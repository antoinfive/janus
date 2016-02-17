class SnippetSerializer < ActiveModel::Serializer
  attributes :id, :code
  has_one :user
  has_one :project
end
