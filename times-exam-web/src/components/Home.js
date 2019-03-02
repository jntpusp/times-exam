// Home.js

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { AppRegistry, Text, TextInput, View } from 'react-native';
// import './component.css';

import TimesSlide from '../components/TimesSlide';
import OfferBar from '../components/OfferBar';
import Cards from '../components/Cards';
import TopBar from '../components/TopBar';






class Home extends Component {
  render() {
    return (
     <div >
                {/* <TimesSlide /> */}
                <br />
                <OfferBar />
                <br />
                <TopBar /> 
                <br />
                <Cards />
                <br />
              
      </div> 
    );
  }
}

export default Home;