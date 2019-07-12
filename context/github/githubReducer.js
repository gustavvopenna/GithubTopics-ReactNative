import { GET_TOPICS, SET_TEXT_FROM_SEARCH } from '../types'

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
    default:
      return state
  }
}
