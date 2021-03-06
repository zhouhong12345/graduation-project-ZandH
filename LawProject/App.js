
import React, { useState, useEffect } from 'react';
import { Stylesheet, View, Text, Image, BackHandler, ToastAndroid, AsyncStorage, Dimensions } from 'react-native';
import { Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions } from 'react-native-router-flux';
// import { Icon } from '@ant-design/react-native';
// import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('window');
const s = width/640;

import Home from './src/home/Home';
import Talk from './src/talk/Talk';
import User from './src/user/User';
import Lawyer from './src/layer/Lawyer';
import Dialog from './src/layer/Dialog';

console.disableYellowBox = true;

const App = () => {
	let [isLogin, setLogin] = useState(false);
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
			<Overlay>
				<Modal key="modal" hideNavBar>
					{/* 普通用户端 */}
					<Lightbox key="lightbox">
						<Scene key="root">
							<Tabs
								key='tabbar'
								hideNavBar
								activeTintColor="#fff"
								inactiveTintColor="#707070"
								tabBarStyle={{ backgroundColor: '#CE0000' }}
							>
								{/* Home栏 */}
								<Scene key='homePage'
                				// hideNavBar
									title='法宝'
									icon={
										({ focused }) => <Icon 
                    						color={focused?'white':'#707070'} 
                    						name="home"
                        					size={30}
                    					/>
									}
								>
									<Scene key='home' component={Home} 
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										renderLeftButton={
										<View style={{ marginLeft: 15 * s }}><Icons
										//  name="left" color="white" onPress={Actions.pop} 
										/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white'  }}
										renderRightButton={
										<View></View>
										}
									/>
								</Scene>

								{/* 咨询 */}
								<Scene 
									key="zixunPage"
									title='探讨'
									icon={
									({ focused }) => <Icon
										color={focused?'white':'#707070'} 
										name="people"
										size={30}
									/>
									}
								>
									<Scene key="zixun" 
										component={Talk}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
											//  name="left" color="white" onPress={Actions.pop} 
											/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white'  }}
										renderRightButton={
											<View></View>
										}
									/>
								</Scene>

								{/* 找律师 */}
								<Scene
									key='lvshiPage'
									icon={
									({ focused }) => <Icon 
										color={focused?'white':'#707070'} 
										name="body"
										size={30}
										/>
									}
									title="律师"
									renderLeftButton={
										<View style={{ marginLeft: 15 * s }}><Icon name="left" onPress={Actions.pop} /></View>
									}
								>
									<Scene key='fuwu' 
										title='律师服务' 
										component={Lawyer}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										renderLeftButton={
										<View style={{ marginLeft: 15 * s }}><Icons 
										// name="left" color="white" onPress={Actions.pop} 
										/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white'  }}
										renderRightButton={
										<View></View>
										}
									></Scene>
									<Scene key='dialog' 
										title='律师对话' 
										component={Dialog}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										renderLeftButton={
										<View style={{ marginLeft: 15 * s }}><Icons 
											name="left" color="white" onPress={Actions.pop} 
										/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white'  }}
										renderRightButton={
										<View></View>
										}
									></Scene>
										
								</Scene>
								{/* 用户中心 */}
								<Scene
									key='userPage'
                  					icon={
										({focused})=><Icon
											color={focused?'white':'#909090'} 
											name="person"
                      						size={30}
										/>
                  					}
									initial
									title="我的"
								>

									<Scene key='stdmine' title='个人中心' component={User}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										renderLeftButton={
										<View style={{ marginLeft: 15 * s }}><Icons 
										// name="left" color="white" onPress={Actions.pop} 
										/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
										<View></View>
										}
									/>
									
								</Scene>

							</Tabs>
						</Scene>
					</Lightbox>
					{/* 律师端 */}
					<Lightbox key="lightbox1">
						<Scene key="root">
							<Tabs
								key='tabbar'
								hideNavBar
								activeTintColor="#CE0000"
								inactiveTintColor="#909090"
								tabBarStyle={{ backgroundColor: '#e0e0e0' }}
							>
								{/* Home栏 */}
								<Scene key='homePage'
									title='首页'
									//hideNavBar
									icon={
										({focused})=><Icon 
											color={focused?'white':'#707070'} 
											name="home"
                      size={30}
										/>
									}
								>
									<Scene key='thome'
										title='首页'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -20 }}
										navigationBarStyle={{ backgroundColor: '#708090' }}
										renderLeftButton={
											<View></View>
										}
										component={Home} />
					
								</Scene>
                {/* 用户中心 */}
								<Scene
									key='userPage'
                  icon={
										({focused})=><Icon 
											color={focused?'white':'#909090'} 
											name="user"
                      size={30}
										/>
                  }
									title="我的"
								>

									<Scene key='stdmine' title='个人中心' component={User}/>
									
								</Scene>

							</Tabs>
						</Scene>
					</Lightbox>
					{/* <Scene key="swiperPage0" initial={!isLogin} component={SwiperPage0} />
					<Scene key="swiperPage" component={SwiperPage} />
					<Scene key="login" component={Login} />
					<Scene key="register" component={Register} />
					<Scene key="spassword" component={Spassword} />
					<Scene key="tpassword" component={Tpassword} /> */}
				</Modal>
			</Overlay>
		</Router>
	);
};



export default App;