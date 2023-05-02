import React, { useEffect, useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { removeFromCart } from '../../Redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import shopping_cart from '../../assets/shopping_cart.png'
import { Link } from 'react-router-dom';
import { thumbimgURL } from '../../Utils/Api/Imageapi';

import Table from 'react-bootstrap/Table';
import { getCountry } from '../../Redux/countrySlice';
import { useTranslation } from 'react-i18next';
import './Register.css'
import { getUserdetails,fetchAsyncuserdetails} from '../../Redux/userSlice';
function Myorder() {


  const { t, i18n } = useTranslation();


 

  const dispatch = useDispatch()
  const { carts } = useSelector((state) => state.cart)
  const [total, setTotal] = useState(0);
  const country=useSelector(getCountry);
 


  useEffect(() => {
    setTotal(
      carts.reduce(
        (total, item) =>{
        return(  total += item.totalPrice)
        },0)
    );

  }, [carts,total]);



  if (carts.length === 0) {
    return (
      <div className='container my-5'>
        <div className='empty-cart  d-flex flex-row justify-content-center flex-column align-items-center'>
          {/* <img src={shopping_cart} alt="" /> */}
          <span className='empty-font fw-6 fs-15 text-gray'>{t("You dont have any history.")}</span>
          <Link to="/" className='shopping-btn bg-orange text-white fw-5'>{t("Go shopping Now")}</Link>
        </div>
      </div>
    )
  }
  return (

    <div>
      <Row className='myorder p-0' >
        <Col className='' xs={12} md={12} sm={12} lg={12}>
          <>
            {
              carts?.map((value, index) => {
                return (
                  <div key={index}>
                    <div className='cartpage d-flex'>
                      <div className='cartpageimg'>
                        <img alt="itcity" src={thumbimgURL + value?.product_image} style={{ width: '150px' }} />
                      </div>
                      <div className='cartpagecontent text-start'>
                        <h5 className='mt-4' style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.5rem'}}>{value?.product_name}</h5>  
                        <h5>{t("Quantity")}:{value.product_qty}{country}</h5>
                        <h5>{t("Total Price")}:{value.totalPrice.toFixed(3)}{country}</h5>
                        <Button className=' bg-dark border-0 ' onClick={() => dispatch(removeFromCart(value?.id))}>{t("Remove")}</Button>

                      </div>
                    </div>
                  </div>
                )
              })
            }
          </>
        </Col>
       
      </Row>
    </div>
  )
}

export default Myorder
