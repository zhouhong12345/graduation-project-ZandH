import React, { Component } from 'react'
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';
import pxToDp from '../pxToDp'

export default class login extends Component {
    constructor(props) {
        super(props);
        console.log(props.id)
        this.state = {
            id: props.id        //用户身份
        }
    }
    render() {
        console.log(this.state.id)
        return (
            <View style={{ backgroundColor: "white", flex: 1, flexDirection:'column',alignItems:'center'}}>
                <View style={{ width: pxToDp(520), height: pxToDp(500), marginTop: pxToDp(200) }}>
                    <Text style={{ fontSize: pxToDp(40), color: '#CE0000' }}>欢迎登录</Text>
                    <View style={{ marginTop: pxToDp(45), padding: pxToDp(45)}}>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Image source={require('../img/loginuser.png')} style={styles.img} />
                            <TextInput style={styles.input} placeholder='请输入邮箱'></TextInput>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Image source={require('../img/password.png')} style={styles.img} />
                            <TextInput style={styles.input} placeholder='请输入密码' secureTextEntry={true} ></TextInput>
                        </View>
                        {this.state.id == 'normal' ?
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end' }} onPress={()=>Actions.register()}>
                                <Text style={{ color: '#CE0000' }}>注册</Text>
                            </TouchableOpacity> : <View></View>
                        }
                    </View>
                </View>
                <TouchableOpacity onPress={()=>Actions.register()}>
                    <View style={{ width: pxToDp(400), height: pxToDp(80),borderRadius:pxToDp(10), backgroundColor: '#CE0000' ,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white',fontSize:pxToDp(30)}}>登录</Text>
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
