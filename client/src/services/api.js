const parseJSON = response => response.json()

export const API = {
  fetchJobs () {
    return fetch('/api/jobs.json').then(parseJSON)
  },

  deleteJob(id) {
    return fetch(`/api/jobs/${id}.json`, { method: 'DELETE' }).then(parseJSON)
  }
}
