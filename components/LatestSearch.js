import React, { useContext } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import GithubContext from '../context/github/githubContext'

const LatestSearch = props => {
  const githubContext = useContext(GithubContext)

  handleSearch = async word => {
    await githubContext.searchTopics(word.toLowerCase())
  }

  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.words.map((word, i) => (
          <TouchableOpacity key={i} onPress={() => this.handleSearch(word)}>
            <Text>{word}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Container>
  )
}

export default LatestSearch

const Container = styled.View`
  width: 90%;
  margin: 20px auto 10px auto;
`

const Text = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: #3c4560;
  padding-right: 20px;
`
