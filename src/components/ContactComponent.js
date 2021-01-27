import React, { Component } from 'react';
import { Form, FormGroup, Col, Input, Button } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phoneNum: '',
            email: '',
            feedback: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        alert('Current state is:' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Location</h2>
                        <hr />
                        Brooklyn, NY
                        <div>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193747.65735612353!2d-74.08508451014343!3d40.64515935991669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1601337405869!5m2!1sen!2sus"
                                width="550"
                                height="300"
                                title="map"
                            />
                        </div>
                        <div>
                            <h2>Working Hours</h2>
                            <hr />
                            Mon - Fri: 10am - 7:30pm<br/>
                            Sat: 10am - 7:30pm<br/>
                            Sun: 10am - 6:30pm
                        </div>
                    </div>
                    <div className="col">
                        <h2>Send Us Your Feedback</h2>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Col>
                                    <Input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        placeholder="Name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange} 
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col>
                                    <Input
                                        type="text"
                                        id="phoneNum"
                                        name="phoneNum"
                                        placeholder="Phone Number"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col>
                                    <Input
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col>
                                    <Input
                                        type="textarea"
                                        id="feedback"
                                        name="feedback"
                                        placeholder="Your Feedback"
                                        value={this.state.feedback}
                                        onChange={this.handleInputChange}
                                        rows="10"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col>
                                    <Button type="submit" color="secondary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
                
        );
    }
}

export default Contact;