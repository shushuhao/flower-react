import React from "react";
import {Link} from 'react-router-dom';
import './footer.css';
class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <Link to="/" id="footer-box" className={(this.props.name === "index") ? 'active' : ''}>
                    <div className="footer-icon">
                        <img src={require('../../img/footer-icon.png')} alt=""/>
                    </div>
                    <div className="footer-font">
                        <span>花科普</span>
                    </div>
                </Link>
                <Link to="/doctor" id="footer-box" className={(this.props.name === "doctor") ? 'active' : ''} >
                    <div className="footer-icon">
                        <img src={require('../../img/footer-icon1.png')} alt=""/>
                    </div>
                    <span>花医生</span>
                </Link>
                <Link to="/buy" id="footer-box" className={(this.props.name === "buy") ? 'active' : ''}>
                    <div className="footer-icon">
                        <img src={require('../../img/footer-icon2.png')} alt=""/>
                    </div>
                    <span>花购买</span>
                </Link>
                <Link to="/my" id="footer-box" className={(this.props.name === "my") ? 'active' : ''}>
                    <div className="footer-icon">
                        <img src={require('../../img/footer-icon3.png')} alt=""/>
                    </div>
                    <span>我的</span>
                </Link>
            </div>
        )
    }
}
export default Footer