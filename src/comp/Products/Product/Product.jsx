import React from 'react'

export default function Product(props) {
  return (
    <div className='col-lg-3 bg-dark bg-gradient text-white '>
    <h2>{props.title}</h2>
    <p>{props.desc}</p>
    <p>{props.price}</p>
</div>
  )
}
