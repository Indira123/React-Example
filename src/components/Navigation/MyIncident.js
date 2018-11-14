import React, { Component } from 'react';
import myIncident from '../../json/myincident.json';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../styles/navigation.scss';

class MyIncident extends Component {
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
        const options = {
            noDataText: 'No records in Incident using that filter'
        };
        return (
            <div className='myIncident container'>
                <div className="card">
                    <div className="card-header searchInputContainer"><span className='fa fa-bars options'> Incidents</span>
                    </div>
                    <div id="card-body">
                        <div className='row'>
                            <div className='col-md-12 col-lg-12 col-sm-12'>
                                {myIncident.length < 0 &&
                                    <h2>No records in incedents using that filter</h2>
                                }{myIncident.length >= 0 &&
                                    <BootstrapTable options={options} cellEdit={cellEdit} search searchPlaceholder='Keyword search' data={myIncident} striped={true} hover={true}>
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
export default MyIncident;