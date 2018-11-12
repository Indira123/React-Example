import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './Home';
import Knowledge from './Navigation/Knowledge';
import MyRequestedItem from './Navigation/MyRequestedItem';
import MyIncident from './Navigation/MyIncident';
import Approvals from './Navigation/Approvals';
import LiveChat from './Navigation/LiveChat';
import ServiceCatalogue from './ServiceCatalogue/ServiceCatalogue';
import CanWeHelp from './ServiceCatalogue/Categories/CanWeHelp';
import Facilities from './ServiceCatalogue/Categories/Facilities';
import HR from './ServiceCatalogue/Categories/HR';
import IT from './ServiceCatalogue/Categories/IT';
import logo from '../images/logo.png';
import url from '../images/index-bg.png'
import '../styles/Header.scss';
import $ from 'jquery';

class Header extends Component {
    knowledge() {
        $('body').css('background', 'none');
    }
    home() {
        $('body').css('background-image', "url(" + url + ")");
        $('.breadcrumb').hide();
        ReactDOM.unmountComponentAtNode(document.getElementById('ContentWrapper'));
        ReactDOM.render(<Home />, document.getElementById('ContentWrapper'));
    }
    ServiceCatalogue() {
        $('body').css('background', 'none');
        $('.breadcrumb').show();
        ReactDOM.unmountComponentAtNode(document.getElementById('ContentWrapper'));
        ReactDOM.render(<ServiceCatalogue />, document.getElementById('ContentWrapper'));
    }
    CanWeHelp() {
        $('body').css('background', 'none');
        ReactDOM.unmountComponentAtNode(document.getElementById('ContentWrapper'));
        ReactDOM.render(<CanWeHelp />, document.getElementById('ContentWrapper'));
    }
    Facilities() {
        $('body').css('background', 'none');
        ReactDOM.unmountComponentAtNode(document.getElementById('ContentWrapper'));
        ReactDOM.render(<Facilities />, document.getElementById('ContentWrapper'));
    }
    HR() {
        $('body').css('background', 'none');
        ReactDOM.unmountComponentAtNode(document.getElementById('ContentWrapper'));
        ReactDOM.render(<HR />, document.getElementById('ContentWrapper'));
    }
    IT() {
        $('body').css('background', 'none');
        ReactDOM.unmountComponentAtNode(document.getElementById('ContentWrapper'));
        ReactDOM.render(<IT />, document.getElementById('ContentWrapper'));
    }


    liveChat() {
        const w = window.open("", "popupWindow", "width=600, height=400, scrollbars=yes");
        const $w = $(w.document.body);
        $w.html("<h2>Welcome to Service Desk Chat</h2><h6>How can we help you</h6><input type='text'/><button class='btn btn-primary'>Send</button>");
    }
    render() {
        return (
            <header>
                <Router>
                    <div>
                        <nav className="topnav">
                            <img alt='Logo' className='logo' src={logo} />
                            <ul className='navOptions'>
                                <li onClick={this.home} alt='Home'><Link to="/">Home</Link></li>
                                <li onClick={this.knowledge} alt='Knowledge'><Link to="/Knowledge"><span className='fa ng-scope fa-book'></span> Knowledge</Link></li>
                                <li onClick={this.knowledge} alt='My Requested Item'><Link to="/MyRequestedItem"><span className='fa ng-scope fa-shopping-cart'></span> My Requested Item</Link></li>
                                <li onClick={this.knowledge} alt='My Incident'><Link to="/MyIncident"><span className='fa ng-scope fa-frown-o'></span> My Incident</Link></li>
                                <li onClick={this.knowledge} alt='Approvals'><Link to="Approvals"><span className='fa ng-scope fa-thumbs-up'></span> Approvals</Link></li>
                                <li onClick={this.knowledge} alt='LiveChat'><Link to="LiveChat" onClick={this.liveChat}>Live Chat</Link></li>
                            </ul>
                        </nav>
                        <ul className="breadcrumb">
                            <li onClick={this.home} alt='Home'><Link to="/">Home</Link></li>
                            <li onClick={this.ServiceCatalogue}><Link to="/ServiceCatalogue">Service Catalogue</Link></li>
                            <li onClick={this.CanWeHelp}><Link to="/CanWeHelp">Can we help you? </Link></li>
                            <li onClick={this.Facilities}><Link to="/Facilities">Facilities</Link></li>
                            <li onClick={this.HR}><Link to="/HR">HR</Link></li>
                            <li onClick={this.IT}><Link to="/IT">IT</Link></li>
                        </ul>
                        <div id='ContentWrapper' style={{ clear: 'both' }}>
                            <Route exact path="/" component={Home} />
                            <Route path="/Knowledge" component={Knowledge} />
                            <Route path="/MyRequestedItem" component={MyRequestedItem} />
                            <Route path="/MyIncident" component={MyIncident} />
                            <Route path="/Approvals" component={Approvals} />
                            <Route path="/LiveChat" component={LiveChat} />
                            <Route path="/ServiceCatalogue" component={ServiceCatalogue} />
                            <Route path="/CanWeHelp" component={CanWeHelp} />
                            <Route path="/Facilities" component={Facilities} />
                            <Route path="/HR" component={HR} />
                            <Route path="/IT" component={IT} />
                        </div>
                    </div>
                </Router>
            </header>
        )
    }
}
export default Header;