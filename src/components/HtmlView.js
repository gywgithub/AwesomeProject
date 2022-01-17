import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationBar} from 'teaset-pro';
import HTMLView from 'react-native-htmlview';

class HtmlViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'HtmlViewPage',
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
    const htmlContent = `<p><a href="https://github.com/gywgithub">github-sabo</a></p>`;

    return (
      <View style={styles.container}>
        <NavigationBar
          title="HtmlViewPage"
          leftView={
            <NavigationBar.BackButton title="" onPress={this.handleGoBack} />
          }
        />
        <Text>{title}</Text>
        <HTMLView value={htmlContent} stylesheet={styles.a} />
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
  a: {
    fontWeight: '300',
    color: '#FF3366',
  },
});

export default HtmlViewPage;
