import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
<div className=" py-5  fixed w-75 bg-light  ">
  <div className="container">
    <div className="row in-down d-flex justify-content-around justify-content-md-center">
      <div className="col-md-6  ">
        <ul className=' d-flex justify-content-lg-start justify-content-center'>
          <li className="fw-bold">by phone :</li>
          <li className='pe-3'><a href="tel:998911479823"><i className="fa-solid fa-phone text-white " /></a> +2003-1116
          </li>
          <li><a href="tel:998911479823" ><i className=" fa-solid fa-phone text-white" /></a> +2004-0823
          </li>
        </ul>
      </div>
      <div className="col-md-4 ">
        <div className=" d-flex justify-content-lg-end  justify-content-center">
          <p>© 2021 Terse is Proudly Powered by <span className="text-main-color">mosaicdesign</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
