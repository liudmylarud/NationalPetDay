import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Form} from 'react-bootstrap';
import './/styles.css';
import Header from "./components/Header";
import {loginUser} from "../../redux/actionCreators/usersActionCreators";
import {useHistory} from "react-router";
import Input from "../../components/input/Input";
import ButtonU from "../../components/button/ButtonU";


const Login = ({loginUser}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser({email, password});
        history.push('/');
    };


    return (
        <Form className='login-container' onSubmit={handleSubmit}>
            <Header title='Sign in'/>
            <div className='pb-3'>
                <div>
                    <Input
                        controlId='formBasicEmail'
                        label='Email address'
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <Input
                        controlId='formBasicPassword'
                        label='Password'
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className='mt-3 text-center'>
                <ButtonU clazz='pink' children='Submit' type='submit'/>
            </div>
        </Form>
    );
};


const mapDispatchToProps = (dispatch) => (
    {
        loginUser: (body) => dispatch(loginUser(body)),
    }
);

export default connect(null, mapDispatchToProps)(Login);