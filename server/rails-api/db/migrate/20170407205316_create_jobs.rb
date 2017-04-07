class CreateJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :description
      t.string :job_type
      t.string :discipline
      t.string :career_level
      t.string :language, default: 'en'
      t.string :skills
      t.integer :min_salary, default: 0
      t.integer :max_salary, default: 0
      t.string :currency, default: 'EUR'

      t.timestamps
    end
  end
end
