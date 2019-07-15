import React from 'react'
import styled from 'styled-components'
import data from '../about.json'
import * as Icon from '@expo/vector-icons'

const AboutScreen = () => {
  return (
    <Container>
      <Image source={require('../assets/background-about.jpg')} />
      <Cover>
        <Avatar source={require('../assets/avatar.jpg')} />
        <Name>{data.name}</Name>
      </Cover>
      <Content>
        <Row>
          <Icon.Ionicons name={data.address.icon} size={36} color="#3c4560" />
          <Text>{data.address.text}</Text>
        </Row>

        <Row>
          <Icon.Ionicons name={data.email.icon} size={36} color="#3c4560" />
          <Text>{data.email.text}</Text>
        </Row>

        <Row>
          <Icon.Ionicons name={data.phone.icon} size={36} color="#3c4560" />
          <Text>{data.phone.text}</Text>
        </Row>

        <Row>
          <Icon.Ionicons name={data.linkedIn.icon} size={36} color="#3c4560" />
          <Text>{data.linkedIn.text}</Text>
        </Row>

        <Row>
          <Icon.Ionicons name={data.github.icon} size={36} color="#3c4560" />
          <Text>{data.github.text}</Text>
        </Row>
      </Content>
    </Container>
  )
}

export default AboutScreen

AboutScreen.navigationOptions = {
  header: null
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #f0f3f5;
`
const Cover = styled.View`
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: center;
  margin-top: 160px;
`

const Image = styled.Image`
  width: 100%;
  height: 250px;
  position: absolute;
  top: 0;
  left: 0;
`

const Avatar = styled.Image`
  width: 190px;
  height: 190px;
  border-radius: 95px;
  border-width: 10px;
  border-color: #f0f3f5;
  margin-bottom: 20px;
`

const Name = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #3c4560;
  margin-bottom: 50px;
`

const Content = styled.View`
  width: 90%;
  margin: 0 auto;
`

const Text = styled.Text`
  padding-left: 15px;
  padding-bottom: 10px;
  color: #3c4560;
  font-size: 18px;
`

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
`
