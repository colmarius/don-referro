const parseJSON = response => response.json()

export const API = {
  fetchJobs () {
    return fetch('/api/jobs.json').then(parseJSON)
  }
}
