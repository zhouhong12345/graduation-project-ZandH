
import React, { useState, useEffect } from 'react';
import { Stylesheet, View, Text, Image, BackHandler, ToastAndroid, AsyncStorage, Dimensions } from 'react-native';
import { Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions } from 'react-native-router-flux';
// import { Icon } from '@ant-design/react-native';
// import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Ionicons';
import NavBar from './src/NavBar/NavBar';
import Consultdetail from './src/Consult/Consultdetail';

//登陆
import Identity from "./src/start/Identity"
// import Login1 from './src/start/Login'
// import Login2 from './src/start/Login2'
import Login from './src/start/Login'
import Register from './src/start/Register'


//咨询
import Comment from '../LawProject/src/Consult/Comment'
import Release from '../LawProject/src/Consult/Release'//发布


const { width, height } = Dimensions.get('window');
const s = width / 640;

import pxToDp from './src/pxToDp';//等价上面两句




import Home from './src/home/Home';
//import Talk from './src/talk/Talk';

import Consult from './src/Consult/Consult'
import User from './src/user/User';
import Lawyer from './src/layer/Lawyer';
import Msg from './src/user/Msg';
import More from './src/layer/More';
import Shezhi from './src/user/Shezhi';
import Ques from './src/user/Ques';
import Mylayor from './src/user/Mylayor';
import Star from './src/user/Star';
import Money from './src/user/Money';
import Infor from './src/user/Infor';
import Fankui from './src/user/Fankui';
import Jingdian from './src/layer/Jingdian';
import Dialog from './src/layer/Dialog';
import Mima from './src/user/Mima';
import Dialogg from './src/user/Dialogg';
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
								activeTintColor="#CE0000"
								inactiveTintColor="#707070"
								tabBarStyle={{ backgroundColor: '#e0e0e0' }}
							>
								{/* Home栏 */}
								<Scene key='normal'
									// hideNavBar
									title='案例'
									icon={
										({ focused }) => <Icon
											color={focused ? '#CE0000' : '#707070'}
											name="newspaper-sharp"
											size={26}
										/>
									}
								>
									<Scene key='home' component={Home}
										// navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='案例' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
											//  name="left" color="white" onPress={Actions.pop} 
											/></View>
										}
										// titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									/>
								</Scene>

								{/* 咨询 */}
								<Scene
									key="zixunPage"
									title='咨询'
									icon={
										({ focused }) => <Icon
											color={focused ? '#CE0000' : '#707070'}
											name="chatbubble-ellipses"
											size={26}
										/>
									}
								>
									<Scene key="zixun"
										component={Consult}
										//navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='咨询' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
											//  name="left" color="white" onPress={Actions.pop} 
											/></View>
										}
										//titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									/>
									<Scene key="comment" hideTabBar component={Comment}
									/>
									<Scene key="release" hideTabBar component={Release}
										navBar={() => <NavBar name='发布' />}
									/>
									<Scene key="cdetail" hideTabBar component={Consultdetail}
										navBar={() => <NavBar name='详情' />
										} />

								</Scene>

								{/* 找律师 */}
								<Scene
									key='lvshiPage'
									icon={
										({ focused }) => <Icon
											color={focused ? '#CE0000' : '#707070'}
											name="people"
											size={26}
										/>
									}
									title="律师"
									renderLeftButton={
										<View style={{ marginLeft: 15 * s }}><Icon name="left" onPress={Actions.pop} /></View>
									}
								>
									<Scene key='zixun' title='律师服务' component={Lawyer}
										// navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='律师' />}
										renderLeftButton={
<<<<<<< HEAD
											<View style={{ marginLeft: 15 * s }}><Icons
											// name="left" color="white" onPress={Actions.pop} 
											/></View>
										}
										//titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									></Scene>

								</Scene>
								{/* 用户中心 */}
								<Scene
									key='userPage'
									icon={
										({ focused }) => <Icon
											color={focused ? '#CE0000' : '#909090'}
											name="person"
											size={26}
										/>
									}

									title="我的"
								>
									<Scene key='more' title='律师信息' component={More}
=======
											<View style={{ marginLeft: 15 * s }}><Icon name="left" onPress={Actions.pop} /></View>
										}
									>
										<Scene key='zixun' title='律师服务' component={Lawyer}
											// navigationBarStyle={{ backgroundColor: '#CE0000' }}
											navBar={() => <NavBar name='律师' />}
											renderLeftButton={
												<View style={{ marginLeft: 15 * s }}><Icons
												// name="left" color="white" onPress={Actions.pop} 
												/></View>
											}
											//titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
											renderRightButton={
												<View></View>
											}
										></Scene>
										<Scene key='more' title='律师信息' component={More}
