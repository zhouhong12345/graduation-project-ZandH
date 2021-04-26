import React, { Component } from 'react'
import { View,Text,Dimensions ,TextInput, TouchableOpacity,ImageBackground,Image, StyleSheet,} from 'react-native'    
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';

const {width} = Dimensions.get('window');
const s = width/640;

const options = {
    title: '选择图片', 
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照', 
    chooseFromLibraryButtonTitle: '选择照片', 
    cameraType: 'back',
    mediaType: 'photo',
    videoQuality: 'high', 
    durationLimit: 10, 
    maxWidth: 300,
    maxHeight: 300,
    quality: 0.8, 
    angle: 0,
    allowsEditing: false, 
    noData: false,
    storageOptions: {
        skipBackup: true,  
        path:'images'
    }
};

export default class Shezhi extends Component {
    constructor(props){
        super(props);
        this.state={ 
            data:[], 
            imageUrl:'',
            txtValue1:'',
            txtValue2:'',
            txtValue3:'',
            txtValue4:'',
            txtValue5:'',
            wtouxiang:'',
            wusername:'',
            wsex:'',
            weixinnumber:'',
            wclass:'',
            wschool:'',
            loginstd:'',
            wimage:''
        }
    }

    takephoto = ()=>{
        var formData = new FormData();
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                const file={uri: response.uri, type: response.type, name: response.fileName};
                formData.append('file', file);
                fetch( `http://148.70.183.184:8006/media/${response.type}`,{
                    method:'POST',
                    body:formData
                })
                .then((res)=>{
                    console.log(res)
                })
            }
        });   
    }

    render() {
        return (
            <View style={{flex:1}}>  
                <View>
                    <View style={styles.firstlist}>
                        <Text style={{fontSize:18}}>头像</Text>
                        <TouchableOpacity onPress={()=> this.takephoto()} style={styles.buttontouxiang}>
                            <ImageBackground style={{width:100*s,height:100*s}} source={require('../../images/0.png')}>
                                <Image style={{width:100*s,height:100*s}}  source={this.state.imageUrl}/>
                            </ImageBackground>
                            <Text style={styles.genghuantouxiang}>更换头像</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{fontSize:18}}>昵称</Text>
                        <TextInput 
                            placeholder="请输入昵称" 
                            onChangeText={(text) => {this.setState({txtValue1:text})}} 
                            placeholderTextColor='gray' 
                            style={styles.inputconent}
                        >{this.state.wusername}</TextInput>
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{fontSize:18}}>性别</Text>
                        <TextInput 
                            placeholder="请输入性别" 
                            placeholderTextColor='gray' 
                            onChangeText={(text) => {this.setState({txtValue2:text})}} 
                            style={styles.inputconent}
                        >{this.state.wsex}</TextInput>
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{fontSize:18}}>邮箱</Text>
                        <TextInput 
                            placeholder="请输入邮箱地址" 
                            placeholderTextColor='gray' 
                            style={styles.inputconent}
                            onChangeText={(text) => {this.setState({txtValue3:text})}} 
                        >{this.state.weixinnumber}</TextInput>
                    </View>
                    <View style={styles.listcontent}>
                        <TouchableOpacity
                            style={styles.mima}
                            onPress={()=>Actions.code()}
                        ><Text style={styles.mimaa}>更改密码</Text></TouchableOpacity>
                    </View>
                  
                </View>
            </View>    
        )
    }
}
const styles = StyleSheet.create({
    mima:{
        marginLeft:380*s
    },
    mimaa:{
        fontSize:25,
        color:'#CE0000',
    },
    listcontent:{
        flexDirection:'row',
        height:100*s,
        paddingLeft:70*s,
        paddingRight:10*s,
        alignItems:'center',
        justifyContent:'space-between',
    },
    inputconent:{
        width:200*s,
        fontSize:17,
        textAlign:'center',
    },
    firstlist:{
        flexDirection:'row',
        height:100*s,
        paddingLeft:80*s,
        paddingRight:50*s,
        alignItems:'center',
        justifyContent:'space-between'
    },
    genghuantouxiang:{
        width:100*s,
        opacity:0.8,
        marginTop:-33*s,
        color:'gray',
        backgroundColor:'white',
        paddingLeft:12*s
    },
    buttontouxiang:{
        width:100*s,
        height:100*s,
        borderRadius:50*s,
        overflow:'hidden',
        marginTop:20*s,
        marginRight:11*s,
    }
})