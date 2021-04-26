import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, AsyncStorage,ToastAndroid, Button } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

const {width,scale} = Dimensions.get('window');
const s = width / 640;

export default class Lawyer extends Component {
    constructor(){
        super();
        this.state={
            data:[1,2,3,4,5,6,7,8,9,10,1,1,1]
        }
    }

    // selectlaw=(phone)=>{
    //     let a={stdphone:this.state.username,teaphone:phone};
    //     fetch("http://81.70.101.193:8000/selectlaw",{
    //         method:"POST",
    //         headers:{
    //             'Content-Type': 'text/plain',
    //         },
    //         body:JSON.stringify(a)
    //     }).then((res)=>{ 
    //         if(res.status === 200){
    //             alert('选择该律师成功!');
    //             return res.json();
    //         }else{
    //             alert('您已选择该教师！');
    //         }
    //     });
    // }
    select=()=>{
        Actions.dialog()
    }



    render() {
        return (
            <View>
                <ScrollView>
                    <View>
                        {
                            this.state.data.map(item=>(
                                <View style={styles.one}>

                                        <Image source={require('../../images/0.png')} style={styles.law}/>   
                                    {/* <Image  source={{uri:'http://148.70.183.184:8000/images/'+item.teatouxiang}} style={styles.tea}></Image>    */}
                                    <View style={styles.right}>
                                        <Text style={styles.tch}>姓名：李律师{item.wusername}</Text>
                                        <Text style={styles.tch}>性别：男{item.wsex}</Text>
                                        <Text style={styles.tch}>年龄：32{item.wage}</Text>
                                        <Text style={styles.tch}>毕业院校：XXXXXX{item.biyexuexiao}</Text>
                                        <Text style={styles.tch}>就业单位：恒源律师事务所{item.zhiwei}</Text>
                                        <View style={styles.slct}>
                                        <Button
                                            title='了解更多'
                                            color='#CE0000'
                                            onPress={()=>Actions.more()}
                                        />
                                        </View>
                                    </View>
                                    
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    one:{
        width:'95%',
        marginLeft:'2.5%',
        height:250*s,
        flexDirection:'row',
        borderRadius: 30*s,
        borderColor: '#CE0000',
        borderWidth: 1
    },
    two:{
        width:'100%',
        height:400*s
    },
    left:{
        width:'30%',
        height:250*s,
        backgroundColor:'pink',
        borderRadius: 30*s,
    },
    right:{
        width:'50%',
        height:250*s,
        marginLeft:35*s,
        paddingTop:15*s
    },
    law:{
        width:'40%',
        height:250*s,
        borderRadius: 30*s,
    },
    slct:{
        width:'45%',
        marginTop:10*s,
        marginLeft:160*s
    },
    tch:{
        fontSize:24*s
    }
})