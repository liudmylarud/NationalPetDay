import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import './/styles.css';
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import {loginUser} from "../../redux/actionCreators/usersActionCreators";
import {useHistory} from "react-router";

const Login = ({loginUser}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        loginUser({email, password});
        history.push('/');
    };

    return (
        <Form className='login-container' onSubmit={handleSubmit}>

            <Header title='Sign in' />

            <FormInput id='formBasicEmail' title='Email address' type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormInput id='formBasicPassword' title='Password' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

const mapDispatchToProps = (dispatch) => (
    {
        loginUser: (body) => dispatch(loginUser(body)),
    }
);

export default connect(null, mapDispatchToProps)(Login);