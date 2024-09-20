
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from './screen/Category';
import Meal from './screen/Meal';
import MealDescription from './screen/MealDescription';

let stack = createNativeStackNavigator()
function App() {

  return (
    <>
    <NavigationContainer>
      <stack.Navigator  initialRouteName='Home'>
        <stack.Screen name='Home' component={Category}/>
        <stack.Screen name='My Meal' component={Meal}/>
        <stack.Screen name='About My Meal' component={MealDescription}/>
      </stack.Navigator>
      
    </NavigationContainer>
    
    </>
  )
}

export default App;

