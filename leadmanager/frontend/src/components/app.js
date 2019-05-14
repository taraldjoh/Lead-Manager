import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';   
import Footer from './layout/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));