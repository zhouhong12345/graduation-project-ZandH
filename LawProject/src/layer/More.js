import React, { Component } from 'react'
import { Image, ScrollView, TouchableOpacity, StyleSheet, Text, View,Button } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import pxToDp from '../pxToDp'

export default class More extends Component {
    constructor(){
        super(),
        this.state = {
            data:[1,2,3]
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
            <ScrollView>
                <Image source={require('../../images/0.png')} style={styles.head}/>
                <View style={styles.nameout}>
                    <Text style={styles.name}>律师名</Text>
                    <View style={styles.shanchang}>
                        {
                            this.state.data.map(item=>(
                                <Text style={styles.shan}>擅长方面</Text>
                            ))
                        }
                    </View>
                    <View style={styles.danwei}>
                        <Text style={{color:'#666'}}>工作单位</Text>
                        <Text style={{color:'#666'}}>执业时间：time</Text>
                    </View>
                </View>
                {/* 详细资料 */}
                <View style={styles.detail}>
                    <View>
                        <Text style={styles.de}><Text style={styles.shu}>|</Text>详细资料</Text>
                        <View>
                            <View style={styles.zhuanye}>
                                <Icon name="API" size={26} style={{marginRight:pxToDp(10)}}/>
                                <Text style={styles.zhuan}>专业领域</Text>
                            </View>
                            <View style={styles.shanchangg}>
                                {
                                    this.state.data.map(item=>(
                                        <Text style={styles.shann}>擅长方面</Text>
                                    ))
                                }
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.zhuanye}>
                            <Icon name="idcard" size={26} style={{marginRight:pxToDp(10)}}/>
                            <Text style={styles.zhuan}>律师介绍</Text>
                        </View>
                        <View style={styles.intro}>
                            <Text style={styles.introo}>
                                这个律师，毕业于XXXX大学，XX事务所二级合伙人兼任民事综合案件部主任，
                                执业五年以来，代理上千起民事案件、刑事等案件，擅长处理婚姻家庭，债权债务，
                                劳动争议，侵权纠纷等民商事案件。注入平台以来，耐心解答，专业高效，
                                为成千上万客户排忧解难，赢得顾客尊重和认可。
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.zhuanye}>
                            <Icon name="filetext1" size={26} style={{marginRight:pxToDp(10)}}/>
                            <Text style={styles.zhuan}>经典案例</Text>
                            <TouchableOpacity onPress={()=>Actions.seemore()}><Text style={styles.duo}>查看更多>></Text></TouchableOpacity>
                        </View>
                        <View style={styles.anli}>
                                <Text style={styles.anlii}>
                                    劳动纠纷
                                </Text>
                                <Text style={styles.anlibtm}>[案情]事务所二级合伙人兼任民事综合案件部主任，
                                执业五年以来，代理上千起民事案件、刑事等案件，擅长处理婚姻家庭，债权债务，
                                劳动争议，侵权纠纷等民商事案件。注入平台以来，耐心解答，专业高效，
                                为成千上万客户排忧解难，赢得顾客尊重和认可。
                                </Text>
                                <Text style={styles.anlibtm}>[结果]事务所二级合伙人兼任民事综合案件部主任，
                                执业五年以来，代理上千起民事案件、刑事等案件，擅长处理婚姻家庭，债权债务，
                                劳动争议，侵权纠纷等民商事案件。注入平台以来，耐心解答，专业高效，
                                为成千上万客户排忧解难，赢得顾客尊重和认可。
                                </Text>
                            
                        </View>
                    </View>
                    <View>
                        <View style={styles.zhuanye}>
                            <Icon name="enviromento" size={26} style={{marginRight:pxToDp(10)}}/>
                            <Text style={styles.zhuan}>律所信息</Text>
                        </View>
                        <View style={styles.intro}>
                            <Text style={styles.introon}>荣华律师事务所</Text>
                            <Text style={styles.introon}>地址：山西省大同市中心街</Text>
                        </View>
                    </View>
            </View>
            </ScrollView>
            <View>
                <TouchableOpacity 
                    style={styles.bot}
                    onPress={()=>Actions.dialog()}
                >
                    <Text style={styles.bott}>咨询该律师</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bott:{
        fontSize:pxToDp(30),
        color:'#fff'
    },
    bot:{
        fontSize:pxToDp(25),
        height:pxToDp(60),
        backgroundColor:'#CE0000',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    anlibtm:{
        fontSize:pxToDp(22)
    },
    anli:{
        width:'85%',
        height:pxToDp(250),
        borderColor:'grey',
        borderWidth:pxToDp(1),
        marginLeft:pxToDp(45),
        borderRadius:pxToDp(4),
        padding:pxToDp(10),
        overflow:'hidden'
    },
    anlii:{
        fontSize:pxToDp(26)
    },
    duo:{
        color:'red',
        fontSize:pxToDp(26),
        marginLeft:pxToDp(250)
    },
    intro:{
        paddingLeft:pxToDp(45)
    },
    introo:{
        fontSize:pxToDp(24),
        color:'grey'
    },
    introon:{
        fontSize:pxToDp(24),
        color:'#222'
    },
    zhuan:{
        fontSize:pxToDp(26)
    },
    zhuanye:{
        marginTop:pxToDp(20),
        flexDirection:'row',
        marginBottom:pxToDp(5)
    },
    head:{
        width:'94%',
        height:pxToDp(450),
        marginLeft:'3%'
    },
    nameout:{
        paddingLeft:'3%',
        paddingTop:pxToDp(10)
    },
    name:{
        fontSize:pxToDp(28),
        color:'red'
    },
    shanchang:{
        marginTop:pxToDp(10),
        paddingLeft:pxToDp(5),
        flexDirection:'row'
    },
    shanchangg:{
        marginTop:pxToDp(10),
        flexDirection:'row',
        paddingLeft:pxToDp(50)
    },
    shan:{
        fontSize:pxToDp(20),
        backgroundColor:'white',
        marginRight:pxToDp(5),
        color:'grey',
        marginBottom:pxToDp(10),
    },
    shann:{
        fontSize:pxToDp(20),
        backgroundColor:'#ddd',
        color:'#444',
        marginRight:pxToDp(13),
    },
    danwei:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:pxToDp(30),
        
    },
    detail:{
        width:'94%',
        marginLeft:'2%',
        marginTop:pxToDp(20),
        padding:'2%',
        backgroundColor:'white'
    },
    de:{
        fontSize:pxToDp(24)
    },
    shu:{
        fontWeight:'bold',
        color:'red',
        fontSize:pxToDp(30)
    }
})