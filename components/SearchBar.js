import React, { useState, useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import * as Icon from '@expo/vector-icons'

import GithubContext from '../context/github/githubContext'

const SearchBar = () => {
  const githubContext = useContext(GithubContext)

  const [text, setText] = useState('Escribe aquí')
  const [inputFocus, setInputFocus] = useState(false)

  handleInputFocus = () => {
    setInputFocus(true)
  }

  handleSubmit = async () => {
    await githubContext.searchTopics(text)
    console.log(text, 'texto enviado en el input')
    githubContext.setTextFromInput(text)
  }

  return (
    <InputWrapper>
      <Input
        placeholder={text}
        clearTextOnFocus={true}
        onChangeText={texto => setText(texto)}
        value={text}
        onFocus={this.handleInputFocus}
      />
      <TouchableOpacity onPress={this.handleSubmit}>
        <Icon.Ionicons name="ios-search" size={40} color="#4775f2" />
      </TouchableOpacity>
    </InputWrapper>
  )
}

export default SearchBar

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
