class Api::V1::BookmarksController < ApplicationController
  def index
    binding.pry
    current_user
    render json: current_user.bookmarks
  end

  def show
    render json: Bookmark.find(params[:id])
  end

  def create
    binding.pry
    bookmark = Bookmark.create(bookmark_params)
    bookmark.projects << jank_to_projects if params[:jankiness].present?
    bookmark.tags << jank_to_tags if params[:jankiness_tags].present?
    current_user.bookmarks << bookmark
    current_user.save
    binding.pry
    render json: bookmark
  end

  def update
    bookmark = Bookmark.find(params[:id])
    bookmark.update(bookmark_params)
    render json: bookmark
  end

  def destroy
    bookmark = Bookmark.find(params[:id])
    bookmark.destroy
    render nothing: true
  end

  private
  def bookmark_params
    params.require(:bookmark).permit(:link, :title, :user_id, :jankiness, :jankiness_tags)
  end

  def jank_to_numbers
    bookmark_params[:jankiness].split(",").map{|num| num.to_i}
  end

  def tag_jank_to_numbers
    bookmark_params[:jankiness_tags].split(",").map{|num| num.to_i}
  end

  def jank_to_projects
    jank_to_numbers.map{|id| Project.find(id)}
  end

  def jank_to_tags
    tag_jank_to_numbers.map{|id| Project.find(id)}
  end
end
