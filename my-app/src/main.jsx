// let app=document.querySelector("#app");
import "./base.css"
import React from 'react';
import ReactDom from 'react-dom';
import SY from "./index/index.jsx"
import Doctor from "./doctor/doctor"
import Buy from "./buy/buy.jsx"
import My from "./my/my.jsx"
import 'antd/dist/antd.min.css'
import './strict/rem.jsx'
import  Login from "./login/login.jsx"
import{
    BrowserRouter as Router,
    Route,
    // Link,
}from'react-router-dom';
import Index from './index/index.jsx'
// import Publish from './publish/publish.jsx'
// import Login from './login/login.jsx'
// import Person from './person/person.jsx'



const App = () =>(
    <Router>
        <div>
            <Route exact path="/" component={SY}/>
            <Route exact path="/doctor" component={Doctor}/>
            <Route exact path="/buy" component={Buy}/>
            <Route exact path="/my" component={My}/>
            <Route exact path="/login" component={Login}/>

        </div>
    </Router>
)
ReactDom.render(<App/>,document.querySelector('#app'));
