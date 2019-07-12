import React, { useContext, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { ScrollView } from 'react-native'
import Card from './Card'
import GithubContext from '../context/github/githubContext'

const Topics = props => {
  const githubContext = useContext(GithubContext)

  useEffect(() => {}, [])

  const checkForTopics = () => {
    if (githubContext.topics.length === 0) {
      return (
        <Card
          title="Heeey!"
          subtitle="Try typing something in the search bar"
        />
      )
    } else {
      return (
        <ScrollView style={{ marginBottom: 100 }}>
          {githubContext.topics.map((topic, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {
                props.navigation.push('Description', {
                  currentTopic: topic.name
                })
              }}
            >
              <Card title={topic.name} subtitle={topic.short_description} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )
    }
  }

  return <View>{checkForTopics()}</View>
}

export default Topics
