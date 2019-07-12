import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'

export default function App() {
  return (
    <Container>
      <Text>Hello World heeey!</Text>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background: #f0f3f5;
  align-items: center;
  justify-content: center;
`
