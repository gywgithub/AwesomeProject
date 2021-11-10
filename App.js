import React from 'react';
import { simpleUpdate } from 'react-native-update';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>123456</Text>
      <Text>abc</Text>      
      <View>
        <Text>some more text</Text>
        <Image
          source={
            require('./images/avatar-mini.png')
          }
          style={{ width: 200, height: 200 }}
        />
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }} defaultValue="You can type in me" />
      </View>
    </ScrollView>
  );
}

export default simpleUpdate(App);
