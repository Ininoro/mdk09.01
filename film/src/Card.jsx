import React from 'react'
import './Card.css'

export const Card = ( {
  film,
  rate,
  desc
})  => {
  return (
 <div className="card">
        <img src="./img.svg" alt="" />
        <div className="desc">
        <h1>{film}</h1>
        <div className="rate_block">
        <p className="rate">Оценка</p>
        <button className="rate_number">{rate}</button>
        </div>
       
        <p className="desc_text">{desc}</p>
        </div>
        
    </div>
   
  )
}
