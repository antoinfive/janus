class Api::V1::BookmarksController < ApplicationController
  # skip_before_action :authenticate!

  def index
    current_user
    render json: current_user.bookmarks
    # render json: Bookmark.all
  end

  def show
    render json: Bookmark.find(params[:id])
  end

  def create
    bookmark = Bookmark.create(link: bookmark_params[:link], title: bookmark_params[:title])
    bookmark.projects << ids_to_projects if bookmark_params[:projects].present?
    current_user.bookmarks << bookmark
    current_user.save
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
    params.require(:bookmark).permit(:link, :title, :projects => [])
  end

  def ids_to_projects
    bookmark_params[:projects].map{|id| Project.find(id.to_i)}
  end
  #
  # def jank_to_numbers
  #   bookmark_params[:jankiness].split(",").map{|num| num.to_i}
  # end
  #
  # def tag_jank_to_numbers
  #   bookmark_params[:jankiness_tags].split(",").map{|num| num.to_i}
  # end
  #
  # def jank_to_projects
  #   jank_to_numbers.map{|id| Project.find(id)}
  # end
  #
  # def jank_to_tags
  #   tag_jank_to_numbers.map{|id| Project.find(id)}
  # end
end
