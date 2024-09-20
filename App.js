import { StatusBar } from 'expo-status-bar';
import Welcome from './screen/Welcome';
import User from './screen/User';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const stack = createDrawerNavigator()
export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <stack.Navigator initialRouteName='Welcome'>
          <stack.Screen name='User'
           component={User}
           options={{ title: 'shrey', headerTintColor: '#f3333f',headerStyle:{
            backgroundColor:'#000000'
           } }} />
          <stack.Screen name='Welcome' component={Welcome} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}


