import React from 'react'
import GithubState from './context/github/GithubState'
import AppNavigator from './navigation/AppNavigator'

const App = () => {
  return (
    <GithubState>
      <AppNavigator />
    </GithubState>
  )
}

export default App
