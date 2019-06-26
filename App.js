import React, {useState, useEffect} from 'react';
import { Text, View, AsyncStorage, Button } from 'react-native';

import style from './AppStyle'

// ----- Async Storage Functions -----
const setCounter = async (count) => {
  try {
    return await AsyncStorage.setItem('counter', `${count}`);
  } catch (error) {
    console.log(error);
  }
};

const getCounter = async () => {
  return await AsyncStorage.getItem('counter').then(counter => counter ? parseInt(counter) : 0);
};

// ----- Main Component -----
export default function App() {
  const [count, setCount] = useState(0);
  const onButtonPress = () => {
    const counterValue = count + 1;

    setCount(counterValue);
    setCounter(counterValue);
  };

  useEffect(() => { getCounter().then(counterValue => setCount(counterValue)) }, []);

  return (
    <View style={style.container}>
      <Button onPress={onButtonPress} title="Click Me" color="#1089F5"/>
      <Text style={style.text}>You clicked {count} times.</Text>
    </View>
  );
}