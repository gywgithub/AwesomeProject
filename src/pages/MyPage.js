import React from 'react';
import { simpleUpdate } from 'react-native-update';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import { MMKV } from 'react-native-mmkv'
import * as Progress from 'react-native-progress';


// --- 以下代码不能在远程 debbuger 模式下运行 ---
const storage = new MMKV()
storage.set('user.name', 'Marc')
storage.set('user.age', 21)
const username = storage.getString('user.name') // 'Marc'
const age = storage.getNumber('user.age') // 21
console.log(username)
console.log(age)
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
      <Text>123456</Text>
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
