import React from 'react'
import { Button } from 'react-bootstrap';
import '../../Pages/Productbycategory/Productbycategory.css'
import { Link } from 'react-router-dom';
import { thumbimgURL } from '../../Utils/Api/Imageapi';


function Product({ product }) {
  console.log('product', product);

  return (
    <>
      <Link style={{ textDecoration: "none" }} to={`/product/${product.product_id}`} >
        <div className='newdesign'>
          <img src={thumbimgURL + product?.product_image} alt="" />
          <p style={{ fontWeight: ' 600', fontSize: '14px', marginBottom: '0.5rem' }}>{product?.product_name}</p>
          <p style={{ fontSize: '18px', marginBottom: "4px", color: "#f5831a" }} className="  ">{product?.product_price_offer.toFixed(3)}</p>
          <div className="font-body"><span style={{ MarginBottom: '4px', textDecoration: "line-through", fontSize: '14px' }} className=" ">{product?.product_price.toFixed(3)} KD</span>  <span className="" style={{ background: '#f5831a', padding: '3px 3px', fontSize: "12px", color: "white" }}>27%</span></div>
          <Button className='w-100 newbtn'>Add To Cart</Button>
        </div>
      </Link>
    </>)
}

export default Product