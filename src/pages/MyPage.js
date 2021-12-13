import React from 'react';
import { simpleUpdate } from 'react-native-update';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import * as Progress from 'react-native-progress';

// --- end ---
// <Image
//   source={
//     require('./assets/images/lf.png')
//   }
//   style={{ width: 200, height: 200 }}
// />
const MyPage = () => {
  return (
    <ScrollView>
      <Text>abc</Text>
      <View>
        <Text>some more text</Text>

        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }} defaultValue="You can type in me" />
        <Progress.Bar
          progress={0.2}
          width={null}
          color={'#30B7FF'}
        />
      </View>
    </ScrollView>
  );
}

export default simpleUpdate(MyPage);
