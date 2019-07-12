import React, { useReducer } from 'react'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import { GET_TOPICS } from '../types'

import GithubService from '../../services/index'
const service = new GithubService()

const GithubState = props => {
  const initialState = {
    topics: [],
    test: 'testing this shit'
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  // Search topics
  const searchTopics = async text => {
    const res = await service.getTopics(text)
    console.log(res.data.items[0])

    dispatch({
      type: GET_TOPICS,
      payload: res.data.items
    })
  }

  return (
    <GithubContext.Provider
      value={{ topics: state.topics, test: state.test, searchTopics }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