>>>>>>> 1fb64312837d94f4238cebc731d6c0a951006373
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='律师信息' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
												name="left" color="white" onPress={Actions.pop}
											/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									></Scene>
									<Scene key='seemore' title='经典案例' component={Jingdian}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='经典案例' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
												name="left" color="white" onPress={Actions.pop}
											/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									></Scene>
									<Scene key='dialog' title='duihua' component={Dialog}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='对话' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
												name="left" color="white" onPress={Actions.pop}
											/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									></Scene>
<<<<<<< HEAD
									<Scene key='stdmine' title='个人中心' component={User}
										// navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='个人中心' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
											// name="left" color="white" onPress={Actions.pop} 
											/></View>
										}
										//titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}

										title="我的"
									/>

=======
									</Scene>
									{/* 用户中心 */}
									<Scene
										key='myPage'
										icon={
											({ focused }) => <Icon
												color={focused ? '#CE0000' : '#707070'}
												name="people"
												size={26}
											/>
										}
										title="个人中心"
										// renderLeftButton={
										// 	<View style={{ marginLeft: 15 * s }}><Icon name="left" onPress={Actions.pop} /></View>
										// }
									>
									<Scene key='myuser' title='个人中心' component={User}
											// navigationBarStyle={{ backgroundColor: '#CE0000' }}
											navBar={() => <NavBar name='个人中心' />}
											renderLeftButton={
												<View style={{ marginLeft: 15 * s }}><Icons
												// name="left" color="white" onPress={Actions.pop} 
												/></View>
											}
											//titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
											renderRightButton={
												<View></View>
											}
									>
									</Scene>
>>>>>>> 1fb64312837d94f4238cebc731d6c0a951006373
									<Scene key='stdmine' title='个人中心' component={User}
										// navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='个人中心' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
											// name="left" color="white" onPress={Actions.pop} 
											/></View>
										}
										//titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									/>
									<Scene key='msg' title='个人信息' component={Msg}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='个人信息' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
												name="left" color="white" onPress={Actions.pop}
											/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									></Scene>
									<Scene key='shezhi' title='设置' component={Shezhi}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='设置' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
												name="left" color="white" onPress={Actions.pop}
											/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									></Scene>
									<Scene key='code' title='mima' component={Mima}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='更改密码' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
												name="left" color="white" onPress={Actions.pop}
											/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									></Scene>
									<Scene key='ques' title='问题' component={Ques}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='提出的问题' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
												name="left" color="white" onPress={Actions.pop}
											/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									></Scene>
									<Scene key='mylayor' title='律师' component={Mylayor}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='咨询律师' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
												name="left" color="white" onPress={Actions.pop}
											/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									></Scene>
									<Scene key='dialogg' title='duihua' component={Dialogg}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='律师对话' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
												name="left" color="white" onPress={Actions.pop}
											/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									></Scene>
									<Scene key='star' title='收藏' component={Star}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='我的收藏' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
												name="left" color="white" onPress={Actions.pop}
											/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									></Scene>
									<Scene key='money' title='钱包' component={Money}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='我的钱包' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
												name="left" color="white" onPress={Actions.pop}
											/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									></Scene>
									<Scene key='infor' title='tongzhi' component={Infor}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='消息通知' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
												name="left" color="white" onPress={Actions.pop}
											/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									></Scene>
									<Scene key='fankui' title='反馈' component={Fankui}
										navigationBarStyle={{ backgroundColor: '#CE0000' }}
										navBar={() => <NavBar name='用户反馈' />}
										renderLeftButton={
											<View style={{ marginLeft: 15 * s }}><Icons
												name="left" color="white" onPress={Actions.pop}
											/></View>
										}
										titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
										renderRightButton={
											<View></View>
										}
									></Scene>
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
										({ focused }) => <Icon
											color={focused ? '#CE0000' : '#707070'}
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
<<<<<<< HEAD
										component={Home} />

								</Scene>
								{/* 用户中心 */}
								<Scene
									key='userPage'
									icon={
										({ focused }) => <Icon
											color={focused ? '#CE0000' : '#909090'}
											name="user"
											size={30}
										/>
									}
									title="我的"
								>
									<Scene key='stdmine' title='个人中心' component={User} />
=======
										title="我的"
									>
										<Scene key='user' title='个人中心' component={User} />
>>>>>>> 1fb64312837d94f4238cebc731d6c0a951006373

								</Scene>

							</Tabs>
						</Scene>
					</Lightbox>
					<Scene initial={true} key='identity' component={Identity} />
					{/* 普通用户，律师登陆注册 */}
					<Scene key='login' component={Login} />
					<Scene key='register' component={Register} />
					{/* 律师登陆
						<Scene  key='login2' component={Login2} /> */}
				</Modal>
			</Overlay>
		</Router>
	);
};



export default App;