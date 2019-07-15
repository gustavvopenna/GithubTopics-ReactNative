import React, { useState, useContext, useEffect } from 'react'
import { TouchableOpacity, Animated } from 'react-native'
import styled from 'styled-components'
import * as Icon from '@expo/vector-icons'

import GithubContext from '../context/github/githubContext'

const DescriptionScreen = props => {
  const githubContext = useContext(GithubContext)
  const [currentTopic, setCurrentTopic] = useState({})

  const topicName = props.navigation.getParam('currentTopic', 'default')

  useEffect(() => {
    githubContext.topics.map((topic, i) => {
      if (topic.name === topicName) setCurrentTopic(topic)
    })
  }, [])

  return (
    <Container>
      <Text>{currentTopic.display_name}</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack()
        }}
        style={{ position: 'absolute', top: 20, right: 15 }}
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
  /* position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  align-items: center;
  justify-content: center; */
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Text = styled.Text``
