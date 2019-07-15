import React, { useState, useContext, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'
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

  const lastUpdate = (text = '') => {
    //console.log(text, 'LA PUTA FECHA')
    const lastPosition = text.indexOf('T')
    const newText = text.slice(0, lastPosition)
    return <Text>{newText}</Text>
  }

  const renderImage = arr => {
    console.log(arr.length, 'length')
    const random = Math.floor(Math.random() * arr.length)
    console.log(random, 'random')
    return <Image source={arr[random].background} />
  }

  return (
    <Container>
      <SafeAreaView forceInset={{ top: 'never' }}>
        <ScrollView style={{ height: '100%' }}>
          <Cover>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack()
              }}
              style={{ position: 'absolute', top: 15, right: 15, zIndex: 10 }}
            >
              <Icon.Ionicons name="ios-close" size={70} color="white" />
            </TouchableOpacity>
            {renderImage(images)}
            <Name>{currentTopic.display_name}</Name>
            <Creator>By {currentTopic.created_by}</Creator>
          </Cover>
          <Content>
            <Subtitle>Released</Subtitle>
            <Text>{currentTopic.released}</Text>
            <Subtitle>Last Update</Subtitle>
            {lastUpdate(currentTopic.updated_at)}
            <Subtitle>Description</Subtitle>
            <Text>{currentTopic.description}</Text>
          </Content>
        </ScrollView>
      </SafeAreaView>
    </Container>
  )
}

export default DescriptionScreen

DescriptionScreen.navigationOptions = {
  header: null
}

const Container = styled.View`
  flex: 1;
  background: #f0f3f5;
`
const Cover = styled.View`
  width: 100%;
  height: 250px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const Name = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: bold;
  padding-bottom: 20px;
`

const Creator = styled.Text`
  color: #b8bece;
  font-size: 22px;
`

const Content = styled.View`
  width: 90%;
  margin: 0 auto;
`

const Text = styled.Text`
  color: black;
  font-size: 18px;
`

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 5px;
  text-transform: uppercase;
`

var images = [
  {
    background: require('../assets/background12.jpg')
  },
  {
    background: require('../assets/background13.jpg')
  },
  {
    background: require('../assets/background14.jpg')
  },
  {
    background: require('../assets/background15.jpg')
  }
]
