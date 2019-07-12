import React, { useState, useContext } from 'react'
import { TouchableOpacity, ScrollView } from 'react-native'
import styled from 'styled-components'
import { NotificationIcon } from './components/Icons'
import { Icon } from 'expo'
import Card from './components/Card'

import GithubState from './context/github/GithubState'
import GithubContext from './context/github/githubContext'

const App = () => {
  const [text, setText] = useState('Escribe aquí')
  const [inputFocus, setInputFocus] = useState(false)

  const githubContext = useContext(GithubContext)

  // const fetchData = async () => {
  //   const res = await githubContext.searchTopics('react')
  //   console.log(await githubContext.topics)
  // }

  // useEffect(() => {
  //   fetchData()
  //   console.log(githubContext.test)
  // }, [])

  handleInputFocus = () => {
    setInputFocus(true)
  }

  handleSubmit = async () => {
    await githubContext.searchTopics('react')
  }

  return (
    <GithubState>
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
          <TouchableOpacity onPress={this.handleSubmit}>
            <Icon.Ionicons name="ios-search" size={40} color="#4775f2" />
          </TouchableOpacity>
        </InputWrapper>
        <Subtitle>Results</Subtitle>
        <ScrollView>
          {topics.map((topic, i) => (
            <Card
              key={i}
              title={topic.name}
              subtitle={topic.short_description}
            />
          ))}
        </ScrollView>
      </Container>
    </GithubState>
  )
}

export default App

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

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`
const topics = [
  {
    name: 'ruby',
    display_name: 'Ruby',
    short_description:
      'Ruby is a scripting language designed for simplified object-oriented programming.',
    description:
      'Ruby was developed by Yukihiro "Matz" Matsumoto in 1995 with the intent of having an easily readable programming language. It is used by the Rails framework to create dynamic web-applications. Ruby\'s syntax is similar to that of Perl and Python.',
    created_by: 'Yukihiro Matsumoto',
    released: 'December 21, 1995',
    created_at: '2016-11-28T22:03:59Z',
    updated_at: '2019-07-11T18:51:42Z',
    featured: true,
    curated: true,
    score: 3161.4607
  },
  {
    name: 'python',
    display_name: 'Python',
    short_description: 'Python is a dynamically typed programming language.',
    description:
      'Python is a dynamically typed programming language designed by Guido van Rossum. Much like the programming language Ruby, Python was designed to be easily read by programmers. Because of its large following and many libraries, Python can be implemented and used to do anything from webpages to scientific research.',
    created_by: 'Guido van Rossum',
    released: 'February 20, 1991',
    created_at: '2016-12-07T00:07:02Z',
    updated_at: '2019-07-11T19:20:58Z',
    featured: true,
    curated: true,
    score: 635.1315
  },
  {
    name: 'rails',
    display_name: 'Rails',
    short_description:
      'Ruby on Rails (Rails) is a web application framework written in Ruby.',
    description:
      'Ruby on Rails (Rails) is a web application framework written in Ruby. It is meant to help simplify the building of complex websites.',
    created_by: 'David Heinemeier Hansson',
    released: 'December 13 2005',
    created_at: '2016-12-09T17:03:50Z',
    updated_at: '2019-07-11T17:58:38Z',
    featured: true,
    curated: true,
    score: 573.80115
  },
  {
    name: 'sass',
    display_name: 'Sass',
    short_description: 'Sass is a stable extension to classic CSS.',
    description:
      'Sass is a stylesheet language with a main implementation in Ruby. It is an extension of CSS that makes improvements to the old stylesheet format, such as being able to declare variables and using a cleaner nesting syntax.',
    created_by: 'Hampton Catlin, Natalie Weizenbaum, Chris Eppstein',
    released: 'November 28, 2006',
    created_at: '2016-12-16T21:53:45Z',
    updated_at: '2019-07-11T19:21:48Z',
    featured: true,
    curated: true,
    score: 221.1875
  },
  {
    name: 'jekyll',
    display_name: 'Jekyll',
    short_description: 'Jekyll is a simple, blog-aware static site generator.',
    description:
      'Jekyll is a blog-aware, site generator written in Ruby. It takes raw text files, runs it through a renderer and produces a publishable static website.',
    created_by: 'Tom Preston-Werner',
    released: '2008',
    created_at: '2016-12-16T21:53:08Z',
    updated_at: '2019-07-11T15:51:40Z',
    featured: true,
    curated: true,
    score: 204.94968
  },
  {
    name: 'homebrew',
    display_name: 'Homebrew',
    short_description: 'Homebrew is a package manager for macOS.',
    description:
      "Homebrew is a package manager for Apple's macOS operating system. It simplifies the installation of software and is popular in the Ruby on Rails community.",
    created_by: 'Max Howell',
    released: '2009',
    created_at: '2016-12-17T20:30:44Z',
    updated_at: '2019-07-11T16:16:21Z',
    featured: true,
    curated: true,
    score: 94.06711
  },
  {
    name: 'mastodon',
    display_name: 'Mastodon',
    short_description:
      'Mastodon is a free, decentralized, open-source microblogging network.',
    description:
      "Mastodon is a large social media network built as a decentralized federation of independently operated servers. It has a strong focus on privacy and anti-abuse features. Mastodon's server-side technology is Ruby on Rails, and its front end is written in JavaScript (React.js and Redux). It implements both the [OStatus](https://www.w3.org/community/ostatus/) and [ActivityPub](https://activitypub.rocks/) protocols and is thus interoperable with other social networks. [There are several client applications for different platforms available.](https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/Apps.md)",
    created_by: 'Eugen Rochko',
    released: 'October 5, 2016',
    created_at: '2017-02-01T09:54:34Z',
    updated_at: '2019-07-11T12:42:16Z',
    featured: true,
    curated: true,
    score: 29.254372
  }
]
