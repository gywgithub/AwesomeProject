import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from './pages/Welcome'

const Stack = createNativeStackNavigator();
// <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen name="Welcome" component={Welcome} />
//   </Stack.Navigator>
// </NavigationContainer>

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
