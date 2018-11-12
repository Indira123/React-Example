import React, { Component } from 'react';
import '../../styles/serviceCatalogue.scss';
import reqSoftUpgrade from '../../images/reqSoftUpgrade.png';
import clientVPNSoftAccess from '../../images/clientVPNSoftAccess.png';
import emailDeletion from '../../images/emailDeletion.png';
import EnableSpecificFeatures from '../../images/EnableSpecificFeatures.png';
import lyncAccessReq from '../../images/lyncAccessReq.png';
import reqForIndivEmID from '../../images/reqForIndivEmID.png';
import reqNewLaptop from '../../images/reqNewLaptop.png';
import softwareInstallation from '../../images/softwareInstallation.png';
import adminAccess from '../../images/adminAccess.png';

class ServiceCatalogue extends Component {

    render() {
        return (
            <div className='serviceCatalogue'>
                <div className='row container'>
                    <div className='col-lg-3 col-md-3 col-sm-3'>
                        <div className='card'>
                            <div className='card-header'>Categories</div>
                            <div className='card-body'>
                                <ul>
                                    <li><span className='fa fa-folder'></span> Can we help you?</li>
                                    <li><span className='fa fa-folder'></span> Facilities</li>
                                    <li><span className='fa fa-folder'></span> HR</li>
                                    <li><span className='fa fa-folder'></span> IT</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-9 col-md-9 col-sm-9'>
                        <h2>Popular Items</h2>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-4'>
                                <div className='card'>
                                    <div className='card-body'><h6>Request a software upgrade</h6>
                                        <img alt='Request a software upgrade' src={reqSoftUpgrade} />
                                    </div>
                                    <div className='card-footer'><a href=''>View Details</a></div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4'>
                                <div className='card'>
                                    <div className='card-body'><h6>Enable specific features on laptop/desktop</h6><img alt='Enable specific features on laptop/desktop' src={EnableSpecificFeatures} /></div>
                                    <div className='card-footer'><a href=''>View Details</a></div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4'>
                                <div className='card'>
                                    <div className='card-body'><h6>Email id deletion</h6>
                                        <img alt='Email id deletion' src={emailDeletion} />
                                    </div>
                                    <div className='card-footer'><a href=''>View Details</a></div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-4'>
                                <div className='card'>
                                    <div className='card-body'><h6>Request a new laptop</h6>
                                        <img alt='Request a new laptop' src={reqNewLaptop} />
                                    </div>
                                    <div className='card-footer'><a href=''>View Details</a></div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4'>
                                <div className='card'>
                                    <div className='card-body'><h6>Lync access request</h6>
                                        <img alt='Lync access request' src={lyncAccessReq} />
                                    </div>
                                    <div className='card-footer'><a href=''>View Details</a></div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4'>
                                <div className='card'>
                                    <div className='card-body'><h6>Admin access</h6>
                                        <img alt='Admin access' src={adminAccess} />
                                    </div>
                                    <div className='card-footer'><a href=''>View Details</a></div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-4'>
                                <div className='card'>
                                    <div className='card-body'><h6>Client VPN software access</h6>
                                        <img alt='Client VPN software access' src={clientVPNSoftAccess} />
                                    </div>
                                    <div className='card-footer'><a href=''>View Details</a></div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4'>
                                <div className='card'>
                                    <div className='card-body'><h6>Request for individual ID creation</h6>
                                        <img alt='Request for individual ID creation' src={reqForIndivEmID} />
                                    </div>
                                    <div className='card-footer'><a href=''>View Details</a></div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4'>
                                <div className='card'>
                                    <div className='card-body'><h6>Request for software installation</h6>
                                        <img alt='Request for software installation' src={softwareInstallation} />
                                    </div>
                                    <div className='card-footer'><a href=''>View Details</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ServiceCatalogue;