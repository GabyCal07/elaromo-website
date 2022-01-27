import React from "react";
import {useParams} from 'react-router-dom';
import {Reviews} from './Reviews';

export function ShowProveedores({jData}) {
    const {categoria} = useParams();
            
    return (

        <main className="bg-light-gray py-4">       

            <div className="container">
                <div className="row">
                    <div className="bg-light-green mb-5">                        
                        {(categoria)  && <h1 className="section-title text-center pt-4">{categoria.toUpperCase()}</h1>}
                    </div>               
                </div>

                <div className="row">
                    {                                               
                        jData.map((proveedor, index) => {                         
                            return(                                  
                            
                                <div className="col-xl-4 col-md-6 col-sm-12" key={proveedor._id}>                            
                                    <div className="card p-card my-3">                             
                                        
                                        <h5 className="card-title card-title-style text-light my-2">{proveedor.name}</h5> 
                                        
                                        <div className="card-body p-card-body">                                                                 
                                            <h6 className="card-subtitle fs-5 mb-3 text-muted">{proveedor.info}</h6>                                                
                                            {(proveedor.review.length > 0) && <Reviews proveedor={proveedor}/> }
                                        </div>                            
                                    </div>
                                </div>  
                            )
                        })                    
                    }
                
                </div>
            </div>
        </main>
    )
}