import { GET_TOPICS } from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_TOPICS:
      return {
        ...state,
        topics: action.payload
      }

    default:
      return state
  }
}
