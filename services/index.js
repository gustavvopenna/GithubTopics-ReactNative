import axios from 'axios'

const baseURL = 'https://api.github.com'

const githubClientId = '54ce901d3078b4ad829f'
const githubClientSecret = '2247fbd75cd47627d393ea28718b6998548a9691'

// https://api.github.com/search/topics?q=ruby+is:featured

class GithubService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: false, //Check this out
      headers: { Accept: 'application/vnd.github.mercy-preview+json' }
    })
  }

  getTopics = text => {
    return this.service
      .get(`/search/topics?q=${text}+is:featured`)
      .then(topics => topics)
      .catch(err => err)
  }
}

export default GithubService
