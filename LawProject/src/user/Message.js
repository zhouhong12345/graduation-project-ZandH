import React, { Component } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import pxToDp from '../pxToDp';

export default class Message extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render() {
        return (
            <View>
                <View style={{marginLeft:pxToDp(80),marginTop:pxToDp(50)}}>
                    <Text style={styles.listcontent}>用户名：{this.state.wusername}</Text>
                    <Text style={styles.listcontent}>性别：{this.state.wsex}</Text>
                    <Text style={styles.listcontent}>手机号：{this.state.wphonenumber}</Text>
                    <Text style={styles.listcontent}>个人签名：</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    listcontent:{
        height:pxToDp(80),
        fontSize:pxToDp(28),
        color:'#CE0000',
        fontWeight:'bold'
    }
})
