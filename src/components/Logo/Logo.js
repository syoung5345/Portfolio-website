import React from 'react';

import Logo from './logo.svg';
import './Logo.css';

const logo = ( props ) => {
    return(
        <div className="App">
            <header className="App-header">
                <img src={Logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
};

export default logo;