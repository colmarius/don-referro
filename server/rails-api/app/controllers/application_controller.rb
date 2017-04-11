class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :handle_404

  def handle_404
    render json: { message: 'Not Found' }, status: :not_found
  end
end
