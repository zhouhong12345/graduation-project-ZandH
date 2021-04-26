import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, Dimensions, Image,TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';
import pxToDp from '../pxToDp'


const { width, height } = Dimensions.get('window');

export default class Ques extends Component {
    constructor(){
        super();
        this.state={
            data:[1,2,3,4,5,6]
        }
    }
    render() {
        return (
            <ScrollView>
                <View>
                {
                    this.state.data.map(item=>(
                        <View
                                style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: pxToDp(20) }}

                            >
                                <View style={{ width: width - pxToDp(30), height: pxToDp(300), backgroundColor: 'white', borderRadius: pxToDp(15), marginBottom: pxToDp(20), padding: pxToDp(15) }}>
                                    <View>
                                        {/* 标题 */}
                                        <Text style={{ fontSize: pxToDp(28), marginBottom: pxToDp(10) }}>离婚后孩子转户口怎么办理</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: pxToDp(10) }}>
                                        {/* 头像 */}
                                        <Image source={require('../img/touxiang.jpg')} style={{ width: pxToDp(35), height: pxToDp(35), borderRadius: pxToDp(30), marginRight: pxToDp(15) }} />
                                        {/* 用户名 */}
                                        <Text style={{ fontSize: pxToDp(18), color: '#5B5B5B' }}>爱嗦粉的臭臭</Text>
                                        {/* 问题描述 */}
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: pxToDp(20), color: 'gray' }}>本人今年21,17年6月份与丈夫离婚，孩子跟我，现在大了要上幼儿园，请问户口应该怎么转？</Text>
                                    </View>
                                    <View style={{ height: pxToDp(30), flexDirection: "row", justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', bottom: 10, right: 20 }}>
                                        <TouchableOpacity onPress={Actions.comment}>
                                            <Image source={require('../img/comment.png')} style={{ marginRight: pxToDp(10), width: pxToDp(32), height: pxToDp(28), marginRight: pxToDp(45) }} />
                                        </TouchableOpacity>
                                        {
                                            this.state.isCollect ?
                                                <TouchableOpacity onPress={() => this.onpress3()} >
                                                    <Image source={require('../img/collect.png')} style={{ width: pxToDp(34), height: pxToDp(34), marginRight: pxToDp(15), marginTop: -pxToDp(2) }} />
                                                </TouchableOpacity> :
                                                <TouchableOpacity onPress={() => this.onpress3()}>
                                                    <Image source={require('../img/collectcolor.png')} style={{ width: pxToDp(38), height: pxToDp(40), marginRight: pxToDp(11), marginTop: -pxToDp(2) }} />
                                                </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            

                            </View>  
                            // :
                            // <View style={{ backgroundColor: 'blue', width: pxToDp(100), height: pxToDp(100) }}>

                            // </View>
                    ))
                    // <View style={{ height: Platform.OS == 'ios' ? 0 : pxToDp(175), }}></View>
                }
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    slideActive: {
        borderBottomWidth: 2,
        borderBottomColor: '#CE0000',
        // backgroundColor:'blue',
        height: pxToDp(40)
    },
    slide: {
        marginLeft: pxToDp(20)
    },
    slidetText: {
        fontSize: pxToDp(23),
        color: '#CE0000'
    }
})