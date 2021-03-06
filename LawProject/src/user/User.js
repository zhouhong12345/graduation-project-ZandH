import React, { Component } from 'react'
import { Text, View, StyleSheet,TouchableOpacity, Dimensions, Image,ImageBackground, ScrollView, AsyncStorage,ToastAndroid } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
const s = width/640;

export default class User extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }


    render() {
        return (
            <View>
                <ScrollView>
                <View style={{backgroundColor:'#CE0000',height:150*s,marginTop:2*s,flexDirection:'row',alignItems:'center'}}>
                   <View style={{width:100*s,height:100*s,borderRadius:50*s,overflow:'hidden',marginLeft:20*s}}>
                        <ImageBackground source={require('../../images/0.png')} style={{width:100*s,height:100*s}}>
                            <Image style={{width:100*s,height:100*s}}  source={this.state.imageUrl}/>
                        </ImageBackground>
                    </View>
                    <Text style={{width:150*s,height:40*s,fontSize:18,marginLeft:35*s}}>{this.state.wusername}</Text>
                    <TouchableOpacity onPress={()=>Actions.wshezhi()} style={{width:130*s,height:30*s,borderRadius:15*s,borderWidth:1,marginLeft:160*s,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:15}}>编辑资料</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bigview}>
                    <View style={styles.wview}>
                        <Image source={require('../../images/0.png')} style={[styles.wlist,{backgroundColor:'#CCCCFF',height:50*s}]}/>
                        <TouchableOpacity onPress={()=>Actions.wgerenziliao()}><Text style={styles.context}>个人名片</Text></TouchableOpacity>
                    </View>
                    <View style={styles.wview}>
                        <Image source={require('../../images/0.png')} style={styles.wlist}/>
                        <TouchableOpacity onPress={()=>Actions.wwodeshoucang()}><Text style={styles.context}>我的收藏</Text></TouchableOpacity>
                    </View>
                    <View style={styles.wview}>
                        <Image source={require('../../images/0.png')} style={styles.wlist}/>
                        <TouchableOpacity onPress={()=>Actions.wwodedingdan()}><Text style={styles.context}>我的订单</Text></TouchableOpacity>
                    </View>
                    <View style={styles.wview}>
                        <Image source={require('../../images/0.png')} style={styles.wlist}/>
                        <TouchableOpacity onPress={()=>Actions.wwodejiaoshi()}><Text style={styles.context}>我的教师</Text></TouchableOpacity>
                    </View>
                    <View style={styles.wview}>
                        <Image source={require('../../images/0.png')} style={styles.wlist}/>
                        <TouchableOpacity onPress={()=>Actions.searchtea()}><Text style={styles.context}>发布上门家教</Text></TouchableOpacity>
                    </View>
                    <View style={styles.wview}>
                        <Image source={require('../../images/0.png')} style={styles.wlist}/>
                        <TouchableOpacity onPress={()=>Actions.wzuoyepingjiaqingkuang()}><Text style={styles.context}>作业评价情况</Text></TouchableOpacity>
                    </View>
                    <View style={styles.wview}>
                        <Image source={require('../../images/0.png')} style={styles.wlist}/>
                        <TouchableOpacity onPress={()=>Actions.wyijianfankui()}><Text style={styles.context}>意见反馈</Text></TouchableOpacity>
                    </View>
                    <View style={styles.wview}>
                        <Image source={require('../../images/0.png')} style={styles.wlist}/>
                        <TouchableOpacity onPress={()=>this.wexitapp()}><Text style={styles.context}>退出登录</Text></TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bigview:{
        width:600*s,
        marginLeft:40*s,
        flex:1,
        borderLeftWidth:3*s,
        height:811*s,
    },
    wlist:{
        width:60*s,
        height:60*s
    },
    wview:{
        flexDirection:'row',
        width:350*s,
        justifyContent:'center',
        height:100*s,
        alignItems:'center'
    },
    context:{
        width:230*s,
        fontSize:20,
        marginLeft:25*s
    }
})