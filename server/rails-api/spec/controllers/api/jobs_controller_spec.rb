# frozen_string_literal: true
require 'rails_helper'

RSpec.describe Api::JobsController, type: :controller do
  let(:parsed_response) { JSON.parse(response.body) }

  def create_job
    Job.create(
      title: 'Junior Software Engineer',
      description: 'test',
      job_type: 'full_time',
      discipline: 'hr',
      career_level: 'entry',
      skills: 'ruby,javascript',
      min_salary: 5000,
      max_salary: 8000
    )
  end

  before do
    Job.delete_all
  end

  describe 'GET #index' do
    context 'no jobs present' do
      it 'should return empty results' do
        get :index
        expect(parsed_response).to eq []
      end
    end

    context 'one job present' do
      before do
        @job = create_job
      end

      it 'should return an array with 1 element' do
        get :index
        expect(response.body).to eq [@job].to_json
      end
    end
  end

  describe 'PATCH #update' do
    context 'with existing job' do
      before do
        @job = create_job
      end

      it 'should return a 200 response' do
        new_params = {
          title: 'New Junior Software Engineer',
          description: 'new test'
        }
        patch :update, id: @job.id, job: new_params

        expect(parsed_response['id']).to eq(@job.id)
        expect(parsed_response['title']).to eq(new_params[:title])
        expect(parsed_response['description']).to eq(new_params[:description])
        expect(response.status).to eq(200)
      end
    end

    context 'with missing job' do
      it 'should return a 404 response' do
        patch :update, id: 0, job: {}
        expect(parsed_response).to eq({ 'message' =>  'Not Found'})
        expect(response.status).to eq(404)
      end
    end
  end

  describe 'DELETE #destroy' do
    context 'job exists' do
      before do
        @job = create_job
      end

      it 'should return a 200 response' do
        delete :destroy, id: @job.id
        expect(parsed_response).to eq({ 'message' => 'Job was deleted' })
        expect(response.status).to eq(200)
        expect(Job.count).to eq(0)
      end
    end

    context 'job does not exist' do
      it 'should return a 404 response' do
        delete :destroy, id: 4
        expect(parsed_response).to eq({ 'message' =>  'Not Found'})
        expect(response.status).to eq(404)
      end
    end

    context 'job cannot be deleted' do
      before do
        job = double
        allow(Job).to receive(:find).and_return(job)
        allow(job).to receive(:destroy).and_return(false)
      end

      it 'should return a 422 response' do
        delete :destroy, id: 1000
        expect(parsed_response).to eq({ 'message' => 'Couldn\'t delete job' })
      end
    end
  end
end
