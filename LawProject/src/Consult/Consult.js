import React, { Component } from 'react'
import { View,Text,Dimensions } from 'react-native'

import pxToDp from '../pxToDp';

const {width}=Dimensions.get('window')

export default class Talk extends Component {
    render() {
        return (
            <View>
                <View style={{width:width,height:pxToDp(50),backgroundColor:'yellow'}}>

                </View>
            </View>
        )
    }
}