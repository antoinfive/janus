class Api::V1::ProjectsController < ApplicationController
  # skip_before_action :authenticate!

  def index
    current_user
    render json: current_user.projects, each_serializer: ProjectSerializer
    # render json: Project.all
  end

  def show
    render json: Project.find(params[:id])
  end

  def create
    project = Project.create(project_params)
    current_user.projects << project
    current_user.save
    render json: project
  end

  def update
    project = Project.find(params[:id])
    project.update(project_params)
    render json: project
  end

  def destroy
    binding.pry
    project = Project.find(params[:id])
    project.destroy
    render nothing: true
  end

  private
  def project_params
    params.require(:project).permit(:name, :github_link, :state, :description, :user_id)
  end
end
