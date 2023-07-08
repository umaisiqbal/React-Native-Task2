// import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CounterScreen from './screens/CounterScreen';
import ListScreen from './screens/ListScreen';
import store from './store';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
       
        <Tab.Navigator>
      
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Counter" component={CounterScreen} />
          <Tab.Screen name="List" component={ListScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
