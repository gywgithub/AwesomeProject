import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationBar} from 'teaset-pro';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Profile',
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
          title="Profile"
        />
        <View>
          <Image
            style={styles.avatarImg}
            source={require('../assets/images/avatar-mini.png')}
          />
        </View>
        <View>
          <View style={styles.textView}>
            <Text style={styles.textTitle}>Author：</Text>
            <Text style={styles.textValue}>Sabo</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.textTitle}>GitHub: </Text>
            <Text style={styles.textValue}>https://github.com/gywgithub</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.textTitle}>Email: </Text>
            <Text style={styles.textValue}>qingyi_w@outlook.com</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.textTitle}>QQ: </Text>
            <Text style={styles.textValue}>1119536080</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.textTitle}>掘金: </Text>
            <Text style={styles.textValue}>参谋总长萨博</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.textTitle}>简书: </Text>
            <Text style={styles.textValue}>参谋总长萨博</Text>
          </View>
        </View>
        <Image
          style={styles.wechatImg}
          source={require('../assets/images/wechat_search.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  avatarImg: {
    marginTop: 90,
    width: 180,
    height: 180,
    borderRadius: 10,
  },
  wechatImg: {
    width: 350,
    height: 170,
    resizeMode: 'contain',
  },
  textView: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4,
  },
  textTitle: {
    fontSize: 20,
    width: 80,
    color: '#d9d9d9',
  },
  textSize: {
    fontSize: 20,
    color: '#d9d9d9',
  },
  textValue: {
    fontSize: 20,
    color: '#d9d9d9',
  },
});

export default Profile;
