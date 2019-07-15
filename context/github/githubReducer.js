import {
  GET_TOPICS,
  SET_TEXT_FROM_SEARCH,
  ADD_WORD_TO_LATEST_SEARCHES
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_TOPICS:
      return {
        ...state,
        topics: action.payload
      }

    case SET_TEXT_FROM_SEARCH:
      return {
        ...state,
        textFromSearch: action.payload
      }

    case ADD_WORD_TO_LATEST_SEARCHES:
      return {
        ...state,
        latestSearches: [action.payload, ...state.latestSearches]
      }
    default:
      return state
  }
}
