import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationBar, TabView} from 'teaset-pro';

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
          title="TemplatePage"
          leftView={
            <NavigationBar.BackButton
              title=""
              onPress={this.handleGoBack}
            />
          }
        />
        <Text>{title}</Text>
        <TabView style={{flex: 1}} type='projector'>
          <TabView.Sheet
            title='Home'
            icon={require('../icons/home.png')}
            activeIcon={require('../icons/home_active.png')}
          >
            <YourHomePage />
          </TabView.Sheet>
          <TabView.Sheet
            title='Me'
            icon={require('../icons/me.png')}
            activeIcon={require('../icons/me_active.png')}
            badge={1}
          >
            <YourMePage />
          </TabView.Sheet>
        </TabView>
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
