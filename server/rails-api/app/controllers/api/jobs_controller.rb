class Api::JobsController < ApplicationController
  def index
    render json: Job.all
  end

  def destroy
    job = Job.find(params[:id])
    if job.destroy
      render json: { message: 'Job was deleted' }, status: :ok
    else
      render json: { message: 'Couldn\'t delete job' }, status: :unprocessable_entity
    end
  end
end
