import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { NotificationIcon } from './components/Icons'
import { Icon } from 'expo'

export default function App() {
  const [text, setText] = useState('Escribe aquí')
  const [inputFocus, setInputFocus] = useState(false)

  handleInputFocus = () => {
    setInputFocus(true)
  }

  return (
    <Container>
      <TitleBar>
        <Avatar source={require('./assets/avatar.jpg')} />
        <Title>Welcome back,</Title>
        <Name>Gustavo</Name>
        <NotificationIcon
          style={{ position: 'absolute', right: 20, top: 5, zIndex: 1 }}
        />
      </TitleBar>
      <InputWrapper>
        <Input
          placeholder={text}
          clearTextOnFocus={true}
          onChangeText={texto => setText(texto)}
          value={text}
          onFocus={this.handleInputFocus}
        />
        <TouchableOpacity>
          <Icon.Ionicons name="ios-search" size={40} color="#4775f2" />
        </TouchableOpacity>
      </InputWrapper>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background: #f0f3f5;
`
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  position: absolute;
  top: 0px;
  left: 0px;
  margin-left: 20px;
`

const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #b8bece;
`

const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #3c4560;
`

const InputWrapper = styled.View`
  width: 90%;
  margin: 20px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Input = styled.TextInput`
  padding-left: 20px;
  width: 87%;
  height: 40px;
  color: #b8bece;
  background-color: white;
  border-radius: 22px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
`
