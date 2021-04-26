import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import pxToDp from '../pxToDp'

export default class Money extends Component {
    constructor(){
        super(),
        this.state={
            data:[1,1,1]
        }
    }
    render() {
        return (
            <View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <View style={styles.yueout}>
                        <Text style={styles.yue}>余额</Text>
                        <Text style={styles.yue}>100.00元</Text>
                    </View>
                    
                </View>
                <View  style={{flexDirection:'row',justifyContent:'center'}}>
                <View  style={styles.jilu}>
                    <Text style={styles.yue}>消费记录：</Text>
                    <View>
                        {
                            this.state.data.map(item=>(
                                <View>
                                    <Text style={styles.spand}>发布案例解答悬赏消费人民币{this.state.data.money}元</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    spand:{
        fontSize:pxToDp(28),
        color:'white',
        marginTop:pxToDp(10)
    },
    yueout:{
        width:'90%',
        height:pxToDp(150),
        borderColor:'#CE0000',
        borderWidth:pxToDp(1),
        marginTop:pxToDp(20),
        padding:pxToDp(50),
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#CE0000'
    },
    yue:{
        fontSize:pxToDp(32),
        color:'white',
        fontWeight:'bold'
    },
    jilu:{
        width:'90%',
        borderColor:'#CE0000',
        borderWidth:pxToDp(1),
        marginTop:pxToDp(20),
        padding:pxToDp(50),
        flexDirection:'column',
        backgroundColor:'#CE0000'
    },
})