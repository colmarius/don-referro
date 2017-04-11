class Api::JobsController < ApplicationController
  def index
    render json: Job.all
  end

  def update
    job = Job.find(params[:id])
    if job.update_attributes(job_params)
      render json: job, status: :ok
    else
      render json: job, status: :unprocessable_entity
    end
  end

  def destroy
    job = Job.find(params[:id])
    if job.destroy
      render json: { message: 'Job was deleted' }, status: :ok
    else
      render json: { message: 'Couldn\'t delete job' }, status: :unprocessable_entity
    end
  end

  private

  def job_params
    params.require(:job).permit(Job::UPDATE_FIELDS)
  end
end
