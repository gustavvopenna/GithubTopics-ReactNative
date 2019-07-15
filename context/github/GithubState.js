import React, { useReducer } from 'react'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
  GET_TOPICS,
  SET_TEXT_FROM_SEARCH,
  ADD_WORD_TO_LATEST_SEARCHES
} from '../types'

import GithubService from '../../services/index'
const service = new GithubService()

const GithubState = props => {
  const initialState = {
    topics: [],
    textFromSearch: '',
    latestSearches: []
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  // Search topics
  const searchTopics = async text => {
    const res = await service.getTopics(text)
    console.log(res.data.items)

    dispatch({
      type: GET_TOPICS,
      payload: res.data.items
    })
  }

  // Set Text to state when user make a search
  const setTextFromInput = text => {
    dispatch({
      type: SET_TEXT_FROM_SEARCH,
      payload: text
    })
  }

  // Add search to the Latest Searches Array
  const addWordToLatestSearch = word => {
    dispatch({
      type: ADD_WORD_TO_LATEST_SEARCHES,
      payload: word
    })
  }

  return (
    <GithubContext.Provider
      value={{
        topics: state.topics,
        textFromSearch: state.textFromSearch,
        latestSearches: state.latestSearches,
        searchTopics,
        setTextFromInput,
        addWordToLatestSearch
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
