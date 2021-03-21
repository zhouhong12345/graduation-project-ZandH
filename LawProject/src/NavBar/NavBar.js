import React, { Component } from 'react'
import { StatusBar, Text, View, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
import pxToDp from '../pxToDp';

export default class NavBar extends Component {
    render() {
        if (this.props.name == '咨询'|| this.props.name == '案例'||this.props.name == '律师'||this.props.name == '个人中心') {
            return (
                <View>
                    <View style={{ height: pxToDp(70), backgroundColor: '#CE0000', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: pxToDp(30), color: 'white' }}>{this.props.name}</Text>

                    </View>
                </View>
            )
        }
        else {
            return (
                <View>
                    <View style={{ height: pxToDp(70), backgroundColor: '#CE0000', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <TouchableOpacity onPress={Actions.pop}>
                            <View>
                                <Image source={require('../img/leftarrow.png')} style={{ width: pxToDp(35), height: pxToDp(25) ,marginLeft:pxToDp(20)}} />
                            </View>
                        </TouchableOpacity >
                        <View style={{width:pxToDp(530),flexDirection:'row',justifyContent:'center'}}>
                            <Text style={{ fontSize: pxToDp(30), color: 'white' }}>{this.props.name}</Text>
                        </View>
                    </View>
                </View>
            )
        }

    }
}
