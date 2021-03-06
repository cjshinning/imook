import React from 'react'
import {connect} from 'react-redux'
import {List,Badge} from 'antd-mobile'

@connect(
    state=>state
)

class Msg extends React.Component{
    getLast(arr){
        return arr[arr.length-1]
    }
    render(){
        // console.log(this.props)
        const Item = List.Item
        const Brief = Item.Brief
        const userid = this.props.user._id
        const userinfo = this.props.chat.users
        const msgGroup = {}
        this.props.chat.chatmsg.forEach(v=>{
            // console.log(v)
            msgGroup[v.chatid] = msgGroup[v.chatid] || []
            msgGroup[v.chatid].push(v)
        })
        console.log(msgGroup)
        const chatList = Object.values(msgGroup).sort((a,b)=>{
            const a_last = this.getLast(a).create_time
            const b_last = this.getLast(b).create_time
            return b_last - a_last
        })
        console.log(chatList)
        return (
            <div>
                {chatList.map(v=>{
                    // console.log(v[0])
                    // console.log(userid)
                    const lastItem = this.getLast(v)
                    // console.log(lastItem)
                    const targetId = v[0].from==userid?v[0].to:v[0].from
                    if(!userinfo[targetId]){
                        return null
                    }
                    console.log(targetId)
                    const unreadNum = v.filter(v=>!v.read&&v.to==userid).length
                    const name = userinfo[targetId]?userinfo[targetId].name:''
                    const avatar = userinfo[targetId]?userinfo[targetId].avatar:''
                    // console.log('头像是：'+targetId)
                    return (
                        <List key={lastItem._id}>
                            <Item 
                                thumb={require(`../img/${avatar}.png`)}
                                extra={<Badge text={unreadNum}></Badge>}
                                arrow='horizontal'
                                onClick={()=>{
                                    this.props.history.push(`/chat/${targetId}`)
                                }}
                            >
                                {lastItem.content}
                                <Brief>{name}</Brief>
                            </Item>
                        </List>
                    )
                })}
            </div>
        )
    }
}

export default Msg