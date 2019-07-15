import React from 'react'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import DescriptionScreen from '../screens/DescriptionScreen'
import TestScreen from '../screens/TestScreen'
import * as Icon from '@expo/vector-icons'

const activeColor = '#4775f2'
const inactiveColor = '#b8bece'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Description: DescriptionScreen
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-home"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
}

const AboutStack = createStackNavigator({
  About: TestScreen
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
