import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import TopicDescription from '../components/TopicDescription'
import TestScreen from '../screens/TestScreen'
import DescriptionScreen from '../screens/DescriptionScreen'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Description: DescriptionScreen,
    Test: TestScreen
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator)
