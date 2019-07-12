import React, { useState, useContext, useEffect } from 'react'
import { TouchableOpacity, Animated } from 'react-native'
import styled from 'styled-components'
import * as Icon from '@expo/vector-icons'

import GithubContext from '../context/github/githubContext'

const DescriptionScreen = props => {
  const githubContext = useContext(GithubContext)
  const [currentTopic, setCurrentTopic] = useState({})

  const topicName = props.navigation.getParam('currentTopic', 'default')
  console.log(topicName, 'el primero')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await fetch(
      `https://api.github.com/search/topics?q=${topicName}+is:featured`,
      {
        headers: { Accept: 'application/vnd.github.mercy-preview+json' }
      }
    )
    const data = await res.json()
    setCurrentTopic(data.items[0])
    console.log(await currentTopic, 'JASONNNNN')
  }

  return (
    <Container>
      <Text>{currentTopic.name}</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack()
        }}
      >
        <Icon.Ionicons name="ios-close" size={90} />
      </TouchableOpacity>
    </Container>
  )
}

export default DescriptionScreen

DescriptionScreen.navigationOptions = {
  header: null
}

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  align-items: center;
  justify-content: center;
`

const Text = styled.Text``
