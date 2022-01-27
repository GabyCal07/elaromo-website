import React, { useState } from "react";

const baseUrl = process.env.REACT_APP_API_URL;

const initForm = {
    name: '',
    email: '',
    mensaje: '',
}

export function ShowFormulario() {
        
    const [formValues, setFormValues] = useState( initForm );

    const { name, email, mensaje } = formValues;
    
    const handleChange = ({target}) => {
         setFormValues({
            ...formValues, 
            [target.name]: target.value           
         });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();     

        fetch(`${baseUrl}/contacto`, {
        
            method:'POST',  // para crear            
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( formValues )
        
        }).then(response => {
        
            if (!response.ok) {
                throw Error(response.statusText);          
            }
            return response;
        })
        .then((res) => {                 
            setFormValues( initForm );
        })
        .catch(err => { 
            console.log(err)                 
        });        
    }
    
return (
    
        <div className="container py-4 ">
            <div className="row">
                <div className="bg-light-green text-center mb-5">                        
                    <h1 className="section-title ps-3 pt-4"> CONTACTANOS!!</h1>                                  
                    <h2 className="section-subtitle ps-3 pb-4"> Envianos tus consultas o comentarios y te responderemos a la brevedad.</h2>
                </div>
            </div>    
            <div className="row">
                <div className="col-md-6 mx-auto login-form">                    
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Nombre y Apellido *</label>
                            <input
                                type="text"  
                                required                       
                                className="form-control"  
                                placeholder="Tu nombre"                              
                                name="name"
                                value={ name }                                
                                onChange={handleChange}                                  
                                autoComplete="off"
                                minLength={2}
                                maxLength={50}
                            />                            
                        </div>
                        <div className="form-group">
                            <label>E-mail *</label>
                            <input
                                type="email"   
                                required                             
                                className="form-control"                             
                                placeholder="Tu Email"                                 
                                name="email"
                                value={ email }
                                onChange={handleChange}                                                                                                                         
                                autoComplete="off"
                            />                            
                        </div>
                        <div className="form-group">
                            <label>Mensaje *</label>
                            <textarea
                                type="text"      
                                required                                                              
                                className="form-control"                                
                                placeholder="Tu mensaje"                              
                                rows="5"
                                name="mensaje"
                                value={ mensaje }
                                onChange={ handleChange }                                
                            ></textarea>            
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Enviar mensaje" 
                            />
                        </div>
                    </form>
                </div>                
                
            </div>
        </div>
    )
}