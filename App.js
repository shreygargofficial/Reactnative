import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, SafeAreaView } from 'react-native'
import AllPlaces from './screen/AllPlaces';
import AddPlace from './screen/AddPlace';
import Map from './screen/Map';
import { colors } from './constants/color';
import PlaceDetail from './screen/PlaceDetail';


export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style='default' />
      <NavigationContainer>
        <stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: colors.lightRed
          },
          headerTintColor: colors.white,
          contentStyle: { backgroundColor: colors.lightPurple }
        }}>
          <stack.Screen name='allPlace' component={AllPlaces} options={{
            title: 'My Places'
          }} />
          <stack.Screen name='addPlace' component={AddPlace}
            options={
              {
                title: 'Add your Place',
                headerBackTitle: 'back'
              }
            } />
          <stack.Screen name='map' component={Map} options={{ title: 'Choose Location', headerBackTitle: 'back' }} />
          <stack.Screen name='placeDetail' component={PlaceDetail} options={{ title: 'Detail of', headerBackTitle: 'back' }} />

        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}


