import React from 'react';

export function Message() {
    return (
        
        <section className="bg-gray my-5 py-5">
            <div className="container">
                <div className="row imgText-container">
                    <div className="col-md-6 col-sm-12 d-flex align-items-center share-info-container">
                        <p className="section-text">
                        Si tenés información que te gustaría compartir o querés recomendar algún contacto nuevo, envianos un &nbsp;
                        <i className="bi bi-whatsapp"></i> con el dato al grupo de vecinos. <br />                
                        Esto ayuda a contar con una base de datos de proveedores y servicios para nuestra comunidad.
                        </p>                 
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                        <div className="image-container">
                            <img className="share-image" src="img/compartir.jpg" alt="Compartir info" />                            
                        </div>
                    </div>
                </div>       
            </div>
        </section>
    )
}