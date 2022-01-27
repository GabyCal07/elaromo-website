import React from 'react';

export function Card({value}) {
    return (
        <div className="card my-3">
            <div className="card-body card-style">                                        

                <img className="card-image" src={value.img} alt={value.name}/>                
                                                            
                <hr className="hr-line" />
                
                <h5 className="card-title card-title-style">{value.name}</h5>
                <p className="card-text section-text">{value.description}</p>                            
                <a href={value.group} className="card-link">Ver <i className="bi bi-arrow-right bi-arrow-style"></i></a>                
            
            </div>
        </div>  
    )
}  