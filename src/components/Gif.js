import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationBar} from 'teaset-pro';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Gif',
    };
  }
  async componentDidMount() {
    console.log('componentDidMount');
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
          title=""
          leftView={
            <NavigationBar.BackButton
              title=""
              onPress={this.handleGoBack}
            />
          }
        />
        <View style={{margin: 10}}>
        <Text>在 android/app/build.gradle 文件的 dependencies 中添加如下配置，Gif 图片才能正常动态显示</Text>
        <Text>implementation "com.facebook.fresco:animated-gif:2.6.0"</Text>
        </View>
        <Image
          source={require('../assets/images/luffy-1.gif')}
          style={{resizeMode: 'cover'}}></Image>
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
});

export default Gif;
