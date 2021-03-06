import React, { Component } from 'react'
import { Text, View, StyleSheet,TouchableOpacity, Dimensions, Image,ImageBackground, ScrollView, AsyncStorage,ToastAndroid } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';

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
                   <View style={{width:100*s,height:100*s,borderRadius:20*s,overflow:'hidden',marginLeft:20*s}}>
                        <ImageBackground source={require('../../images/0.png')} style={{width:100*s,height:100*s}}>
                            <Image style={{width:100*s,height:100*s}}  source={this.state.imageUrl}/>
                        </ImageBackground>
                    </View>
                    <Text style={{width:150*s,height:40*s,fontSize:35*s,marginLeft:35*s,color:'#fff',fontWeight:'bold'}}>用户名{this.state.wusername}</Text>
                    <TouchableOpacity onPress={()=>Actions.shezhi()} style={{marginLeft:200*s}}>
                        <Icon name='setting' size={50} color='#fff'/>
                        <Text style={{marginLeft:12*s,color:'#fff',fontSize:24*s}}>设置</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bigview}>
                    <View style={styles.wview}>
                        <Icon name='menuunfold' size={50} color='#CE0000' />
                        <TouchableOpacity onPress={()=>Actions.msg()}><Text style={styles.context}>个人信息</Text></TouchableOpacity>
                    </View>
                    <View style={styles.wview}>
                        <Icon name='123' size={50} color='#CE0000' />
                        <TouchableOpacity onPress={()=>Actions.wwodeshoucang()}><Text style={styles.context}>我曾提出的问题</Text></TouchableOpacity>
                    </View>
                    <View style={styles.wview}>
                        <Icon name='contacts' size={50} color='#CE0000' />
                        <TouchableOpacity onPress={()=>Actions.wwodedingdan()}><Text style={styles.context}>咨询的律师</Text></TouchableOpacity>
                    </View>
                    <View style={styles.wview}>
                        <Icon name='message1' size={50} color='#CE0000'/>
                        <TouchableOpacity onPress={()=>Actions.wwodejiaoshi()}><Text style={styles.context}>消息通知</Text></TouchableOpacity>
                    </View>
                    <View style={styles.wview}>
                        <Icon name='logout' size={50} color='#CE0000'/>
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
        marginLeft:30*s,
        flex:1,
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
        fontSize:28*s,
        marginLeft:25*s,
        color:'#CE0000'
    }
})