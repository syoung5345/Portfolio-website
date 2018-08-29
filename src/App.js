import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Hero from './components/Hero/Hero';
import Logo from './components/Logo/Logo';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ToTop from './components/UI/Arrow/BackToTop';

import Album from './components/Album/Album';
import ButtonDemo from './components/ButtonDemo/ButtonDemo';



class App extends Component {

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Navbar />
        <main>
          <ToTop />
          <Logo />
          <About />
          <Portfolio />
          {/* <Album /> */}
          {/* <ButtonDemo /> */}
          {/* <HorizontalGrid /> */}
          {/* <Contact 
            handleSubmit={this.handleFormSubmit}
            handleChange={this.handleInputChange} /> */}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
