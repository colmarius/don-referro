class Job < ApplicationRecord
  UPDATE_FIELDS = [:title, :description, :job_type, :discipline, :career_level, :language, :skills, :min_salary, :max_salary, :currency]
end
