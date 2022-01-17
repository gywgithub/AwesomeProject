import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationBar} from 'teaset-pro';
import * as Progress from 'react-native-progress';

class ProgressPage extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    console.log('componentDidMount');
  }

  handleGoBack = () => {
    console.log('go back');
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title="Progress"
          leftView={
            <NavigationBar.BackButton title="" onPress={this.handleGoBack} />
          }
        />
        <Progress.Bar progress={0.3} width={200} color={'white'} />
        <Progress.Pie progress={0.4} size={100}  color={'white'} style={{marginTop: 30}} />
        <Progress.Circle
          size={60}
          indeterminate={true}
          style={{marginTop: 30}}
        />
        <Progress.CircleSnail
          size={60}
          color={['red', 'green', 'blue']}
          style={{marginTop: 30}}
        />
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

export default ProgressPage;
