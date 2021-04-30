import React, { Component } from 'react'
import { Text, View, TextInput, Image, TouchableOpacity,AsyncStorage ,StyleSheet, ToastAndroid } from 'react-native'
import { Actions } from 'react-native-router-flux';
import pxToDp from '../pxToDp'

export default class Login extends Component {
    constructor(props) {
        super(props);
        console.log(props.id)
        this.state = {
            id: props.id,        //用户身份
            mail: '',
            pwd: '',
            token: ''
        }
    }
    //获取输入框的值
    userhandle = (text) => {
        this.setState({ mail: text })
    }

    pwdhandle = (text) => {
        this.setState({ pwd: text })
    }

    //点击登录
    login = () => {
        if (this.state.mail === '') {
            ToastAndroid.showWithGravity('请输入邮箱！', 10, ToastAndroid.CENTER);
        } else {
            if (this.state.pwd === '') {
                ToastAndroid.showWithGravity('请输入密码！', 10, ToastAndroid.CENTER);
            } else {
                if (this.state.id === 'normal') {
                    console.log(JSON.stringify({mail:this.state.mail,password:this.state.pwd}));
                    // console.log(JSON.parse({mail:this.state.mail,password:this.state.pwd}));
                    fetch('http://81.70.101.193:8888/user/ulogin', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body:JSON.stringify({mail:this.state.mail,password:this.state.pwd})
                    })
                        .then(res => { return res.json() })
                        .then(res => {
                            console.log(res)
                            if (res.status === -1) {
                                ToastAndroid.showWithGravity(res.data, 10, ToastAndroid.CENTER);
                            }
                            if (res.status === 0) {
                                this.setState({
                                    token: res.token
                                }, () => {
                                    ToastAndroid.showWithGravity(res.data, 10, ToastAndroid.CENTER);
                                    setTimeout(() => {
                                        console.log(this.state.token)
                                        AsyncStorage.setItem('token', JSON.stringify(this.state.token));
                                        Actions.homePage()
                                    }, 1000);
                                })
                            }
                        });
                }
                else if (this.state.id === 'lawyer') {
                    fetch('http://81.70.101.193:8888/user/llogin', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ mail: `${this.state.mail}`, password: `${this.state.pwd}` })
                    })
                        .then(res => { return res.json() })
                        .then(res => {
                            console.log(res)
                            if (res.status === -1) {
                                ToastAndroid.showWithGravity(res.data, 10, ToastAndroid.CENTER);
                            }
                            if (res.status === 0) {
                                this.setState({
                                    token: res.token
                                }, () => {
                                    ToastAndroid.showWithGravity(res.data, 10, ToastAndroid.CENTER);
                                    setTimeout(() => {
                                        console.log(this.state.token)
                                        AsyncStorage.setItem('token', JSON.stringify(this.state.token));
                                      //  Actions.home()
                                    }, 1000);
                                })
                            }
                        });
                }
            }
        }

    }
    render() {
        console.log(this.state.id)
        return (
            <View style={{ backgroundColor: "white", flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <View style={{ width: pxToDp(520), height: pxToDp(500), marginTop: pxToDp(200) }}>
                    <Text style={{ fontSize: pxToDp(40), color: '#CE0000' }}>欢迎登录</Text>
                    <View style={{ marginTop: pxToDp(45), padding: pxToDp(45) }}>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Image source={require('../img/loginuser.png')} style={styles.img} />
                            <TextInput style={styles.input} placeholder='请输入邮箱'
                                onChangeText={this.userhandle} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Image source={require('../img/password.png')} style={styles.img} />
                            <TextInput style={styles.input} placeholder='请输入密码' secureTextEntry={true}
                                onChangeText={this.pwdhandle}
                            />
                        </View>
                        {this.state.id == 'normal' ?
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end' }} onPress={() => Actions.register()}>
                                <Text style={{ color: '#CE0000' }}>注册</Text>
                            </TouchableOpacity> : <View></View>
                        }
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.login()}>
                    <View style={{ width: pxToDp(400), height: pxToDp(80), borderRadius: pxToDp(10), backgroundColor: '#CE0000', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: pxToDp(30) }}>登录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        // backgroundColor:'yellow',
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingLeft: pxToDp(70),
        marginBottom: pxToDp(40)
    },
    img: {
        width: pxToDp(45),
        height: pxToDp(40),
        position: 'absolute',
        top: pxToDp(10)
    }
})
