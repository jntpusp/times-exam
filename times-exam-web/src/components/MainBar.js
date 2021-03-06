import React, { Component } from 'react';
import Home from './Home';
import Contact from './Contact';
import Tutorials_Eng from './Tutorials_Eng';
import Tutorials_QA from './Tutorials_QA';
import Tutorials_CompApt from './Tutorials_CompApt';
import Tutorials_Reasoning from './Tutorials_Reasoning';
import IBPS from './IBPS';
import MBA from './MBA';
import SBI from './SBI';
import Railways from './Railways';
import About from './About';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, NavLinkProps } from 'react-router-dom';
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import '../components/mainbar.css'
import TopBar from './TopBar';
import Exam from './Exam';


class MainBar extends Component {
    render() {
        return (
            <Switch>
                <div>
                    <h2>Main Bar</h2>
                    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
                        <Navbar.Brand href="#home">
                            <NavLink to="/" href="#home" style={{ color: 'white' }}>
                                <img
                                    alt=""
                                    src={logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />
                                {'TimesExam.com'}
                            </NavLink>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto" >
                                <Nav.Link><NavLink to="/about" href="#about" style={{ color: 'white' }}>About</NavLink> </Nav.Link>
                                <Nav.Link><NavLink to="/contact" href="#contact"style={{ color: 'white' }}>Contact</NavLink></Nav.Link>
                                <NavDropdown title="Study" id="collasible-nav-dropdown">
                                    <NavDropdown.Item><NavLink to="/qa" href="#action/3.1">QA</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/english" href="#action/3.2">English</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/reasoning" href="#action/3.3">Reasoning</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/computer" href="#action/3.4">Computer Apt</NavLink></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Exam" id="collasible-nav-dropdown">
                                    <NavDropdown.Item><NavLink to="/ibps" href="#action/3.1">IBPS</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/sbi" href="#action/3.2">SBI</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/mba" href="#action/3.3">MBA</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/railways" href="#action/3.4">Railways</NavLink></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search for courses, test series, current affairs etc" className="mr-sm-2" />
                                </Form>
                                <Nav.Link href="#register">Login/Register</Nav.Link>
                                <Nav.Link eventKey={2} href="#cart">Cart</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>
                
                    <div>

                        <Route exact path='/' component={Home} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/about' component={About} />
                        {/* <Route path='/study' component={Study} /> */}
                        <Route path='/qa' component={Tutorials_QA} />
                        <Route path='/english' component={Tutorials_Eng} />
                        <Route path='/reasoning' component={Tutorials_Reasoning} />
                        <Route path='/computer' component={Tutorials_CompApt} />
                        <Route path='/ibps' component={IBPS} />
                        <Route path='/sbi' component={SBI} />
                        <Route path='/mba' component={MBA} />
                        <Route path='/railways' component={Railways} />
                        <Route path='/exam' component={Exam} />
                    </div>

                </div>
            </Switch>
        );
    }
}

export default MainBar;