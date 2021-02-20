import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import { Router, Scene, Tabs } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window')

import Home from './src/home/Home';
import Talk from './src/talk/Talk';

console.disableYellowBox = true;

const TabIcon = ({ focused, title }) => {
  if (title == '首页') {
    return (
      <View style={styles.ViewOne}>
        <Icon
          color={focused ? '#CE0000' : '#9D9D9D' }
          size={20}
          name='person'
        />
        <Text style={{ color: focused ? '#CE0000' : '#9D9D9D'  }}>
          {title}
        </Text>
      </View>
    )
  }
  else if (title == '谈话') {
    return (
      <View style={styles.ViewOne}>
        <Icon
          color={focused ? '#CE0000' : '#9D9D9D' }
          size={20}
          name='person'
        />
        <Text
          style={{ color: focused ? '#CE0000' :'#9D9D9D' }}
        >
          {title}
        </Text>
      </View>
    )
  }
  else if (title == '咨询') {
    return (
      <View style={styles.ViewOne}>
        <Icon
          color={focused ? '#CE0000' : '#9D9D9D' }
          size={20}
          name='md-document-text'
        />
        <Text
          style={{ color: focused ? '#CE0000' : '#9D9D9D' }}
        >
          {title}
        </Text>
      </View>
    )
  }
  else if (title == '我的') {
    return (
      <View style={styles.ViewOne}>
        <Icon
          color={focused ? '#CE0000' : '#9D9D9D' }
          size={20}
          name='person'
        />
        <Text
          style={{ color: focused ? '#CE0000' : '#9D9D9D' }}
        >
          {title}
        </Text>
      </View>
    )
  }

}

const App = () => {
  return (
    <Router
      backAndroidHandler={() => {
        if (Actions.currentScene == 'login') {
          // console.log('11');
          Actions.reset('login');
          if (new Date().getTime() - now < 2000) {
            BackHandler.exitApp();
          } else {
            ToastAndroid.show('确定要退出吗', 100);
            now = new Date().getTime();
            return true;
          }
        } else {
          if (Actions.currentScene == 'home') {
            // console.log('22');
            if (new Date().getTime() - now < 2000) {
              BackHandler.exitApp();
            } else {
              ToastAndroid.show('确定要退出吗', 100);
              now = new Date().getTime();
              return true;
            }
          } else {
            Actions.pop();
            return true;
          }
        }
      }}
    >
      <Scene key="root">
        <Tabs
          showLabel={false}
          key="tabbar"
          tabBarStyle={{ backgroundColor: "#fff", height: 50 }}
          activeBackgroundColor="white"
          inactiveBackgroundColor="white"
        >
          <Scene
            key="home"
            hideNavBar
            component={Home}
            title="首页"
            icon={TabIcon}
          />
          <Scene
            key="Talk"
            hideNavBar
            component={Talk}
            title="谈话"
            icon={TabIcon}
          />
          <Scene
            key="Question"
            hideNavBar
            component={Talk}
            title="咨询"
            icon={TabIcon}
          />
          <Scene
            key="Mine"
            hideNavBar
            component={Talk}
            title="我的"
            icon={TabIcon}
          />
        </Tabs>
      </Scene>
    </Router>
  );
};

var styles = StyleSheet.create({
  ViewOne:{
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center'
  }
});

export default App;
