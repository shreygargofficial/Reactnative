
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Category from './screen/Category';
import Meal from './screen/Meal';
import MealDescription from './screen/MealDescription';
import Favorite from './screen/Favorite';
import { StatusBar } from 'expo-status-bar';
import FavoriteMealProvider from './context/FavoriteMealProvider';

let stack = createNativeStackNavigator()
let drawer = createDrawerNavigator();

function DrawerComponent() {
  return <drawer.Navigator>
    <drawer.Screen name='Home' component={Category} />
    <drawer.Screen name="Favourite" component={Favorite} />
  </drawer.Navigator>
}
function App() {

  return (
    <>
      <StatusBar style='dark' />
      <FavoriteMealProvider>
        <NavigationContainer>
          <stack.Navigator initialRouteName='Land'>
            <stack.Screen name='Land' component={DrawerComponent} options={{ headerShown: false, title: 'my home' }} />
            <stack.Screen name='My Meal' component={Meal} />
            <stack.Screen name='About My Meal' component={MealDescription} />
          </stack.Navigator>
        </NavigationContainer>
      </FavoriteMealProvider>

    </>
  )
}

export default App;

