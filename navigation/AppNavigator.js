import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import TopicDescription from '../components/TopicDescription'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Description: TopicDescription
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator)
