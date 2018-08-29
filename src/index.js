import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#8EAEBD',
            main: '#000000',
            dark: '#FFA000',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ae7b88',
            main: '#985E6D',
            dark: '#885462',
            contrastDiff: '#fff'
        },
        background: {
            default: 'paper'
        }
        //cloud
        // third: {
        //     light: '#2E2E3A',
        //     main: '#98878F',
        //     dark: '#2E2E3A',
        //     contrastDiff: '#fff'
        // }

        //#CF6766 Crimson Sky
        //#30415D indigo
        //#031424 ultramarine
        //#8EAEBD light blue

        //#020C0F Rich Black
        //#F4F4F4 Paper
        //#2E2E3A Gunmetal
        //#0F1626 Navy Blue

        //#FF6A5C Watermelon

        //#494E6B Stormy
        //#98878F Cloud
        //#985E6D Sunset
        //#192231 evening  
    }
});

const app = (
    <BrowserRouter>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
