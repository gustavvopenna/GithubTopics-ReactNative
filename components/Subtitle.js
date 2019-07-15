import React, { useContext } from 'react'
import styled from 'styled-components'
import GithubContext from '../context/github/githubContext'

const Subtitle = props => {
  const githubContext = useContext(GithubContext)

  return (
    <Container>
      {props.results > 0 && props.results} {props.text}
    </Container>
  )
}

export default Subtitle

const Container = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`
