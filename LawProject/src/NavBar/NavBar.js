import React, { Component } from 'react'
import { StatusBar, Text, View ,TouchableOpacity} from 'react-native'
import pxToDp from '../pxToDp';

export default class NavBar extends Component {
    render() {
        if (this.props.name == '咨询') {
            return (
                <View>
                    <View style={{ height: pxToDp(75), backgroundColor: '#CE0000', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ fontSize: pxToDp(30), color: 'white' ,marginRight:pxToDp(170)}}>{this.props.name}</Text>
                        <TouchableOpacity>
                            <View style={{width:pxToDp(100),height:pxToDp(38),flexDirection:'row',marginRight:pxToDp(20),justifyContent:'center',alignItems:'center',backgroundColor:'white',borderRadius:pxToDp(50)}}>
                                <Text style={{color:'#CE0000',fontSize:pxToDp(25)}}>发布</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View>
                    <View style={{ height: pxToDp(75), backgroundColor: '#CE0000', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: pxToDp(30), color: 'white' }}>{this.props.name}</Text>
                        
                    </View>
                </View>
            )
        }

    }
}
