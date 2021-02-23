import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'
import pxToDp from '../pxToDp';

export default class NavBar extends Component {
    render() {
        return (
            <View>
               <View style={{height:pxToDp(75),backgroundColor:'#CE0000',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:pxToDp(30),color:'white'}}>{this.props.name}</Text>
               </View>
            </View>
        )
    }
}
