import React from 'react'
import Product from './Product/Product.jsx';

export default function Products() {
  const products = [
    {id:1,title:'product one',desc:'this is product one' ,price:'1000'},
    {id:2,title:'product two',desc:'this is product two' ,price:'2000'},
    {id:3,title:'product three',desc:'this is product three' ,price:'3000'},
];

  return (
 

<>
 <div className='row py-5 gap-1 text-center justify-content-center '>
  {products.map((product)=>{
  return <Product {...product} key={product.id}/>
  })}

 </div>
</>


  )}
