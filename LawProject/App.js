/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {Router,Scene, Tabs} from 'react-native-router-flux';
import Home from './src/home/Home';
import Talk from './src/talk/Talk';

console.disableYellowBox=true;

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
          key="tabbar"
          showLabel={true}
          tabBarStyle={{backgroundColor: "#e0e0e0"}}
          activeBackgroundColor="white"
          inactiveBackgroundColor="red"
        >
          <Scene 
            key="home" 
            hideNavBar
            component={Home} 
            title="首页"
            // icon={
            //   ({ focused }) => <Image
            //     source={focused ? require('./assets/cq/cshou1.png') : require('./assets/cq/cshou.png')}
            //     style={{ width: 25, height: 25 }}

            //   />
            // }
          />
        </Tabs>
        <Tabs
          key="讨论"
          // 是否显示标签栏文字
          showLabel={false}
          tabBarStyle={{backgroundColor: "#e0e0e0"}}
          activeBackgroundColor="white"
          inactiveBackgroundColor="red"
        >
          <Scene key="talk" component={Talk} />
        </Tabs>
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
