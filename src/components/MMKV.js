import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';
// import { MMKV } from 'react-native-mmkv'
import {NavigationBar} from 'teaset-pro';

class TemplateClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'MMKV data, See terminal',
    };
  }
  async componentDidMount() {
    console.log('componentDidMount');
    // --- 以下代码不能在远程 debbuger 模式下运行 ---
    // const storage = new MMKV()
    // storage.set('user.name', 'Marc')
    // storage.set('user.age', 21)
    // const username = storage.getString('user.name') // 'Marc'
    // const age = storage.getNumber('user.age') // 21
    // console.log(username)
    // console.log(age)
    // --- end ---
  }

  handleGoBack = () => {
    console.log('go back');
    this.props.navigation.goBack();
  };

  render() {
    const {title} = this.state;
    return (
      <View style={styles.container}>
        <NavigationBar
          title="MMKV"
          leftView={
            <NavigationBar.BackButton title="" onPress={this.handleGoBack} />
          }
        />
        <Text style={styles.textColor}>{title}</Text>
        <Text style={styles.textColor}>
          由于使用mmkv每次添加新包需要重新下载安装mmkv相关包，导致项目启动比较慢，本项目中暂时移除
        </Text>
        <Text style={styles.textColor}>
          mmkv教程 https://www.jianshu.com/p/f0b4a4c76084
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  textColor: {
    color: '#d9d9d9',
  },
});

export default TemplateClassPage;
