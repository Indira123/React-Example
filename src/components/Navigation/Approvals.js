import React, { Component } from 'react';
import myApproval from '../../json/approvals.json';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../styles/navigation.scss';

class Approvals extends Component {
    render() {
        const options = {
            noDataText: 'You have no pending approvals'
        };
        return (
            <div className='approvals container'>
                <div className="card">
                    <div className="card-header"><span className='fa fa-bars options'> My Approvals</span>
                    </div>
                    <div id="card-body">
                        <div className='row'>
                            <div className='col-md-12 col-lg-12 col-sm-12'>
                                {myApproval.length < 0 &&
                                    <h2>You have no pending approvals</h2>
                                }{myApproval.length >= 0 &&
                                    <BootstrapTable options={options} searchPlaceholder='Keyword search' data={myApproval} striped={true} hover={true}>
                                        <TableHeaderColumn dataField="number" isKey={true} dataAlign="center" dataSort={true}>Number</TableHeaderColumn>
                                        <TableHeaderColumn dataField="item" dataSort={true}>Item </TableHeaderColumn>
                                        <TableHeaderColumn dataField="requestedBy" dataSort={true}>Requested By</TableHeaderColumn>
                                        <TableHeaderColumn dataField="requestedFor" dataSort={true}>Requested for</TableHeaderColumn>
                                        <TableHeaderColumn dataField="stage" dataSort={true}>Stage</TableHeaderColumn>
                                        <TableHeaderColumn dataField="description" dataSort={true}>Short description</TableHeaderColumn>
                                        <TableHeaderColumn dataField="opened" dataSort={true}>Opened</TableHeaderColumn>
                                    </BootstrapTable>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Approvals;