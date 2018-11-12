
import React, { Component } from 'react';

class AddNewTask extends Component {
    render() {
        return (
            <div id="AddNewTask" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal Header</h5>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Task" name="task" />
                                <button type="button" className="btn btn-primary btn-sm">Add</button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-success" >Add</button>
                            <button type="button" className="btn btn-sm btn-primary" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default AddNewTask;