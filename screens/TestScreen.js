import React from 'react'
import styled from 'styled-components'

const TestScreen = () => {
  return (
    <Container>
      <Text>Test screen</Text>
    </Container>
  )
}

export default TestScreen

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Text = styled.Text``
