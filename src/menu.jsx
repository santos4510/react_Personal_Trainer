import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Feedback from './components/Feedback';
import About from './components/About';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Login from './components/loginPainel';
import App from './App';

export default class Menu extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand><Link as={Link} to="/App">PTS</Link></Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/App">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                <Nav.Link as={Link} to="/feedback">Feedbacks</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/LoginPainel" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/App" element={<App />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
