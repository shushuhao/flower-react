import React from "react";
import { Modal, Button } from 'antd';
import Footer from "../component/footer/footer";
import "./buy.css"
class Buy extends React.Component {
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }
    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (

            <div id="buy">
              <div className="header">
                  <div className="header-img">
                      <img src="/img/buy-header-img.png" alt=""/>
                  </div>
                  <span>花医生</span>
                  <span>Flower Doctor</span>
                  <div className="header-img1" onClick={this.showModal}>
                      <img src="/img/buy-header-img1.png" alt=""/>
                  </div>
              </div>
                <div className="body">
                    <img src="/img/buy-bg.png" alt=""/>
                </div>
                <Modal title=""
                       visible={visible}
                       confirmLoading=""
                       onCancel={this.handleCancel}
                       className="buy"
                >
                    <p>{ModalText}</p>
                </Modal>
             <Footer name="buy"/>
            </div>

        )
    }
}
export default Buy