import React from "react";
import ReactDom from 'react-dom';
import Banner from "../component/banner";
import '../main'
import "./index.css"
import Footer from "../component/footer/footer";
import {List} from 'antd';
class SY extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div id="sy">
                <Banner/>
                <Footer name="index"/>
                <div className="body">
                    <div className="nav">
                        <div className="nav-box">
                            <div className="img">
                                <img src="/img/nav-icon1.png" alt=""/>
                            </div>
                            <div className="span-box">
                                <span>分类</span>
                            </div>
                        </div>
                        <div className="nav-box">
                            <div className="img">
                                <img src="/img/nav-icon2.png" alt=""/>
                            </div>
                            <div className="span-box">
                                <span>文章</span>
                            </div>
                        </div>
                        <div className="nav-box">
                            <div className="img">
                                <img src="/img/nav-icon3.png" alt=""/>
                            </div>
                            <div className="span-box">
                                <span>餐饮</span>
                            </div>
                        </div>
                        <div className="nav-box">
                            <div className="img">
                                <img src="/img/nav-icon4.png" alt=""/>
                            </div>
                            <div className="span-box">
                                <span>搭配</span>
                            </div>
                        </div>
                    </div>
                    <div className="search">
                        <div className="search-img">
                            <img src="/img/search1.png" alt=""/>
                        </div>
                        <input type="text" placeholder="请输入您要搜索的内容"/>
                        <div className="search-img1">
                            <img src="/img/search3.png" alt=""/>
                        </div>
                        <div className="search-img2">
                            <img src="/img/search2.png" alt=""/>
                        </div>
                    </div>
                    <div className="guess">
                        <img src="/img/guess.png" alt=""/>
                    </div>
                    <List
                        dataSource={this.state.data}
                        renderItem={v =>
                            <div className="g-body">
                            <img src="/img/g-body.png" alt=""/>
                                <div className="mask">
                                    <div className="mask-pic">
                                    </div>
                                    <div className="mask-font">
                                        <span>{v.tiele}</span>
                                        <span>{v.translate}</span>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
                <div className="empty"></div>
            </div>
        )

    }

    componentDidMount() {
        fetch('/api/data').then(r => r.json()).
        then(d => this.setState({
            data: d,
        })
        )
    }
}
export default SY;