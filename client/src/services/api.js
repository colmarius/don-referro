const parseJSON = response => response.json()

export const API = {
  fetchJobs () {
    return fetch('/api/jobs.json').then(parseJSON)
  },

  createJob (attributes) {
    return fetch(`/api/jobs.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(attributes)
    }).then(parseJSON)
  },

  deleteJob(id) {
    return fetch(`/api/jobs/${id}.json`, { method: 'DELETE' }).then(parseJSON)
  }
}
