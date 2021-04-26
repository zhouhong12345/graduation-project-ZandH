import React, { Component } from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';
import pxToDp from '../pxToDp';

export default class Identity extends Component {
    constructor() {
        super();
        this.state = {
            isActive1: true,
            isActive2: false
        }
    }
    //普通用户身份
    onpress1 = (a) => {
        this.setState({
            isActive1: true,
            isActive2: false,
        })
        setTimeout(() => {
            Actions.login(a)
           
        }, 500);
    }
    //律师
    onpress2 = (b) => {
        this.setState({
            isActive2: true,
            isActive1: false
        })
        setTimeout(() => {
            Actions.login(b)
        }, 500);
    }

    render() {
        return (
            <View style={{backgroundColor:"white",flex:1}}>
                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: pxToDp(120) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, borderColor: '#CE0000', width: pxToDp(100) }}></View>
                        <Text style={{ fontSize: pxToDp(30), color: '#CE0000' }}>请选择身份</Text>
                        <View style={{ borderWidth: 1, borderColor: '#CE0000', width: pxToDp(100) }}></View>
                    </View>
                    <TouchableOpacity onPress={() => this.onpress1({id:'normal'})}>
                        <View style={this.state.isActive1 ? [styles.identity, { borderColor: '#CE0000' }] : [styles.identity, { borderColor: 'gray' }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: pxToDp(100), height: pxToDp(100), borderRadius: pxToDp(80), backgroundColor: '#CE0000' }}>
                                <Image source={require('../img/users.png')} style={{ width: pxToDp(60), height: pxToDp(60) }} />
                            </View>
                            <Text style={{ fontSize: pxToDp(30), marginLeft: pxToDp(100) }}>普通用户</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onpress2({id:'lawyer'})}>
                        <View style={this.state.isActive2 ? [styles.identity, { borderColor: '#CE0000' }] : [styles.identity, { borderColor: 'gray' }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: pxToDp(100), height: pxToDp(100), borderRadius: pxToDp(80), backgroundColor: '#CE0000' }}>
                                <Image source={require('../img/users.png')} style={{ width: pxToDp(60), height: pxToDp(60) }} />
                            </View>
                            <Text style={{ fontSize: pxToDp(30), marginLeft: pxToDp(100) }}>律  师</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    identity: {
        marginTop: pxToDp(70),
        marginBottom:pxToDp(30),
        borderWidth: 1,
        width: pxToDp(530),
        height: pxToDp(150),
        padding: pxToDp(20),
        borderRadius: pxToDp(10),
        flexDirection: "row", alignItems: "center"
    }
})