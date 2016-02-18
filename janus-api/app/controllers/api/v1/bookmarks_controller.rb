class Api::V1::BookmarksController < ApplicationController
  
  def index
    current_user = User.find(params[:user_id])
    render json: current_user.bookmarks
  end

  def show
    render json: Bookmark.find(params[:id])
  end

  def create
    bookmark = Bookmark.create(bookmark_params)
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
    params.require(:bookmark).permit(:link, :title, :user_id)
  end
end
