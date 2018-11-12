import React, { Component } from 'react';
import '../styles/Home.scss';
import ReactDOM from 'react-dom';
import ServiceCatalogue from './ServiceCatalogue/ServiceCatalogue';
import $ from 'jquery';

class Home extends Component {
    serviceCatalogue() {
        $('body').css('background', 'none');
        $('.breadcrumb').show();
        ReactDOM.render(<ServiceCatalogue />, document.getElementById('ContentWrapper'));
    }
    render() {
        return (
            <div className='homeContainer'>
                <div className='row'>
                    <div className='col-md-3 col-lg-3 col-sm-2'></div>
                    <div className='col-md-6 col-lg-6 col-sm-8'>
                        <input className="form-control searchInput" type="text" placeholder="How can we help?" aria-label="Search" />
                        <button className='search btn fa fa-search'></button>
                    </div>
                    <div className='col-md-3 col-lg-3 col-sm-2'></div>
                </div>
                <br />
                <br />
                <div className='row contentRow'>
                    <div className='col-md-4 col-lg-4 reqNow'>
                        <h4 onClick={this.serviceCatalogue}>Request Now</h4>
                        <h5>Browse the Catalog</h5>
                        <ul>
                            <li><span className='fa fa-sitemap grow'></span> Information Technology</li>
                            <li><span className='fa fa-briefcase grow'></span> Human Resource</li>
                            <li><span className='fa fa-bank grow'></span> Facility</li>
                        </ul>
                    </div>
                    <div className='col-md-4 col-lg-4 findItems'>
                        <h4>Find Answers</h4>
                        <h5>Search the Knowledge Base</h5>
                        <ul>
                            <li><span className='fa fa-thumbs-o-up grow'></span> Highest Rated</li>
                            <li><span className='fa fa-fire grow'></span> Most Popular</li>
                            <li><span className='fa fa-newspaper-o grow'></span> News</li>
                        </ul>
                    </div>
                    <div className='col-md-4 col-lg-4 findItems'>
                        <h4>Get Support</h4>
                        <h5>Request Help & Find Answers</h5>
                        <ul>
                            <li><span className='fa fa-thumbs-o-up grow'></span> Report an Issue
</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;