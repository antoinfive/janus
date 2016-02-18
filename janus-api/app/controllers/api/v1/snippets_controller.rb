class SnippetsController < ApplicationController
  def index
    current_user = User.find(params[:user_id])
    render json: current_user.snippets
  end

  def show
    render json: Snippet.find(params[:id])
  end

  def create
    snippet = Snippet.create(snippet_params)
    render json: snippet
  end

  def update
    snippet = Snippet.find(params[:id])
    snippet.update(snippet_params)
    render json: snippet
  end

  def destroy
    snippet = Snippet.find(params[:id])
    snippet.destroy
    render nothing: true
  end

  private
  def snippet_params
    params.require(:snippet).permit(:code, :user_id, :project_id)
  end
end
