import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import pxToDp from '../pxToDp';
import ModalDropdown from 'react-native-modal-dropdown';//下拉列表
const select1 = ['全部', '婚姻家庭', '财务纠纷', '交通事故', '人身损害', '合同纠纷', '医疗事故', '债权债务', '公司法务', '房产纠纷', '知识产权', '遗产继承'];

const { width, height } = Dimensions.get('window');


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            isActive1: true,
            isActive2: false,
            isCollect: false,
            ccontent: '',
            ctype: '',
            cmethod: '',
            data: [],
            type: '全部',
            text: '',
            token: ''
        }
    }
    componentDidMount() {
        if (this.state.isActive1) {
            fetch('http://81.70.101.193:8888/law/inquire/lawcase')
                .then(res => { return res.json() })
                .then(res => {
                    this.setState({
                        data: res.data,
                    })
                })
        }

    }

    // componentDidUpdate() {
    //     if (this.state.isActiv1) {
    //         fetch('http://81.70.101.193:8888/law/inquire/lawcase')
    //             .then(res => { return res.json() })
    //             .then(res => {
    //                 this.setState({
    //                     data: res.data,
    //                 })
    //             })
    //     }
    //      else if (this.state.isActive2) {
    //         fetch('http://81.70.101.193:8888/law/inquire/law')
    //             .then(res => { return res.json() })
    //             .then(res => {
    //                 this.setState({
    //                     data: res.data,
    //                 })
    //             })
    //     }
    // }



    //点击法律案例
    onpress1 = () => {
        this.setState({
            isActive1: true,
            isActive2: false,
        })

        fetch('http://81.70.101.193:8888/law/inquire/lawcase')
            .then(res => { return res.json() })
            .then(res => {
                this.setState({
                    data: res.data,
                })
                // this.state.data.map((item, idx) => (
                //     console.log(item.ctitle.slice(0, 15))
                // ))
            })

    }
    //点击法律法规
    onpress2 = () => {
        this.setState({
            isActive2: true,
            isActive1: false
        })
        fetch('http://81.70.101.193:8888/law/inquire/law')
            .then(res => { return res.json() })
            .then(res => {
                this.setState({
                    data: res.data,
                })
                // console.log(this.state.data)
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

    //模糊查询
    getText = (text) => {
        this.setState({
            text: text
        })
    }
    search = () => {
        var allData = this.state.data
        allData.map((item, i) => {
            item.hidden = false
        })

        if (this.state.isActive1) {
            if (this.state.text.length > 0) {
                allData.map((item, i) => {
                    if (item.ctitle.search(this.state.text) === -1) {
                        item.hidden = true
                    }
                })
                this.setState({ data: allData })
            } else {
                allData.map((item, i) => {
                    item.hidden = false
                })
                this.setState({ data: allData })
            }
        }
        else if (this.state.isActive2) {
            if (this.state.text.length > 0) {
                allData.map((item, i) => {
                    if (item.rtitle.search(this.state.text) === -1) {
                        item.hidden = true
                    }
                })
                this.setState({ data: allData })
            } else {
                allData.map((item, i) => {
                    item.hidden = false
                })
                this.setState({ data: allData })
            }
        }
    }
    selectType = (index, value) => {
        // console.log(index + '--' + value)
        this.setState({
            type: value
        })
    }


    render() {
        return (
            <View style={{ height: height, backgroundColor: '#FFECEC' }}>
                <View style={{ width: width }}>
                    <View style={{ flexDirection: 'row', alignItems: "center", paddingTop: pxToDp(10) }}>
                        <View style={{ width: pxToDp(400), marginRight: pxToDp(40), marginLeft: pxToDp(20), height: pxToDp(46), backgroundColor: "#EBD6D6", flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', borderRadius: pxToDp(25) }}>
                            <Image source={require('../img/loupe.png')} style={{ width: pxToDp(30), height: pxToDp(30), marginLeft: pxToDp(20), marginRight: pxToDp(10) }} />
                            <TextInput placeholder='搜索'
                                placeholderTextColor='gray'
                                style={{ padding: 0, width: pxToDp(300), height: pxToDp(46) }}
                                onChangeText={(text) => this.getText(text)}
                            />
                        </View>
                        <TouchableOpacity onPress={() => this.search()}>
                            <View style={{ width: pxToDp(150), height: pxToDp(46), flexDirection: 'row', marginRight: pxToDp(20), flexDirection: 'row', justifyContent: "center", alignItems: 'center', backgroundColor: '#CE0000', borderRadius: pxToDp(23) }}>
                                <Text style={{ color: 'white', fontSize: pxToDp(24) }}>搜索</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: width, height: pxToDp(60), flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={this.state.isActive1 ? [styles.slideActive, styles.slide] : [styles.slide]} onPress={() => this.onpress1()}>
                            <View style={{}}>
                                <Text style={this.state.isActive1 ? styles.slidetText : { color: 'gray' }}>法律案例</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.isActive2 ? [styles.slideActive, styles.slide] : [styles.slide]} onPress={() => this.onpress2()}>
                            <View>
                                <Text style={this.state.isActive2 ? styles.slidetText : { color: 'gray' }}>法律法规</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', justifyContent: "flex-end", marginLeft: pxToDp(370) }}>
                            <ModalDropdown
                                options={select1}
                                dropdownStyle={{ borderWidth: 2 }}
                                textStyle={{ fontSize: 30 }}
                                onSelect={this.selectType}
                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#CE0000', fontSize: pxToDp(22), marginLeft: pxToDp(-40) }}>分类</Text>
                                    <Image source={require('../img/downredarrow.png')} style={{ width: pxToDp(17), height: pxToDp(10), marginLeft: pxToDp(10) }} />
                                </View>
                            </ModalDropdown>
                        </View>
                    </View>
                </View>
                <ScrollView style={{ flex: 1, zIndex: 2 }}>
                    {
                        this.state.isActive1 ?
                            this.state.data.map((item, idx) => {
                                if (!item.hidden) {
                                    if (this.state.type === '全部') {
                                        console.log(item.ctitle)
                                        return (
                                            <TouchableOpacity>
                                                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: pxToDp(20) }}>
                                                    <View style={{ width: width - pxToDp(30), height: pxToDp(250), backgroundColor: 'white', borderRadius: pxToDp(15), padding: pxToDp(15) }}>
                                                        <View>
                                                            {/* 标题 */}
                                                            <Text style={{ fontSize: pxToDp(28), marginBottom: pxToDp(25) }}>
                                                                {
                                                                    item.ctitle ? item.ctitle.slice(0, 15) + '...' : ''
                                                                }
                                                            </Text>
                                                            {/* 内容 */}
                                                            <View>
                                                                <Text style={{ fontSize: pxToDp(20), color: 'gray' }}>
                                                                    {
                                                                        item.ccontent ? item.ccontent.slice(0, 100) + '...' : ''
                                                                    }
                                                                </Text>
                                                            </View>
                                                            <View style={{ height: pxToDp(30), flexDirection: 'column', alignItems: 'flex-end', position: 'absolute', top: pxToDp(180), right: pxToDp(20) }}>
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
                                                </View></TouchableOpacity>)
                                    } else if (item.ctype === this.state.type) {
                                        return (<TouchableOpacity>
                                            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: pxToDp(20) }}>
                                                <View style={{ width: width - pxToDp(30), height: pxToDp(250), backgroundColor: 'white', borderRadius: pxToDp(15), padding: pxToDp(15) }}>
                                                    <View>
                                                        {/* 标题 */}
                                                        <Text style={{ fontSize: pxToDp(28), marginBottom: pxToDp(25) }}>
                                                            {
                                                                item.ctitle ? item.ctitle.slice(0, 15) + '...' : ''
                                                            }
                                                        </Text>
                                                        {/* 内容 */}
                                                        <View>
                                                            <Text style={{ fontSize: pxToDp(20), color: 'gray' }}>
                                                                {
                                                                    item.ccontent ? item.ccontent.slice(0, 100) + '...' : ''
                                                                }
                                                            </Text>
                                                        </View>
                                                        <View style={{ height: pxToDp(30), flexDirection: 'column', alignItems: 'flex-end', position: 'absolute', top: pxToDp(180), right: pxToDp(20) }}>
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
                                            </View></TouchableOpacity>)
                                    }
                                }
                            })



                            :
                            this.state.isActive2 ?
                                this.state.data.map((item, idx) => {
                                    if (!item.hidden) {
                                        if (this.state.type === '全部') {
                                            return (
                                                <TouchableOpacity>
                                                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: pxToDp(20) }}>
                                                        <View style={{ width: width - pxToDp(30), height: pxToDp(180), backgroundColor: 'white', borderRadius: pxToDp(15), padding: pxToDp(15) }}>
                                                            <View>
                                                                {/* 标题 */}
                                                                <Text style={{ fontSize: pxToDp(28), marginBottom: pxToDp(15) }}>{item.rtitle}</Text>
                                                                {/* 内容 */}
                                                                <View>
                                                                    <Text style={{ fontSize: pxToDp(20), color: 'gray' }}>
                                                                        {
                                                                            item.rcontent ? item.rcontent.slice(0, 22) + '...' : ''
                                                                        }
                                                                    </Text>
                                                                </View>
                                                                <View style={{ height: pxToDp(30), flexDirection: 'column', alignItems: 'flex-end', position: 'absolute', top: pxToDp(110), right: pxToDp(20) }}>
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
                                                    </View></TouchableOpacity>)
                                        } else if (item.rtype === this.state.type) {
                                            return (<TouchableOpacity>
                                                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: pxToDp(20) }}>
                                                    <View style={{ width: width - pxToDp(30), height: pxToDp(250), backgroundColor: 'white', borderRadius: pxToDp(15), padding: pxToDp(15) }}>
                                                        <View>
                                                            {/* 标题 */}
                                                            <Text style={{ fontSize: pxToDp(28), marginBottom: pxToDp(25) }}>{item.rtitle}</Text>
                                                            {/* 内容 */}
                                                            <View>
                                                                <Text style={{ fontSize: pxToDp(20), color: 'gray' }}>{item.rcontent}</Text>
                                                            </View>
                                                            <View style={{ height: pxToDp(30), flexDirection: 'column', alignItems: 'flex-end', position: 'absolute', top: pxToDp(180), right: pxToDp(20) }}>
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
                                                </View></TouchableOpacity>)
                                        }
                                    } else {
                                        <View></View>
                                    }
                                }) : <View></View>

                    }
                    <View style={{ height: Platform.OS == 'ios' ? 0 : pxToDp(175) }}></View>
                </ScrollView>

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