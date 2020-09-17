import React from 'react';
import logo from './logo.svg';
import './App.css'
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/general/Navigation.css';

// App.js returns JSX that is sort of HTML.
function App() {

  // This is the JSX.
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand id="branding" href="/">Knighmare Engineering Club</Navbar.Brand>
            <Nav className="ml-auto" id="navbar-button-custom">
                <Nav.Link href="/help">Help</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  );
}

// The default exportted function.
// If you import this script, you are importing the App function.

// To run it we go to the terminal and type npm start.
export default App;

// pages
// each page on a site

// components
// like invidual blocks of a page
