import React, { Component } from 'react'
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';
import pxToDp from '../pxToDp'

export default class login extends Component {
    constructor(props) {
        super(props);

    }

    getCross = () => {
        console.log('a')
    }
    render() {
        return (
            <View style={{ backgroundColor: "white", flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <View style={{ width: pxToDp(520), height: pxToDp(650), marginTop: pxToDp(200) }}>
                    <Text style={{ fontSize: pxToDp(40), color: '#CE0000' }}>注册</Text>
                    <View style={{ marginTop: pxToDp(45), padding: pxToDp(45) }}>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Image source={require('../img/loginuser.png')} style={styles.img} />
                            <TextInput style={styles.input} placeholder='请输入邮箱'></TextInput>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Image source={require('../img/password.png')} style={styles.img} />
                            <TextInput style={styles.input} placeholder='请设置密码' secureTextEntry={true} ></TextInput>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Image source={require('../img/password.png')} style={styles.img} />
                            <TextInput style={styles.input} placeholder='确认密码' secureTextEntry={true} ></TextInput>
                        </View>

                        <View style={{ flexDirection: "row",alignItems:'center'}}>
                            <Image source={require('../img/code.png')} style={{ position: 'absolute', top: pxToDp(15), width: pxToDp(35), height: pxToDp(37), marginLeft: pxToDp(6) }} />
                            <TextInput style={styles.codeinput} placeholder='请输入验证码' maxLength={4} ></TextInput>
                            <TouchableOpacity onPress={() => getCross()}>
                                <View style={{ flexDirection: 'row', marginBottom:pxToDp(40),justifyContent: "center", alignItems: "center", width: pxToDp(100), height: pxToDp(40), backgroundColor: '#CE0000', borderRadius: pxToDp(10)}}>
                                    <Text style={{ color: 'white', fontSize: pxToDp(16) }}>获取验证码</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => Actions.register()}>
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
    codeinput:{
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingLeft: pxToDp(70),
        marginBottom: pxToDp(40),
        width:pxToDp(330)
    },
    img: {
        width: pxToDp(45),
        height: pxToDp(40),
        position: 'absolute',
        top: pxToDp(10)
    }
})
