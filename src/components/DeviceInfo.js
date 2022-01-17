import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationBar} from 'teaset-pro';
import { getUniqueId, getDeviceId } from 'react-native-device-info';

class DeviceInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'DeviceInfoPage',
      uniqueId: getUniqueId(),
      Id: getDeviceId()
    };
  }
  async componentDidMount() {
    console.log('componentDidMount');
    console.log('getUniqueId ', getUniqueId())
    console.log('getDeviceId ', getDeviceId())
  }

  handleGoBack = () => {
    console.log('go back');
    this.props.navigation.goBack();
  };

  render() {
    const {title, Id, uniqueId} = this.state;
    return (
      <View style={styles.container}>
        <NavigationBar
          title="DeviceInfoPage"
          leftView={
            <NavigationBar.BackButton
              title=""
              onPress={this.handleGoBack}
            />
          }
        />
        <Text style={{color: '#d9d9d9'}}>https://github.com/react-native-device-info/react-native-device-info</Text>
        <Text style={{marginTop: 20, color: '#d9d9d9'}}>getDeviceId() : {Id}</Text>
        <Text style={{marginTop: 20, color: '#d9d9d9'}}>getUniqueId() : {uniqueId}</Text>
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

export default DeviceInfoPage;
