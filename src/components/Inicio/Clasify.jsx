import React from 'react';

export function Clasify() {
    return(

        <section className="clasify my-5 py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center"> 
                        <div className="image-container">
                            <img className="clasif-image pulse" src="img/clasificados.jpg" alt="Clasificados" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="clasif-info-container"> 
                            <h2 className="section-title">
                                ¡Y también podés vender y comprar!
                            </h2>
                            <p className="section-text fs-5">
                                Mostrá lo que querés vender y mirá lo que ofrecen tus vecinos.
                            </p>                            
                        </div>
                    </div>
                </div>        
            </div>
        </section>
    )
}