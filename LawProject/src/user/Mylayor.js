import { ActionSheet } from '@ant-design/react-native';
import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';
import pxToDp from '../pxToDp';

export default class Mylayor extends Component {
    constructor(){
        super();
        this.state={
            data:[1,1,1,22,3]
        }
    }


    open=()=>{
        Actions.dialogg();
    }
    render() {
        return (
            <ScrollView>
                <View style={{marginTop:pxToDp(30)}}>
                    {
                        this.state.data.map(item=>(
                            <TouchableOpacity 
                                style={styles.out} 
                                onPress={()=>this.open()}
                            >
                                <Text style={styles.name}>王大三律师</Text>
                                <Text style={styles.name}>打开会话>></Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    name:{
        // color:'#CE0000',
        fontSize:pxToDp(28)
    },
    out:{
        width:'90%',
        height:pxToDp(80),
        marginTop:pxToDp(15),
        marginLeft:'5%',
        padding:pxToDp(20),
        borderColor:'#CE0000',
        borderRadius:pxToDp(7),
        borderWidth:pxToDp(1),
        flexDirection:'row',
        justifyContent:'space-between'
    }
})