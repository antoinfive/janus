class SessionsController < ApplicationController

  def create
    user = User.authenticate(user_params)
    if user
      data = {
        token: user.auth_token
        email: user.email
      }
      render json: data, status: 201
    else
        
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
