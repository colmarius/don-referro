job = {
  description: 'XING is the social network for business professionals with millions of members all over the world. Help us shape the future – for a better working life!'
}

jobs = [
  {
    title: 'Junior Software Engineer',
    description: job[:description],
    job_type: 'full_time',
    discipline: 'hr',
    career_level: 'entry',
    skills: 'ruby,javascript',
    min_salary: 5000,
    max_salary: 8000
  },
  {
    title: 'Software Engineer',
    description: job[:description],
    job_type: 'full_time',
    discipline: 'hr',
    career_level: 'professional',
    skills: 'ruby,javascript',
    min_salary: 8000,
    max_salary: 10000
  },
  {
    title: 'Senior Software Engineer',
    description: job[:description],
    job_type: 'full_time',
    discipline: 'hr',
    career_level: 'professional',
    skills: 'ruby,javascript',
    min_salary: 10000, max_salary: 12000
  },
]

jobs.each do |job_attrs|
  Job.create!(job_attrs)
end
