import React,{useState} from 'react';
import ComponenteLogin from '../components/login'; 
import Registros from './Registros';
export default function Login(props) { 
    const [estaResgistrado, setEstaRegistrado] = useState(true);
    return (
        <>
            {estaResgistrado ?
                <ComponenteLogin onLogin={props.onLogin} onCambioDeEstado={()=>{setEstaRegistrado(false)}} />
            :
                <Registros onCambioDeEstado={()=>{setEstaRegistrado(true)}}></Registros>
            } 
            </>
    );

}