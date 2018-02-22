import React from "react";
import "./login.css"
import {Link} from "react-router-dom";
import Countdown from "../component/countdown/countdown.jsx"
const data={"status": "0",
    "msg": "ok",
    "result": {
        "accountid": "1",
        "name": "shushu",
        "content": "123456",
        "templateid": "1",
        "status": "1",
        "ismarket": "0"
    }}
class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            message: '',
            message1:''
        }

        this.handelChange=this.handelChange.bind(this);
        this.handelChange1=this.handelChange1.bind(this);
        this.handelCheck=this.handelCheck.bind(this);
    }

    handelChange = function (event) {
        console.log(event.target);
        this.setState({message: event.target.value})
    }.bind(this);


    handelChange1 = function (event) {
        console.log(event.target);
        this.setState({message1: event.target.value})
    }.bind(this);

    handelCheck=function (value) {
        console.log(this.state.message)
        if(this.state.message1===data.result.content){
            fetch('/api/loginCheck?tel='+this.state.message).then(r => r.json()).
            then(
               d=>{
                   localStorage.userid=d[0].id;
                   localStorage.username=d[0].username;
                   alert("正确")
                   window.location.href='/'
               }
            )
        }else{
            alert("验证码输入错误")
        }

    }.bind(this)
    render() {
        var mess = this.state.message;
        var mess1 = this.state.message1;
        return (
            <div id="login">
                <img src="/img/login-bg.png" alt=""/>
                <div className="body">
                    <img src="/img/login-body.png" alt=""/>
                    <div className="pic">
                        <img src="/img/login-pic.png" alt=""/>
                    </div>

                    <form className="form" action="" >
                        <div className="foot" onClick={this.handelCheck}>
                            <img src="/img/log  in-foot.png" alt=""/>
                        </div>
                        <div className="form-up">
                            <div className="up-font">
                                <div className="upfont-img">
                                    <img src="/img/login-upfont-img.png" alt=""/>
                                </div>
                                <input type="text" onChange={this.handelChange} value={mess} placeholder="请输入手机号" />
                            </div>
                            <div className="up-g">
                                <img src="/img/login-up-g.png" alt=""/>
                            </div>
                        </div>
                        <div className="form-down">
                            <div className="down-font">
                                <div className="downfont-img">
                                    <img src="/img/login-downfont.png" alt=""/>
                                </div>
                                <input id="yzm" type="text" onChange={this.handelChange1} value={mess1} placeholder="请输入验证码"/>
                                <Countdown/>
                            </div>


                            <div className="up-g">
                                <img src="/img/login-up-g.png" alt=""/>
                            </div>

                        </div>

                    </form>

                </div>

            </div>
        )
    }
}
export default Login



