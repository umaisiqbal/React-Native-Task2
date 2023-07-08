import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counterActions';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to HomeScreen!</Text>
      <Button title="Go to CounterScreen" onPress={() => navigation.navigate('CounterScreen')} />
    </View>
  );
}
