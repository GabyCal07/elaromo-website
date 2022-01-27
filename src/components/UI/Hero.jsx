import React from 'react';

export function Hero() {
    return (
        <div className="hero ">
                <div className="container">             
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-6 col-md-6 col-sm-12 text-center hero-align-container">
                            <div className="me-3">
                                <h1 className="mb-4">¿Qué necesitás?</h1>                          
                                <p className="fs-6"> La canilla pierde agua ... <br />
                                    Tu perro se rasca ...  <br />
                                    No tenes ganas de cocinar ... 
                                </p>
                                <p className="fst-italic fs-4">No desesperes!</p>
                                <p className="fs-6">Acá vas a encontrar información útil y contactos recomendados por tus vecinos que te pueden ayudar.</p>                        
                            </div>                        
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 text-center ">                        
                            <img className="hero-image" src="img/pareja-pensando.jpg" alt="pareja-pensando" />                        
                        </div>
                    </div>            
                </div>        
                <div className="hero-row bg-dark"></div>        
            </div>

    )
}