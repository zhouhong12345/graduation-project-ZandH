import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Star extends Component {
    constructor(){
        super();
        this.state={
            data:[{content:'未收到任何消息'}]
        }
    }
    componentDidMount(){
        fetch('http://81.70.101.193:8000/inforuser')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    componentDidUpdate(){
        fetch('http://81.70.101.193:8000/inforuser')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    del=(idx)=>{
        fetch('http://81.70.101.193:8000/inforuserdel',{
            method:"DELETE",
            headers:{
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            body:JSON.stringify({id:idx})
        })  
        ToastAndroid.show('删除成功！',100);
    }
    render() {
        return (
            <ScrollView>
            {
                this.state.data.map((item)=>(
                    <View style={styles.viewcontent}>
                        <Text style={{width:480*s,wordWrap:'break-all'}}>{item.content}</Text>
                        <TouchableOpacity style={styles.contentbutton} onPress={()=>this.del(item.id)}>
                            <Text style={{color:'white'}}>已读删除</Text>
                        </TouchableOpacity>
                    </View>
                ))
            }
        </ScrollView>
        )
    }
}
