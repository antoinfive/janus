class Api::V1::ProjectsController < ApplicationController
  def index
    current_user = User.find(params[:user_id])
    render json: current_user.projects
  end

  def show
    render json: Project.find(params[:id])
  end

  def create
    project = Project.create(project_params)
    render json: project
  end

  def update
    project = Project.find(params[:id])
    project.update(project_params)
    render json: project
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy
    render nothing: true
  end

  private
  def project_params
    params.require(:project).permit(:name, :github_link, :state, :description, :user_id)
  end
end
