import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Image, TextInput, PointPropType } from 'react-native'
import { Scene, Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';//悬浮按钮
import ModalDropdown from 'react-native-modal-dropdown';//下拉列表

import pxToDp from '../pxToDp';

const { width, height } = Dimensions.get('window');
const select = ['婚姻家庭', '财务纠纷', '交通事故', '人身损害', '合同纠纷', '医疗事故', '债权债务', '公司法务', '房产纠纷', '知识产权', '遗产继承'];

export default class Talk extends Component {
    constructor() {
        super();
        this.state = {
            isActive1: true,//最新
            isActive2: false,//最热
            isCollect: false,
            token: ''
        }
    }
    //点击最新
    onpress1 = () => {
        this.setState({
            isActive1: true,
            isActive2: false,
        })

    }
    //点击最热
    onpress2 = () => {
        this.setState({
            isActive2: true,
            isActive1: false
        })

    }
    onpress3 = () => {
        console.log('aa')
        if (this.state.isCollect) {
            this.setState({
                isCollect: false
            })
        }
        else {
            this.setState({
                isCollect: true
            })
        }

    }


    render() {
        return (
            <View style={{ height: height, backgroundColor: '#FFECEC' }}
            >
                <View style={{ width: width }}>
                    <View style={{ flexDirection: 'row', alignItems: "center", paddingTop: pxToDp(10) }}>
                        <View style={{ width: pxToDp(400), marginRight: pxToDp(40), marginLeft: pxToDp(20), height: pxToDp(46), backgroundColor: "#EBD6D6", flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', borderRadius: pxToDp(25) }}>
                            <Image source={require('../img/loupe.png')} style={{ width: pxToDp(30), height: pxToDp(30), marginLeft: pxToDp(20), marginRight: pxToDp(10) }} />
                            <TextInput placeholder='搜索' placeholderTextColor='gray' style={{ padding: 0, width: pxToDp(300), height: pxToDp(46) }} />
                        </View>
                        <TouchableOpacity onPress={() => { Actions.comment }}>
                            <View style={{ width: pxToDp(150), height: pxToDp(46), flexDirection: 'row', marginRight: pxToDp(20), flexDirection: 'row', justifyContent: "center", alignItems: 'center', backgroundColor: '#CE0000', borderRadius: pxToDp(23) }}>
                                <Text style={{ color: 'white', fontSize: pxToDp(24) }}>搜索</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: width, height: pxToDp(60), flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={this.state.isActive1 ? [styles.slideActive, styles.slide] : [styles.slide]} onPress={() => this.onpress1()}>
                            <View style={{}}>
                                <Text style={this.state.isActive1 ? styles.slidetText : { color: 'gray' }}>最新</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.isActive2 ? [styles.slideActive, styles.slide] : [styles.slide]} onPress={() => this.onpress2()}>
                            <View>
                                <Text style={this.state.isActive2 ? styles.slidetText : { color: 'gray' }}>最热</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', justifyContent: "flex-end", marginLeft: pxToDp(370) }}>
                            <ModalDropdown 
                              options={select}
                              dropdownStyle={{borderWidth:2}}
                              textStyle={{fontSize:30}}
                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#CE0000', fontSize: pxToDp(22), marginLeft: pxToDp(47) }}>分类</Text>
                                    <Image source={require('../img/downredarrow.png')} style={{ width: pxToDp(17), height: pxToDp(10), marginLeft: pxToDp(10) }} />
                                </View>
                            </ModalDropdown>
                        </View>
                    </View>
                </View>

                {/* 发布悬浮按钮 */}
                <View style={{ backgroundColor: 'transparent', zIndex: 3, width: width, height: height - pxToDp(270), position: 'absolute', top: pxToDp(115) }}
                    pointerEvents='box-none'
                >
                    <ActionButton buttonColor='#CE0000'
                        position='center'
                        onPress={Actions.release}
                        renderIcon={() => (<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../img/add.png')} style={{ width: pxToDp(45), height: pxToDp(45) }} />
                        </View>)}
                    />
                </View>

                {/* 页面 */}
                <ScrollView style={{ flex: 1, zIndex: 2 }}>
                    {/* <View> */}
                    {
                        this.state.isActive1 ?
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
                                        <Image source={require('../img/comment.png')} style={{ marginRight: pxToDp(10), width: pxToDp(32), height: pxToDp(28), marginRight: pxToDp(45) }} />
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
                            :
                            <View style={{ backgroundColor: 'blue', width: pxToDp(100), height: pxToDp(100) }}>

                            </View>
                    }
                    <View style={{ height: Platform.OS == 'ios' ? 0 : pxToDp(175), }}></View>
                </ScrollView>

                {/* // </View> */}

            </View>
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