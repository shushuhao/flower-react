import React from "react"
import "./countdown.css"
class Countdown extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 5,
            liked: true
        }
        this.handleClick=this.handleClick.bind(this);
    }


handleClick = function () {
    if (this.state.liked) {
        this.timer = setInterval(function () {
            var count = this.state.count;
            this.state.liked = false;
            count -= 1;
            if (count < 1) {
                this.setState({
                    liked: true
                });
                count = 5;
                clearInterval(this.timer);
            }
            this.setState({
                count: count
            });
        }.bind(this), 1000);
    }

}

render()
{
    var text = this.state.liked ? '获取验证码' : this.state.count + '秒后重发';

    return (
        <div className="button">
            <p>
                <button type="button" className="countdown" onClick={this.handleClick}>{text}</button>
            </p>
        </div>
    );
}

}
export default Countdown