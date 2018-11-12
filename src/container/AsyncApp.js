import React, { Component } from 'react';
import Header from '../components/Header';
import AddNewTask from '../components/Modals/AddNewTask';

export default class AsyncApp extends Component {
    render() {
        return (
            <div>
                <Header />
                <AddNewTask />
                {/*<Footer />*/}
            </div>
        )
    }
}