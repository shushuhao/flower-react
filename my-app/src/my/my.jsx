import React from "react";
import Footer from "../component/footer/footer";
import Avatar from "../component/pic-upload.jsx"
import "./my.css";
class My extends React.Component{
    render(){
        return(
            <div className="my">
                <div className="header">
                    <img src="/img/my-header-bg.png" alt=""/>
                    <div className="headers">
                        <div className="header-pic">
                            <Avatar/>
                        </div>
                        <span>汴京春·C</span>
                        <span>生活中总是充满芳香 让我们每日都沉浸在幸福当中回味无穷</span>
                        <div className="headers-down">
                            <div className="headers-down-img">
                                <img src="/img/my-down-img.png" alt=""/>
                            </div>
                            <div className="headers-down-img1">
                                <img src="/img/my-down-img1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="button-sign">
                        <img src="/img/button-sign.png" alt=""/>
                    </div>


                </div>
                <div className="body">
                    <div className="my-body-img">
                        <img src="/img/my-body-img.png" alt=""/>
                        <span>780积分</span>
                    </div>
                    <div className="my-body-img1">
                        <img src="/img/my-body-img2.png" alt=""/>
                    </div>
                    <div className="my-body-img1 expert">
                        <img src="/img/my-body-img3.png" alt=""/>
                        <div className="atte">
                            <span>未认证</span>
                        </div>
                    </div>
                    <div className="my-body-img1">
                        <img src="/img/my-body-img4.png" alt=""/>
                    </div>
                </div>
                <div className="empty"></div>
                <Footer name="my"/>
            </div>

        )
    }
}
export default My