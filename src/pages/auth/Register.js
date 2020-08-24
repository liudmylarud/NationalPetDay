import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Button, Form} from "react-bootstrap";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import {registerUser} from "../../redux/actionCreators/usersActionCreators";
import {useHistory} from "react-router";

const Register = ({registerUser}) => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser({name, email, password, id: Date.now()});
        history.push('/login');
    };

    return (
        <Form className='login-container' onSubmit={handleSubmit}>

            <Header title='Sign up'/>

            <FormInput id='formBasicName' title='User Name' type='text' placeholder='User name' value={name} onChange={(e) => setName(e.target.value)}/>
            <FormInput id='formBasicEmail' title='Email address' type='email' value={email} placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}/>
            <FormInput id='formBasicPassword' title='Password' type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

const mapDispatchToProps = (dispatch) => (
    {
        registerUser: (body) => dispatch(registerUser(body)),
    }

);
export default connect(null, mapDispatchToProps)(Register);