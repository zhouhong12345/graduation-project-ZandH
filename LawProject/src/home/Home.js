import React, { Component } from 'react'
import { View,Text , Dimensions} from 'react-native'
import pxToDp from '../pxToDp';


const { width, height } = Dimensions.get('window')

export default class Home extends Component {
    render() {
        return (
            <View>
                <View style={{width:'100%',height:pxToDp(500),backgroundColor:'red'}}>

                </View>
            </View>
        )
    }
}
