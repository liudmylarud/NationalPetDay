import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Form} from "react-bootstrap";
import Header from "./components/Header";
import {registerUser} from "../../redux/actionCreators/usersActionCreators";
import {useHistory} from "react-router";
import Input from "../../components/input/Input";
import ButtonU from "../../components/button/ButtonU";

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

            <Input
                controlId='formBasicName'
                label='User Name'
                type='text'
                placeholder='User name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                controlId='formBasicEmail'
                label='Email address'
                type='email'
                value={email}
                placeholder='Enter email'
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                controlId='formBasicPassword'
                label='Password'
                type='password'
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className='mt-3 text-center'>
                <ButtonU clazz='pink' children='Submit' type='submit'/>
            </div>
        </Form>
    );
};

const mapDispatchToProps = (dispatch) => (
    {
        registerUser: (body) => dispatch(registerUser(body)),
    }

);
export default connect(null, mapDispatchToProps)(Register);