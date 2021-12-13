import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationBar} from 'teaset-pro';

class TemplateClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'TemplateClassPage',
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
          style={{backgroundColor: '#30B7FF'}}
          title=""
          leftView={
            <NavigationBar.BackButton
              title="TemplatePage"
              onPress={this.handleGoBack}
            />
          }
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

export default TemplateClassPage;
