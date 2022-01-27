import React from "react";
import { Navbar } from "../UI/Navbar";
import { ShowFormulario } from "./ShowFormulario";
import './formulario.css';

export function Contacto() {
    return(
    <>
        <Navbar page="contacto"/>  
        <ShowFormulario />
    </>
    )
}