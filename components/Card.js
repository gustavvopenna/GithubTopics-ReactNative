import React, { useContext, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import GithubContext from '../context/github/githubContext'

const Card = props => {
  const githubContext = useContext(GithubContext)

  useEffect(() => {}, [])

  handleSubmit = async () => {
    await githubContext.searchTopics('react')
  }

  return (
    <Container>
      <TouchableOpacity onPress={this.handleSubmit}>
        <Title>{props.title}</Title>
      </TouchableOpacity>
      <Subtitle>{props.subtitle}</Subtitle>
    </Container>
  )
}

export default Card

const Container = styled.View`
  background: white;
  width: 90%;
  height: 100px;
  margin-left: 20px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
`

const Title = styled.Text`
  width: 50%;
  color: #4775f2;
  font-size: 22px;
  font-weight: bold;
  padding-bottom: 4px;
`

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
`
