import React from 'react'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import DescriptionScreen from '../screens/DescriptionScreen'
import TestScreen from '../screens/TestScreen'
import AboutScreen from '../screens/AboutScreen'
import * as Icon from '@expo/vector-icons'

const activeColor = '#4775f2'
const inactiveColor = '#b8bece'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Description: DescriptionScreen
  },
  {
    mode: 'modal'
  }
)

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true
  const routeName = navigation.state.routes[navigation.state.index].routeName

  if (routeName === 'Description') {
    tabBarVisible = false
  }

  return {
    tabBarVisible,
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <Icon.Ionicons
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  }
}

const AboutStack = createStackNavigator({
  About: AboutScreen
})

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-person"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
}

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  AboutStack
})

export default TabNavigator
