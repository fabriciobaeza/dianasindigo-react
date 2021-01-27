import React, { Component } from 'react';
import { Collapse, Jumbotron, Nav, Navbar, NavbarToggler, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid className="mb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Diana's Indigo</h1>
                                <h2>Hair Salon</h2>
                            </div>
                            <div className="col-md-4 col-xl-2">
                                <Button onClick={this.toggleModal} size="lg">
                                    Appointments
                                </Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Schedule An Appointments With Us!</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input type="email"/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Phone Number</Label>
                                <Input type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Date</Label>
                                <Input type="date"/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Time</Label>
                                <Input type="time"/>
                            </FormGroup>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler  onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><i className="fa fa-home fa-lg"/> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/services"><i className="fa fa-cut fa-lg"/> Services</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/gallery"><i className="fa fa-image fa-lg"/> Gallery</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/products"><i className="fa fa-shopping-cart fa-lg"/> Products</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact"><i className="fa fa-address-card fa-lg"/> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;