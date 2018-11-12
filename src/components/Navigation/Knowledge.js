import React, { Component } from 'react';
import '../../styles/navigation.scss';

class Knowledge extends Component {
    render() {
        return (
            <div className='knowledge'>
                <div className='row'>
                    <div className='col-md-2 col-lg-2 col-sm-2'></div>
                    <div className='col-md-8 col-lg-8 col-sm-8'>
                        <input className="form-control searchInput" type="text" placeholder="Search" aria-label="Search" />
                        <button className='search btn fa fa-search'></button>
                        <br />
                        <br />
                        <h5>Knowledge</h5>
                    </div>
                    <div className='col-md-2 col-lg-2 col-sm-2'></div>
                </div>
            </div>
        )
    }
}
export default Knowledge;