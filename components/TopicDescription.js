import React, { useState, useContext, useEffect } from 'react'
import { TouchableOpacity, Animated } from 'react-native'
import styled from 'styled-components'
import * as Icon from '@expo/vector-icons'

import GithubContext from '../context/github/githubContext'

const TopicDescription = () => {
  const githubContext = useContext(GithubContext)

  const [topic, setTopic] = useState({})
  const [top, setTop] = useState(new Animated.Value(900))

  // useEffect(() => {
  //   fetchData()
  // }, [])

  // const fetchData = async () => {
  //   const data = await githubContext.searchTopics(githubContext.textFromSearch)
  //   await setTopic(data[0])
  // }

  handleCloseButton = () => {
    Animated.spring(top, {
      toValue: 0
    }).start()
  }

  return (
    <AnimatedContainer style={{ top: top }}>
      <Text>Hello</Text>
      <TouchableOpacity onPress={this.handleCloseButton}>
        <Icon.Ionicons name="ios-close" size={90} />
      </TouchableOpacity>
    </AnimatedContainer>
  )
}

export default TopicDescription

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  align-items: center;
  justify-content: center;
`

const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Text = styled.Text``
