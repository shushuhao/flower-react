import React from "react";
import { Carousel } from 'antd';
import './banner.css';
class Banner extends React.Component{
    render(){
        return(
            <div className="banners">
                <Carousel autoplay>
                    <div><h3><img src="/img/banner.png" alt=""/></h3></div>
                    <div><h3><img src="/img/banner3@2x.png" alt=""/></h3></div>
                    <div><h3><img src="/img/banner@2x.png" alt=""/></h3></div>
                </Carousel>
                <div className="banner-font" >
                    <span>花科普</span>
                    <span>Flower Science</span>
                </div>
            </div>
        )
    }
}
export default Banner