import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet, Dimensions, FlatList } from 'react-native'
import pxToDp from '../pxToDp'

import { List, Picker, Provider } from '@ant-design/react-native';

const { width } = Dimensions.get('window');

const data = [{ label: '婚姻家庭', value: '婚姻家庭' }, { label: '财务纠纷', value: '财务纠纷' }, { label: '交通事故', value: '交通事故' }, { label: '人身损害', value: '人身损害' },
{ label: '合同纠纷', value: '合同纠纷' }, { label: '医疗事故', value: '医疗事故' }, { label: '债权债务', value: '债权债务' }, { label: '公司法务', value: '公司法务' },
{ label: '房产纠纷', value: '房产纠纷' }, { label: '知识产权', value: '知识产权' }, { label: '遗产继承', value: '遗产继承' }];

// const money = ['悬赏20元', '悬赏40元', '悬赏66元', '悬赏88元', '悬赏100元', '悬赏200元'];

export default class Release extends Component {
    constructor(props) {
        super(props);
        this.onPress = () => {
            setTimeout(() => {
                this.setState({
                    data: data,
                });
            }, 500);
        };
        this.onChange = value => {
            this.setState({ value });
        };
        this.state = {
            data: [],
            value: [],
            height: 30,
            inputValue: '',
            money: [{
                'id': '0', 'value': '悬赏20元', select: false
            },
            { 'id': '1', 'value': '悬赏50元', select: false },
            { 'id': '2', 'value': '悬赏66元', select: false },
            { 'id': '3', 'value': '悬赏88元', select: false },
            { 'id': '4', 'value': '悬赏100元', select: false },
            {
                'id': '5', 'value': '悬赏200元', select: false
            }]
        };
    }

    // {if(item.id=='0'){item.select==true}}

    //是否被选中
    select = (a) => {
        this.state.money.forEach(item => {
            if (item.id == a.id) { item.select = true }
            else {
                item.select = false;
            }

        })
        this.setState({
            money: this.state.money
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
            <View style={{ backgroundColor: 'white', flex: 1, padding: pxToDp(40) }}>
                {/* <View style={{ padding: pxToDp(40), backgroundColor: 'blue', height: pxToDp(800) }}> */}
                <Provider>

                    <View style={{ borderWidth: 1, borderColor: '#FFD2D2', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../img/question.png')} style={{ width: pxToDp(35), height: pxToDp(35), position: 'absolute', zIndex: 9 }} />
                        {/* <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center' }}>
                            <Image source={require('../img/question.png')} style={{ width: pxToDp(35), height: pxToDp(35), marginRight: pxToDp(15) }} />
                            <Text style={{ fontSize: pxToDp(23), color: '#CE0000' }}>问题描述</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}> 
                            <Text style={{ color: '#8E8E8E', fontSize: pxToDp(23) }}>问题类型</Text>
                            <Image source={require('../img/rightarrow.png')} style={{width:pxToDp(20),height:pxToDp(20)}}/>
                        </View> */}
                        <View style={{ width: pxToDp(537), marginLeft: pxToDp(20) }}>
                            <List>
                                <Picker
                                    data={data}
                                    cols={1}
                                    value={this.state.value}
                                    onChange={this.onChange}
                                >
                                    <List.Item arrow="horizontal" onPress={this.onPress}>
                                        <Text style={{ color: '#CE0000', fontSize: pxToDp(23) }}> 问题描述</Text>
                                    </List.Item>
                                </Picker>
                            </List>
                        </View>
                    </View>
                    {/* <View style={{marginTop:pxToDp(20)}}>
                        <TextInput 
                           style={{ height: pxToDp(300), backgroundColor: '#F0F0F0' }}
                           multiline={true}
                           placeholder="请详细描述您的法律需求"
                           placeholderTextColor="gray"
                        ></TextInput>
                    </View> */}


                    {/* //动态计算TextInput高度来解决TextInput文字始终垂直居中的问题 */}
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
                    <View style={{ borderWidth: 1, borderColor: '#FFD2D2', flexDirection: 'row', alignItems: 'center', height: pxToDp(68) }}>
                        <Image source={require('../img/money.png')} style={{ width: pxToDp(37), height: pxToDp(37) }} />
                        <Text style={{ color: '#CE0000', fontSize: pxToDp(23) }}> 悬赏金额</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'gray', fontSize: pxToDp(17), marginBottom: pxToDp(30), marginTop: pxToDp(15) }}>悬赏越多，回复效率和质量越高</Text>
                        <FlatList
                            // keyExtractor={item => item.id}
                            data={this.state.money}
                            // numColumns ={3}
                            contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => this.select(item)}>
                                    <View style={item.select == true ? [styles.common, { borderColor: '#CE0000' }]
                                        : [styles.common, { borderColor: 'gray' }]}>
                                        <Text style={{ color: 'gray', fontSize: pxToDp(26) }}>{item.value}</Text>
                                    </View>
                                </TouchableOpacity>)}
                        />
                    </View>
                    <TouchableOpacity>
                        <View style={{marginTop:pxToDp(20),height:pxToDp(80),backgroundColor:"#CE0000",borderRadius:pxToDp(width/2),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'white',fontSize:pxToDp(35)}}>发布</Text>
                        </View>
                    </TouchableOpacity>

                </Provider>
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
    },
    common: {
        marginBottom: pxToDp(30),
        width: pxToDp(160),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        height: pxToDp(80),
        borderRadius: pxToDp(10),
        borderWidth: 1
    }

})