import React, { useState } from 'react'

export function Reviews({proveedor}) {

    const [ocultar, setOcultar] = useState(true);

    return (
        <>
            <h6 className="reviews-title-style my-4" >Opiniones y comentarios<button className="plus-icon" type="button" onClick={() => { setOcultar(!ocultar) }} ><i className="bi bi-plus-square plus-icon" ></i></button> </h6>
            
            <div className= {(ocultar) ? "reviews hide-reviews": "reviews" }  >

                { proveedor.review.map((rev, index) =>  {
                  return(                    
                    <p key={index}> <i className="bi bi-paperclip"></i>{proveedor.user[index]}- <span className="fst-italic"> "{rev}"</span> </p>
                )})
                }

            </div>            
        </>
    )
}

