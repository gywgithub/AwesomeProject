import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {StackActions} from '@react-navigation/native';

class TemplateClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'TemplateClassPage'
    };
  }
  async componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    const {title} = this.state
    return (
      <View style={styles.container}>
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

export default TemplateClassPage;
