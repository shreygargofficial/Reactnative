import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screen/Home';
import Notified from './Screen/Notified';


export default function App() {


  let stack = createNativeStackNavigator()
  return (
    <>

      <StatusBar style='dark' />
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name='home' component={Home} />
          <stack.Screen name='notified' component={Notified} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}


