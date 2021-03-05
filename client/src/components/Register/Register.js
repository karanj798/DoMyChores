import './Register.css';
import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            usertype: '',
            username: '',
            password: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    register = (event) => {
        event.preventDefault();
        console.log('submitted');
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.register}>
                    <Form.Row controlId='formBasicEmail'>
                        <Form.Label className='label'>Email</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Row>

                    <Form.Row controlId='formBasicEmail'>
                        <Form.Label className='label'>Username</Form.Label>
                        <Form.Control
                            type='string'
                            placeholder='username'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </Form.Row>

                    <Form.Row controlId='formBasicEmail'>
                        <Form.Label className='label'>User Type</Form.Label>
                        <Form.Control
                            as='select'
                            custom
                            name='usertype'
                            value={this.state.usertype}
                            onChange={this.handleChange}
                        >
                            <option>Customer</option>
                            <option>Service Provider</option>
                        </Form.Control>
                    </Form.Row>

                    <Form.Row controlId='formBasicPassword'>
                        <Form.Label className='label'>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </Form.Row>

                    <Form.Row>
                        <Button
                            className='submitBtn'
                            variant='primary'
                            type='submit'
                        >
                            Register
                        </Button>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}