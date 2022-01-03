import React, {Component} from 'react';
import {View, Text, StyleSheet, BackHandler} from 'react-native';
import {NavigationBar, Toast} from 'teaset-pro';

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'FirstPage',
    };
  }

  backAction = () => {
    if (this.state.backFlag === 0) {
      Toast.message('再按一次返回将退出APP')
      this.setState({
        backFlag: 1
      })
      return true;
    } else {
      BackHandler.exitApp()
      // return false
    }
  }

  async componentDidMount() {
    console.log('componentDidMount');
    let self = this
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState({
        backFlag: 0
      })
      self.backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        self.backAction
      );
    });

    this.unblurSubscribe = this.props.navigation.addListener('blur', ()=> {
      if (self.backHandler) {
        self.backHandler.remove();
      }
    })
  }

  componentWillUnmount() {
    // this.unsubscribe.remove();
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
          title="Home"
        />
        <Text>{title}</Text>
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

export default FirstPage;
