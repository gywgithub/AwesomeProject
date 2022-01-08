import React, {Component} from 'react';
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
      homeActive: true
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
          source={require('../../assets/images/avatar-mini.png')}
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
    let {type, custom, homeActive} = this.state;
    console.log('homeActive: ', homeActive)
    let bigIcon = (
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 48, height: 48, marginTop: 18}}
          source={require('../../assets/icons/home_active.png')}
        />
      </View>
    );

    return (
      <TabView
        style={{flex: 1}}
        type={type}
        onChange={index => {
          console.log('index: ', index)
          if (index === 0) {
            this.setState({
              homeActive: true
            })
          } else {
            this.setState({
              homeActive: false
            })
          }
        }}
        >
        <TabView.Sheet
          title={homeActive ? '' : 'Home'}
          icon={require('../../assets/icons/home.png')}
          activeIcon={bigIcon}
          active={homeActive}
          >
          <HomePage
            type={type}
            custom={custom}
            onChangeType={activeType => this.setState({type: activeType})}
            onChangeCustom={cus => this.setState({custom: cus})}
          />
        </TabView.Sheet>
        <TabView.Sheet
          title="Components"
          icon={require('../../assets/icons/home.png')}
          activeIcon={require('../../assets/icons/component_active.png')}>
          <HomePage
            type={type}
            custom={custom}
            onChangeType={activeType => this.setState({type: activeType})}
            onChangeCustom={cus => this.setState({custom: cus})}
          />
        </TabView.Sheet>
        <TabView.Sheet
          title="Me"
          icon={require('../../assets/icons/me.png')}
          activeIcon={require('../../assets/icons/me_active.png')}
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

class HomeOnePiece extends Component {
  renderPage() {
    const title = 'Home One Piece'
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Label type="detail" size="xl" text={title} />
      </View>
    );
  }
}
