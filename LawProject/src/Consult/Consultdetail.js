
import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native'
import pxToDp from '../pxToDp'

const { width } = Dimensions.get('window');

export default class Consultdetail extends Component {
    constructor() {
        super();
        this.state = {
            modalVisible: false,
            isCollected: false,
            inputValue: '',
            height: 30,
            isAdopt:false//表示是否已采纳过某一回答
        }
    }
    collect = () => {
        if (this.state.isCollected) {
            this.setState({
                isCollected: false
            })
        } else {
            this.setState({
                isCollected: true
            })
        }
    }
    adopt=()=>{
        if (this.state.isAdopt) {
            this.setState({
                isAdopt: false
            })
        } else {
            this.setState({
                isAdopt: true
            })
        }
    }
    setModalVisible = (visible) => {
        this.setState({
            modalVisible: visible
        })

    };
    closeModal = () => {
        console.log('a')
        this.setState({
            modalVisible: false
        })
    }

    cauculateHeight(e) {
        // console.log(e.nativeEvent.contentSize.height)
        if (e.nativeEvent.contentSize.height > 30) {
            height = e.nativeEvent.contentSize.height;
        } else {
            height = this.state.height;
        }
        this.setState({
            height: height
        })
    }
    changeText(text) {
        this.setState({
            inputValue: text
        })
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                {/* 评论 */}
                <Modal animationType={'fade'}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onrequestclose={() => { console.log(this.state.modalVisible) }}
                    onShow={() => { console.log(this.state.modalVisible) }}
                >
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => this.closeModal()} style={{ backgroundColor: 'black', flex: 1, opacity: 0.3 }}>
                        <View >
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: pxToDp(550) }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: pxToDp(10), paddingBottom: pxToDp(30), borderBottomColor: '#E0E0E0', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: pxToDp(30) }}>评论</Text>
                        </View>

                        <View style={styles.textInputOuter} >
                            <TouchableOpacity activeOpacity={1} style={styles.textInputInner} onPress={() => this.TextInput.focus()} >
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    multiline
                                    placeholder="请详细描述您的法律需求"
                                    placeholderTextColor="gray"
                                    // numberOfLines={5}
                                    value={this.state.inputValue}
                                    ref={textInput => this.TextInput = textInput}
                                    onContentSizeChange={e => this.cauculateHeight(e)}
                                    onChangeText={text => this.changeText(text)}
                                    style={[styles.textInput, { height: this.state.height }]}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingRight: pxToDp(40) }}>
                            <TouchableOpacity onPress={() => this.closeModal()}>
                                <View style={{ width: pxToDp(200), height: pxToDp(60), backgroundColor: '#CE0000', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10) }}>
                                    <Text style={{ color: 'white', fontSize: pxToDp(27) }}>提交</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Modal>


                {/* 头像和用户名 */}
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: pxToDp(20), paddingBottom: 0 }}>
                    <Image source={require('../img/touxiang.jpg')} style={{ width: pxToDp(70), height: pxToDp(70), borderRadius: pxToDp(35), marginRight: pxToDp(20) }} />
                    <Text style={{ fontSize: pxToDp(22) }}>爱嗦粉的臭臭</Text>
                </View>
                <View style={{ padding: pxToDp(20), borderBottomWidth: 1, borderBottomColor: '#E0E0E0' }}>
                    {/* 大标题 */}
                    <Text style={{ fontSize: pxToDp(30), marginBottom: pxToDp(10) }}>离婚后孩子转户口怎么办理</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                            <Text style={{ fontSize: pxToDp(20), color: 'gray', marginRight: pxToDp(25) }}>0个回答</Text>
                            {/* 时间 */}
                            <Text style={{ fontSize: pxToDp(20), color: 'gray' }}>2021/3/21</Text>
                        </View>
                        <TouchableOpacity onPress={() => { this.collect() }}>
                            <View style={{ marginRight: pxToDp(20) }}>
                                {
                                    this.state.isCollected ?
                                        <Text style={{ color: 'gray', fontSize: pxToDp(22) }}>已收藏</Text>
                                        :
                                        <Text style={{ color: 'gray', fontSize: pxToDp(22) }}>收藏</Text>
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* 正文 */}
                <View style={{ padding: pxToDp(32) }}>
                    <Text style={{ fontSize: pxToDp(22), color: '#5B5B5B' }}>本人今年21,17年6月份与丈夫离婚，孩子跟我，现在大了要上幼儿园，请问户口应该怎么转？</Text>
                </View>
                {/* 评论 */}
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#E0E0E0', padding: pxToDp(20), paddingLeft: pxToDp(30), paddingRight: pxToDp(20), flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
                        <View style={{ width: pxToDp(155), height: pxToDp(60), marginRight: pxToDp(20), backgroundColor: '#CE0000', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: pxToDp(10) }}>
                            <Image source={require('../img/answer.png')} style={{ width: pxToDp(33), height: pxToDp(30) }} />
                            <Text style={{ color: 'white', fontSize: pxToDp(25) }}>我来回答</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                {/* 评论区 */}
                <ScrollView>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#E0E0E0', height: pxToDp(300) }}>
                        {/* 头像 */}
                        <View style={{ padding: pxToDp(20), flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../img/touxiang1.jpg')} style={{ width: pxToDp(56), height: pxToDp(56), borderRadius: pxToDp(28), marginRight: pxToDp(20) }} />
                            <View >
                                <Text style={{ fontSize: pxToDp(19) }}>最讨厌螺蛳粉</Text>
                                <Text style={{ fontSize: pxToDp(19), color: '#5B5B5B' }}>2021/4/44</Text>
                            </View>
                        </View>
                        {/* 评论内容 */}
                        <View style={{ padding: pxToDp(20), paddingTop: 0, height: pxToDp(150) }}>
                            <Text style={{ color: '#5B5B5B' }}>
                                这个我还真不知道, 这个我还真不知道, 这个我还真不知道, 这个我还真不知道 这个我还真不知道, 这个我还真不知道 这个我还真不知道 这个我还真不知道s
                            </Text>
                        </View>
                       
                        <TouchableOpacity>{
                            
                            <View style={{ marginLeft: pxToDp(500), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#CE0000', width: pxToDp(100), height: pxToDp(40), borderRadius: pxToDp(50) }}>
                                <Text style={{ color: 'white', fontSize: pxToDp(20) }}>采纳</Text>
                            </View>
                        }
                        </TouchableOpacity>
                       
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#E0E0E0', height: pxToDp(300) }}>
                        {/* 头像 */}
                        <View style={{ padding: pxToDp(20), flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../img/touxiang1.jpg')} style={{ width: pxToDp(56), height: pxToDp(56), borderRadius: pxToDp(28), marginRight: pxToDp(20) }} />
                            <View >
                                <Text style={{ fontSize: pxToDp(19) }}>最讨厌螺蛳粉</Text>
                                <Text style={{ fontSize: pxToDp(19), color: '#5B5B5B' }}>2021/4/44</Text>
                            </View>
                        </View>
                        {/* 评论内容 */}
                        <View style={{ padding: pxToDp(20), paddingTop: 0, height: pxToDp(150) }}>
                            <Text style={{ color: '#5B5B5B' }}>
                                这个我还真不知道, 这个我还真不知道, 这个我还真不知道, 这个我还真不知道 这个我还真不知道, 这个我还真不知道 这个我还真不知道 这个我还真不知道s
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <View style={{ marginLeft: pxToDp(500), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#CE0000', width: pxToDp(100), height: pxToDp(40), borderRadius: pxToDp(50) }}>
                                <Text style={{ color: 'white', fontSize: pxToDp(20) }}>采纳</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#E0E0E0', height: pxToDp(300) }}>
                        {/* 头像 */}
                        <View style={{ padding: pxToDp(20), flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../img/touxiang1.jpg')} style={{ width: pxToDp(56), height: pxToDp(56), borderRadius: pxToDp(28), marginRight: pxToDp(20) }} />
                            <View >
                                <Text style={{ fontSize: pxToDp(19) }}>最讨厌螺蛳粉</Text>
                                <Text style={{ fontSize: pxToDp(19), color: '#5B5B5B' }}>2021/4/44</Text>
                            </View>
                        </View>
                        {/* 评论内容 */}
                        <View style={{ padding: pxToDp(20), paddingTop: 0, height: pxToDp(150) }}>
                            <Text style={{ color: '#5B5B5B' }}>
                                这个我还真不知道, 这个我还真不知道, 这个我还真不知道, 这个我还真不知道 这个我还真不知道, 这个我还真不知道 这个我还真不知道 这个我还真不知道s
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <View style={{ marginLeft: pxToDp(500), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#CE0000', width: pxToDp(100), height: pxToDp(40), borderRadius: pxToDp(50) }}>
                                <Text style={{ color: 'white', fontSize: pxToDp(20) }}>采纳</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textInputOuter: {
        height: pxToDp(300),
        alignItems: 'center',
        marginTop: pxToDp(20),
        marginBottom: pxToDp(30)

    },
    textInputInner: {
        height: pxToDp(300),
        width: width - pxToDp(80),
        backgroundColor: '#F0F0F0'
    },
    textInput: {
        paddingVertical: 0,
        fontSize: pxToDp(22),
        color: '#333333',
        maxHeight: pxToDp(300),
        // backgroundColor:'blue'
    }

})