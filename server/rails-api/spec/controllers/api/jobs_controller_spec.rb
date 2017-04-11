# frozen_string_literal: true
require 'rails_helper'

RSpec.describe Api::JobsController, type: :controller do
  let(:parsed_response) { JSON.parse(response.body) }

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
        @job = Job.create({ title: 'Junior Software Engineer',
          description: 'test',
          job_type: 'full_time',
          discipline: 'hr',
          career_level: 'entry',
          skills: 'ruby,javascript',
          min_salary: 5000,
          max_salary: 8000
        })
      end

      it 'should return an array with 1 element' do
        get :index
        expect(response.body).to eq [@job].to_json
      end
    end
  end
end
