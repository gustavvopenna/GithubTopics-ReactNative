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
    console.log(state.topics, 'antes')
    const res = await service.getTopics(text)

    dispatch({
      action: GET_TOPICS,
      payload: res.data
    })
    console.log(state.topics, 'despues')
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
