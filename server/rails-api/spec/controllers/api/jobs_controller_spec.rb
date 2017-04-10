# frozen_string_literal: true
require 'rails_helper'

RSpec.describe Api::JobsController, type: :controller do
  let(:parsed_response) { JSON.parse(response.body) }

  describe 'GET #index' do
    context 'no jobs present' do
      it 'should return empty results' do
        get :index
        expect(parsed_response).to eq []
      end
    end
  end
end
