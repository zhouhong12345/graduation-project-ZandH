import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import pxToDp from '../pxToDp'

export default class Jingdian extends Component {
    render() {
        return (
            <View>
                <ScrollView>
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
                </ScrollView>
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
        marginLeft:pxToDp(45),
        padding:pxToDp(10),
    },
    anlii:{
        fontSize:pxToDp(26),
        color:'#CE0000'
    }
})