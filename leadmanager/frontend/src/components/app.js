import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';   
import Dashboard from './leads/Dashboard';

class App extends Component {
    render() {
        return (
            <fragment>
                <Header />
                <div className="container">
                    <Dashboard />
                </div>
            </fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));