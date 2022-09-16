import React from 'react';
import ComponenteLogin from '../components/login'; 
export default function Login(props) { 
    return (
        <ComponenteLogin onLogin={props.onLogin}/>

    );

}