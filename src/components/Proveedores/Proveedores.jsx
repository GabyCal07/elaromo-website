import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Navbar } from "../UI/Navbar";
import { ShowProveedores } from './ShowProveedores';
import { getProvByCategory } from '../../fetch/proveedores';

export function Proveedores() {

    const {categoria} = useParams();
    
    const [resultadoApi, setResultadoApi] = useState([]);            

    useEffect(() => {
        async function fetchData () {

            getProvByCategory(categoria)        
            .then((json) => {            
                setResultadoApi(json);              
            })
            .catch((err) => {
                console.log("Error encontrado:", err);
            });                  

        }
        fetchData()
    }, [categoria]);

    return (
         <>
            <Navbar page="" />   
            <ShowProveedores jData={ resultadoApi } />                                              
         </>
     )
}

