class Api::V1::TagsController < ApplicationController
  def index
    render json: Tag.all
  end

  def show
    render json: Tag.find(params[:id])
  end

  def create
    tag = Tag.create(name: tag_params[:name])
    tag.bookmarks << ids_to_bookmarks if tag_params[:bookmarks].present?
    render json: tag
  end

  def update
    tag = Tag.find(params[:id])
    tag.update(tag_params)
    render json: tag
  end

  def destroy
    tag = Tag.find(params[:id])
    tag.destroy
    render nothing: true
  end

  private
  def tag_params
    params.require(:tag).permit(:name, bookmarks: [])
  end

  def ids_to_bookmarks
    tag_params[:bookmarks].map{|id| Bookmark.find(id.to_i)}
  end
end
