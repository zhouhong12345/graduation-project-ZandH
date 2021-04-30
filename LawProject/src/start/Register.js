import React, { Component } from 'react'
import { Text, View, TextInput, Image, TouchableOpacity, AsyncStorage, ToastAndroid, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';
import pxToDp from '../pxToDp'

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            pwd: '',
            repwd: '',
            code: '',
            token: '',
            // initId: '',
            num: 0
        }
    }

    userhandle = (text) => {
        this.setState({ mail: text })
    }
    pwdhandle = (text) => {
        this.setState({ pwd: text })
    }
    codehandle = (text) => {
        this.setState({ code: text })
    }
    repwdhandle = (text) => {
        this.setState({ repwd: text })
    }


    //发送验证码
    getCode = (e) => {
        fetch('http://81.70.101.193:8888/user/sendcode', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mail: `${this.state.mail}` })
        }).then(res => { return res.json() })
            .then(res => {
                console.log(res)
                if (res.status === -1) {
                    ToastAndroid.showWithGravity(res.data, 10, ToastAndroid.CENTER);
                }
                if (res.status === 0) {
                    ToastAndroid.showWithGravity(res.data, 10, ToastAndroid.CENTER);
                }
            });
    }

    toRegister = () => {

        if (this.state.mail === '') {
            ToastAndroid.showWithGravity('请先填写邮箱！', 10, ToastAndroid.CENTER);
        }
        else {
            if (this.state.code == '') {
                ToastAndroid.showWithGravity('请先填写验证码！', 10, ToastAndroid.CENTER);
            } else {
                if (this.state.pwd === '') {
                    ToastAndroid.showWithGravity('请先填写密码！', 10, ToastAndroid.CENTER);
                } else {
                    if (this.state.repwd === '') {
                        ToastAndroid.showWithGravity('请再次输入密码！', 10, ToastAndroid.CENTER);
                    } else {
                        // if (this.state.num % 2 != 0) {
                        console.log('aa')
                        fetch('http://81.70.101.193:8888/user/register', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ mail: `${this.state.mail}`, code: `${this.state.code}`, password: `${this.state.pwd}`, repassword: `${this.state.repwd}` })
                        })
                            .then(res => { return res.json() })
                            .then(res => {
                                console.log(res)
                                if (res.status === -1) {
                                    ToastAndroid.showWithGravity(res.data, 10, ToastAndroid.CENTER);
                                }
                                if (res.status === 0) {
                                    ToastAndroid.showWithGravity(res.data, 10, ToastAndroid.CENTER);
                                    setTimeout(() => {
                                        Actions.login({ id: 'normal' })
                                    }, 1000);
                                }
                            });
                        // } 
                    }
                }
            }
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: "white", flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <View style={{ width: pxToDp(520), height: pxToDp(650), marginTop: pxToDp(200) }}>
                    <Text style={{ fontSize: pxToDp(40), color: '#CE0000' }}>注册</Text>
                    <View style={{ marginTop: pxToDp(45), padding: pxToDp(45) }}>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Image source={require('../img/loginuser.png')} style={styles.img} />
                            <TextInput style={styles.input} placeholder='请输入邮箱'
                                onChangeText={this.userhandle}
                            ></TextInput>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Image source={require('../img/password.png')} style={styles.img} />
                            <TextInput style={styles.input} placeholder='请设置密码' secureTextEntry={true}
                                onChangeText={this.pwdhandle}
                            ></TextInput>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Image source={require('../img/password.png')} style={styles.img} />
                            <TextInput style={styles.input} placeholder='确认密码' secureTextEntry={true}
                                onChangeText={this.repwdhandle}
                            ></TextInput>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Image source={require('../img/code.png')} style={{ position: 'absolute', top: pxToDp(15), width: pxToDp(35), height: pxToDp(37), marginLeft: pxToDp(6) }} />
                            <TextInput style={styles.codeinput} placeholder='请输入验证码' maxLength={6}
                                onChangeText={this.codehandle}
                            ></TextInput>
                            <TouchableOpacity onPress={() => this.getCode()}>
                                <View style={{ flexDirection: 'row', marginBottom: pxToDp(40), justifyContent: "center", alignItems: "center", width: pxToDp(100), height: pxToDp(40), backgroundColor: '#CE0000', borderRadius: pxToDp(10) }}>
                                    <Text style={{ color: 'white', fontSize: pxToDp(16) }}>获取验证码</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.toRegister()}>
                    <View style={{ width: pxToDp(400), height: pxToDp(80), borderRadius: pxToDp(10), backgroundColor: '#CE0000', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: pxToDp(30) }}>注册</Text>
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
    codeinput: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingLeft: pxToDp(70),
        marginBottom: pxToDp(40),
        width: pxToDp(330)
    },
    img: {
        width: pxToDp(45),
        height: pxToDp(40),
        position: 'absolute',
        top: pxToDp(10)
    }
})
