import React, { Component } from 'react'
import { View,Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import px from '../pxToDp'

export default class Mima extends Component {
    constructor(){
        super();
        this.state={
            origin:'',
            new:'',
            confirm:''
        }
    }
    getValue1 = (e)=>{
        console.log(e);
        this.setState({
            origin:e
        })
    }
    getValue2 = (e)=>{
        console.log(e);
        this.setState({
            new:e
        })
    }
    getValue3 = (e)=>{
        console.log(e);
        this.setState({
            confirm:e
        })
    }
    confirm = ()=>{

    }

    render() {
        return (
            <View style={styles.out}>
                <View style={styles.in}>
                    <Text style={styles.mima}>请输入原密码：</Text>
                    <TextInput style={styles.int} onChangeText={(Text)=>this.getValue1(Text)}></TextInput>
                    <Text style={styles.mima} >请输入新密码：</Text>
                    <TextInput style={styles.int} onChangeText={(Text)=>this.getValue2(Text)}></TextInput>
                    <Text style={styles.mima}>请确认新密码：</Text>
                    <TextInput style={styles.int} onChangeText={(Text)=>this.getValue3(Text)}></TextInput>
                    <TouchableOpacity
                        style={styles.con}
                        onPress={()=>this.confirm()}
                    >
                    <Text style={styles.confirm}>确定</Text>   
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    confirm:{
        fontSize:px(28),
        color:'#fff'
    },
    con:{
        width:px(200),
        height:px(60),
        borderColor:'#CE0000',
        borderWidth:px(1),
        borderRadius:px(4),
        marginLeft:px(100),
        marginTop:px(50),
        backgroundColor:'#CE0000',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    int:{
        borderBottomColor:'#CE0000',
        borderBottomWidth:px(1)
    },
    mima:{
        fontSize:px(28),
        marginTop:px(30),
        color:'#ce0000'
    },
    out:{
        flexDirection:'row',
        justifyContent:'center'
    },
    in:{
        width:'80%',
        height:px(650),
        borderColor:'grey',
        borderWidth:px(1),
        borderRadius:px(5),
        marginTop:px(50),
        padding:px(50)
    }
})
