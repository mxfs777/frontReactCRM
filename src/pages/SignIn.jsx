import { useState, createContext, useContext } from 'react';
import authContext from '../context/AuthContext';
import * as UserService from '../services/UserService';

import './SignIn.css';

const SignIn = () => {
    const { setAuthData } = useContext(authContext);

    const login = (event) => {
        event.preventDefault();

        const credentials = {
            username: event.target.username.value,
            password: event.target.password.value
        }

        if(credentials.username.trim().length > 0 && credentials.password.trim().length) {

            UserService.login(credentials)
            .then( ({data}) => {             
                setAuthData(preveState => {
                    preveState.authenticated = true;
                    preveState.data = {
                        id: data.id
                    };

                    console.log(preveState);
            
                    return {...preveState};
                });  
            })
            .catch( (err) => console.log(err))
        }

    }

    return ( 
        <div className='signInContainer' onSubmit={login}>
            <h3>Sign In</h3>
            <form action="">
                <div className='form-field'>
                    <input type="text" placeholder='Username' value={"admin@crm.com"} name="username" />
                </div>
                <div className='form-field'>
                    <input type="password" placeholder='Password' value={"Bootcamp4"} name="password" />
                </div>
                <button type="submit">Enter</button>
            </form>
        </div>
     );
}
 
export default SignIn;