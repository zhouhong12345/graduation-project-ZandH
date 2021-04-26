import React, { Component } from 'react'
import { ScrollView, View ,Text,Image,StyleSheet, ProgressBarAndroidBase, TextInput} from 'react-native'
import pxToDp from '../pxToDp';

export default class Dialogg extends Component {
    constructor(){
        super();
        this.state={
            data:[1,2,3,4]
        }
    }
    render() {
        return (
            <View>
                <View style={styles.dlg}>
                <ScrollView>
                {
                    this.state.data.map(item=>(
                        <View style={styles.out}>
                            <Image  source={require('../../images/0.png')} style={styles.head}/>
                            <View style={styles.one}>
                                <View style={styles.right}>
                                    <Text style={styles.con}>123123434581</Text>
                                </View>
                            </View>
                        </View>
                    ))
                }
                </ScrollView>
                </View>
                <View style={styles.ipt}>
                <TextInput style={styles.int}>请输入</TextInput>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    out:{
        flexDirection:'row',
        marginLeft:pxToDp(30),
        
    },
    dlg:{
        height:'92%',
        // backgroundColor:'#CC000C'
    },
    one:{
        backgroundColor:'#CE0000',
        width:'80%',
        marginLeft:'2.5%',
        borderRadius: pxToDp(10),
        borderColor: '#CE0000',
        borderWidth: 1,
        marginTop:pxToDp(10),
        
    },
    head:{
        width:pxToDp(70),
        height:pxToDp(70),
        marginTop:pxToDp(10),
        borderRadius:pxToDp(10)
    },
    right:{
        width:'80%',
        // backgroundColor:'red',
        marginLeft:'4%',
        
    },
    con:{
        fontSize:pxToDp(25),
        color:'white'
    },
    ipt:{
        backgroundColor:'#ce0000',
        width:'100%',
        height:pxToDp(80)
    },
    int:{
        color:'white',
        fontSize:pxToDp(25),
        height:pxToDp(80)
    }
})