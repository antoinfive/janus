class AddJankinessTagsToBookmarks < ActiveRecord::Migration
  def change
    add_column :bookmarks, :jankiness_tags, :string
  end
end
