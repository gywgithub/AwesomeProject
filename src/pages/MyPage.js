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
      <Text>mypage</Text>
    </ScrollView>
  );
}

export default simpleUpdate(MyPage);
