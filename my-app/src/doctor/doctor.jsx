import React from "react";
import Footer from "../component/footer/footer";
import "./doctor.css";
import {List} from 'antd';
class Doctor extends React.Component {
    constructor(){
        super()
        this.state={name:"hot",
                    data:[]
        };
        this.handleClick=this.handleClick.bind(this);
        this.handleThumb=this.handleThumb.bind(this);
    }
    handleClick = function (type) {
        this.setState({name:[type]});

            console.log(type)
            if(type==="hot"){
                fetch('/api/hot').then(r => r.json()).
                then(d => this.setState({
                        data: d,
                    })
                )
            }else if(type==="all"){
                fetch('/api/all').then(r => r.json()).
                then(d => this.setState({
                        data: d,
                    })
                )
            }else if(type==="myq"){
                fetch('/api/myq').then(r => r.json()).
                then(d => this.setState({
                        data: d,
                    })
                )
            }



    }.bind(this);


    handleThumb = function (event,aid,thumb) {
        event.target.parentNode.nextSibling.innerHTML++
        const thumbs= event.target.parentNode.nextSibling.innerHTML
        fetch(`/api/addThumb?aid=${aid}&thumb=${thumbs}`,).then(r => r.text()).
        then(d => {}
        )
    }.bind(this);



    render() {
        return (
            <div className="doctor">
                <div className="header">
                    <div className="banner-font">
                        <span>花医生</span>
                        <span>Flower Doctor</span>
                    </div>
                    <div className="search">
                        <div className="search-img">
                            <img src="/img/search5.png" alt=""/>
                        </div>
                        <input type="text" placeholder="蓝色妖姬，相遇是宿命的奇迹"/>
                        <div className="gang">|</div>
                        <div className="search-img1">
                            <img src="/img/search4.png" alt=""/>
                        </div>
                        <span>提问</span>
                    </div>
                    <div className="header-font">
                        <div id="span-box"className={(this.state.name == "all") ? 'active' : ''} onClick={()=>{this.handleClick("all")}}>
                            <span>全部问题</span>
                        </div>
                        <div id="span-box" className={(this.state.name == "hot") ? 'active' : ''} onClick={()=>{this.handleClick("hot")}}>
                            <span>热门问题</span>
                        </div>
                        <div id="span-box" className={(this.state.name == "myq") ? 'active' : ''} onClick={()=>{this.handleClick("myq")}}>
                            <span>我的提问</span>
                        </div>
                    </div>
                </div>

                <div className="body">
                    <List
                        dataSource={this.state.data}
                        renderItem={v =>
                            <div className="g-box">
                                <div className="gbox-left">
                                    <div className="gbox-mask">

                                    </div>
                                    <div className="gbleft-img">
                                        <img src="/img/gbleft.png" alt=""/>
                                    </div>
                                </div>
                                <div className="gbox-right">
                                    <div className="r-que">
                                        <div className="rque-img">
                                            <div className="img">
                                                <img src="/img/yes.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="rque-box">
                                            <span>{v.question}</span>
                                        </div>

                                    </div>
                                    <div className="r-aws">
                                        <div className="raws-up">
                                            <div className="up">
                                                <div className="raws-img">
                                                    <img src="/img/aws-xx.png" alt=""/>
                                                </div>
                                                <span>最佳答案</span>
                                            </div>
                                            <div className="up-font">
                                                <span>崔教授</span>
                                            </div>

                                        </div>
                                        <div className="raws-body">
                                            <span>{v.answer}</span>
                                        </div>
                                        <div className="raws-down">
                                            <div className="down-left">
                                                <div className="down-img">
                                                    <img src="/img/down-img1.png" alt=""/>
                                                </div>
                                                <span>2017.9</span>
                                            </div>
                                            <div className="down-right">
                                                <div className="down-img" onClick={(e)=>{this.handleThumb(e,v.aid,v.thumb)}}>
                                                    <img src="/img/down-img2.png" alt=""/>
                                                </div>
                                                <span>{v.thumb}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    />

                </div>
                <div className="empty"></div>
                <Footer name="doctor"/>
            </div>

        )
    }

}
export default Doctor