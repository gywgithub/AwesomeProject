import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Switch,
  Platform,
  StatusBar,
} from 'react-native';

import {
  NavigationPage,
  BasePage,
  ListRow,
  TabView,
  Label,
  SelectRow,
  Toast,
} from 'teaset-pro';

export default class TabViewExample extends BasePage {
  static defaultProps = {
    ...BasePage.defaultProps,
  };

  constructor(props) {
    super(props);
    Object.assign(this.state, {
      type: 'projector',
      custom: false,
    });
  }

  renderCustomButton() {
    let bigIcon = (
      <View
        style={{
          width: 54,
          height: 54,
          borderRadius: 27,
          shadowColor: '#ccc',
          shadowOffset: {height: -1},
          shadowOpacity: 0.5,
          shadowRadius: 0.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 44, height: 44, borderRadius: 22}}
          source={require('../assets/images/avatar-mini.png')}
        />
      </View>
    );
    return (
      <TabView.Sheet
        type="button"
        title="Custom"
        icon={bigIcon}
        iconContainerStyle={{justifyContent: 'flex-end'}}
        onPress={() => Toast.message('Custom button press')}
      />
    );
  }

  renderPage() {
    StatusBar.setHidden(false);
    StatusBar.setBarStyle('light-content');
    let {type, custom} = this.state;
    let customBarStyle =
      Platform.OS === 'android'
        ? null
        : {
            borderTopWidth: 0,
            shadowColor: '#ccc',
            shadowOffset: {height: -1},
            shadowOpacity: 0.4,
            shadowRadius: 0.5,
          };
    return (
      <TabView
        style={{flex: 1}}
        barStyle={custom ? customBarStyle : null}
        type={type}>
        <TabView.Sheet
          title="Home"
          icon={require('../assets/icons/home.png')}
          activeIcon={require('../assets/icons/home_active.png')}>
          <HomePage
            type={type}
            custom={custom}
            onChangeType={activeType => this.setState({type: activeType})}
            onChangeCustom={cus => this.setState({custom: cus})}
          />
        </TabView.Sheet>
        {custom ? this.renderCustomButton() : null}
        <TabView.Sheet
          title="Me"
          icon={require('../assets/icons/me.png')}
          activeIcon={require('../assets/icons/me_active.png')}
          badge={1}>
          <MePage />
        </TabView.Sheet>
      </TabView>
    );
  }
}

class HomePage extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Home',
  };

  renderPage() {
    let {type, custom, onChangeCustom, onChangeType} = this.props;
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <SelectRow
          title="Type"
          value={type}
          items={['projector', 'carousel']}
          onSelected={item => onChangeType && onChangeType(item)}
          topSeparator="full"
          bottomSeparator="full"
        />
        <View style={{height: 20}} />
        <ListRow
          title="Custom"
          detail={
            <Switch
              value={custom}
              onValueChange={value => onChangeCustom(value)}
            />
          }
          topSeparator="full"
          bottomSeparator="full"
        />
      </ScrollView>
    );
  }
}

class MePage extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Me',
  };

  renderPage() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Label type="detail" size="xl" text={this.props.title} />
      </View>
    );
  }
}
