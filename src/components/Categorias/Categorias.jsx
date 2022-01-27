import React, { useState, useEffect } from 'react';
import { Navbar } from "../UI/Navbar";
import { ShowCategorias } from './ShowCategorias';
import { getCategoriasByGrupo } from '../../fetch/categorias';

export function Categorias({grupo}) {
                 
    const [resultadoApi, setResultadoApi] = useState([]);    
        
    useEffect(() => {
        async function fetchData () {
           
            getCategoriasByGrupo(grupo)        
            .then((json) => {            
                setResultadoApi(json);              
            })
            .catch((err) => {
                console.log("Error encontrado:", err);
            });              

        }
        
        fetchData()        
    }, [grupo]);
 
    return (
         <>            
            <Navbar page={grupo} />              
            <ShowCategorias jData={resultadoApi} />            
         </>
     )
}

