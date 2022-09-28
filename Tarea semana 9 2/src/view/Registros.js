import React from 'react';
import ComponenteRegistro from '../components/registro'; 
export default function Registros(props) { 
    return (
        <ComponenteRegistro onRegister={props.onCambioDeEstado}/>

    );

}