import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../screens/HomeScreen'
import TopicDescription from '../components/TopicDescription'

const AppNavigator = createStackNavigator({
  Home: Home,
  Description: TopicDescription
})

export default createAppContainer(AppNavigator)
