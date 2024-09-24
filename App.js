import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import AllExpenses from './screen/AllExpenses';
import RecentExpenses from './screen/RecentExpenses';
import ManageExpenses from './screen/ManageExpenses';
import ExpenseProvider from './context/ExpenseProvider';
import { COLORS } from './constants/colors';
import UiIconBtn from './ui/UiIconButton';
let bottomTabNavigator = createBottomTabNavigator();
let nativeStack = createNativeStackNavigator();

let BottomTabComponent = () => {
  return (
    <bottomTabNavigator.Navigator screenOptions={({navigation})=>(
      {
      headerStyle: { backgroundColor: COLORS.red },
      headerRight: () => <UiIconBtn
       onPress={() => navigation.navigate('manage')} 
       name={'add'} 
       color={COLORS.white} 
       size={32} />,
      headerTintColor: COLORS.white,
      tabBarActiveTintColor: COLORS.white,
      tabBarInactiveTintColor: '#222',
      tabBarStyle: {
        backgroundColor: COLORS.darkRed,
      }

    })}>
      <bottomTabNavigator.Screen 
      name='expenses'
       component={AllExpenses} 
       options={{ title: 'All Expenses', tabBarIcon: ({ size, color }) => <Ionicons name="calendar" size={size} color={color} /> }} />
      <bottomTabNavigator.Screen 
      name='recent' 
      component={RecentExpenses} 
      options={{ title: 'Recent Expenses', tabBarIcon: ({ size, color }) => <Ionicons name="hourglass" size={size} color={color} /> }} />
    </bottomTabNavigator.Navigator>
  )
}
export default function App() {

  return (
    <>
      <ExpenseProvider>
        <StatusBar style='dark' />
        <NavigationContainer theme={{ colors: { background: '#eee' } }}>
          <nativeStack.Navigator screenOptions={{
            headerStyle: { backgroundColor: COLORS.red },
            headerTintColor: 'white'
          }}>
            <nativeStack.Screen name='expense' component={BottomTabComponent}
              options={
                {
                  title: 'All Expenses',
                  headerShown: false,
                  headerRight: () => {

                  }
                }
              } />
            <nativeStack.Screen 
             name='manage'
             
             component={ManageExpenses} 
             options={{ title: 'Manage Expense' , presentation:'formSheet'}} />
          </nativeStack.Navigator>
        </NavigationContainer>
      </ExpenseProvider>
    </>
  );
}


