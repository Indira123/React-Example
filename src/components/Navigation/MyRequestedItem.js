import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap';
import myReqItem from '../../json/myReqItem.json';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class MyRequestedItem extends Component {
    componentDidMount() {

    }
    beforeSaveCell() {
        console.log('saving edited cell');
    }
    render() {
        const cellEdit = {
            mode: 'click', // click cell to edit
            beforeSaveCell: this.beforeSaveCell,
        };
        return (
            <div className='myRequestedItem container'>
                <div className="card">
                    <div className="card-header searchInputContainer"><span className='fa fa-bars options'> Requested Items</span>
                    </div>
                    <div id="card-body">
                        <div className='row'>
                            <div className='col-md-12 col-lg-12 col-sm-12'>
                                {myReqItem.length < 0 &&
                                    <h2>No records in requested items using that filter</h2>
                                }{myReqItem.length >= 0 &&
                                    <BootstrapTable cellEdit={cellEdit} exportCSV search searchPlaceholder='Keyword search' pagination={true} columnFilter data={myReqItem} striped={true} hover={true}>
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
export default MyRequestedItem;