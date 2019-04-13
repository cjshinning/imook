import React from 'react'
import { NavBar, List, InputItem, TextareaItem, Button } from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
 
@connect(
    state => state.user,
    {update}
)

class GeniusInfo extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            desc: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }
    render(){
        const pathname = this.props.location.pathname
        const redirect = this.props.redirectTo

        return (
            <div>
                {redirect && redirect!==pathname ? <Redirect to={this.props.redirectTo}/> : null}
                <NavBar
                    mode="dark"
                >牛人信息完善页</NavBar>
                <AvatarSelector
                    selectAvatar = {imgname => {
                        this.setState({
                            avatar: imgname
                        })
                    }}
                ></AvatarSelector>
                <List>
                    <InputItem
                        onChange={v=>this.handleChange('title', v)}
                    >求职岗位</InputItem>
                    <TextareaItem
                        title="个人简介"
                        rows="3"
                        autoHeight
                        onChange={v=>this.handleChange('desc', v)}
                    ></TextareaItem>
                </List>
                <Button type='primary' onClick={()=>{
                    this.props.update(this.state)
                }}>保存</Button>
            </div>
        )
    }
}

export default GeniusInfo