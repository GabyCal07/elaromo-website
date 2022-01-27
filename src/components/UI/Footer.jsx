import React from 'react';

export function Footer() {
    return (
        <footer className="bg-dark py-4">
            <div className="container">
                <div className="row text-light">            
                
                    <div className="col-md-8 col-sm-6">                 
                        <div className="row">                        
                            <h5 className="ftr-title-text mb-3">Contactos útiles</h5>                    
                            <div className="col-md-4 col-sm-12 fw-light">
                                <p><i className="bi bi-telephone"></i> Guardia<br /> <a className="a-tel" href="tel:+541103484493918">03484-493918</a></p>
                            </div>
                            <div className="col-md-4 col-sm-12 fw-light">
                                <p><i className="bi bi-whatsapp"></i> Administración<br /> <a className="a-tel" href="https://api.whatsapp.com/send?phone=+54920206021">+54 9 2020 6021</a></p>
                            </div>        
                            <div className="col-md-4 col-sm-12 fw-light">
                                <p><i className="bi bi-whatsapp"></i> House<br /> <a className="a-tel" href="https://api.whatsapp.com/send?phone=+5494493945">+54 9 449 3945</a></p>
                            </div>
                        </div>                
                    </div>
                    
                    <div className="col-md-4 col-sm-6 text-center">                        
                        <img className="ftr-image" src={window.location.origin + '/img/logo.png'} alt="Barrio El Aromo" />
                        <p className="fst-italic">Su naturaleza lo ha hecho único</p>                 
                    </div>

                </div>
            </div>

        </footer>
    );
 }