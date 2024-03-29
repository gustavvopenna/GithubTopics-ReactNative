import React, { useContext } from 'react'
import { ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { NotificationIcon } from '../components/Icons'
import SearchBar from '../components/SearchBar'
import Topics from '../components/Topics'
import Subtitle from '../components/Subtitle'
import TopicDescription from '../components/TopicDescription'
import LatestSearch from '../components/LatestSearch'

import GithubContext from '../context/github/githubContext'

const HomeScreen = props => {
  const githubContext = useContext(GithubContext)

  return (
    <Container>
      <TopicDescription />
      <SafeAreaView>
        <ScrollView style={{ height: '100%' }}>
          <TitleBar>
            <Avatar source={require('../assets/avatar.jpg')} />
            <Title>Welcome back,</Title>
            <Name>Gustavo</Name>
            <NotificationIcon
              style={{ position: 'absolute', right: 20, top: 5, zIndex: 1 }}
            />
          </TitleBar>
          <SearchBar />
          {/* <ScrollView> */}
          {githubContext.latestSearches.length > 0 && (
            <Subtitle text="Latest searchs" />
          )}
          {githubContext.latestSearches.length > 0 && (
            <LatestSearch words={githubContext.latestSearches} />
          )}
          <Subtitle results={githubContext.topics.length} text="Results" />
          <Topics navigation={props.navigation} />
          {/* </ScrollView> */}
        </ScrollView>
      </SafeAreaView>
    </Container>
  )
}

export default HomeScreen

HomeScreen.navigationOptions = {
  header: null
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
