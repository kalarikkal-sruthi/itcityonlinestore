import React, { useEffect, useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { removeFromCart } from '../../Redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import shopping_cart from '../../assets/shopping_cart.png'
import { Link } from 'react-router-dom';
import { thumbimgURL } from '../../Utils/Api/Imageapi';
import './Cartpage.css'
import Table from 'react-bootstrap/Table';
import { getCountry } from '../../Redux/countrySlice';
import { useTranslation } from 'react-i18next';
function Cartpage() {

  const { t, i18n } = useTranslation();

  const dispatch = useDispatch()
  const [total, setTotal] = useState(0);
  const { carts } = useSelector((state) => state.cart)
  const country=useSelector(getCountry);
  useEffect(() => {
    setTotal(
      carts.reduce(
        (total, item) =>{
        return(  total += item.totalPrice)
        },0)
    );

  }, [carts,total]);

  console.log(total.toFixed(2));



  if (carts.length === 0) {
    return (
      <div className='container my-5'>
        <div className='empty-cart  d-flex flex-row justify-content-center flex-column align-items-center'>
          <img src={shopping_cart} alt="" />
          <span className='empty-font fw-6 fs-15 text-gray'>{t("Your shopping cart is empty.")}</span>
          <Link to="/" className='shopping-btn bg-orange text-white fw-5'>{t("Go shopping Now")}</Link>
        </div>
      </div>
    )
  }

  return (

    <div>
      <Row className='m-5 p-0' >
        <Col className='' xs={12} md={12} sm={12} lg={6}>
          <>
            {
              carts?.map((value, index) => {
                return (
                  <div key={index}>
                    <div className='cartpage'>
                      <div className='cartpageimg'>
                        <img alt="itcity" src={thumbimgURL + value?.product_image} style={{ width: '150px' }} />
                      </div>
                      <div className='cartpagecontent text-start my-3'>
                        <h5 className='mt-2' style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.5rem'}}>{value?.product_name}</h5>  
                        <h5>{t("Quantity")}:{value.product_qty}</h5>
                        <h5>{t("Total Price")}:{value?.totalPrice.toFixed(3)} {country}</h5>
                        <Button className=' bg-dark border-0 ' onClick={() => dispatch(removeFromCart(value?.id))}>{t("Remove")}</Button>

                      </div>
                    </div>
                  </div>
                )
              })
            }
          </>
        </Col>
        <Col xs={12} md={12} sm={12} lg={4} className='cart'>
          <h4 className='cartsummary text-start py-2'>{t("Summary")}</h4>
          <Table className='px-5 cartpagetable' responsive>
            <tbody>
              <tr >
                <td className=' text-start py-2'>{t("Sub-total")}</td>
                <td className=' text-end py-2' >{total.toFixed(2)} {country}</td>
              </tr>
              <tr>
              <td className=' text-start py-2'>{t("Est. total")}</td>
               
              <td className=' text-end py-2' >{total.toFixed(2)} {country}</td>
               
              </tr>
              <tr>
                <div className=' py-4'>
                  <Link to="/payment"><Button  style={{background:"#f5831a"}} className='border-0'>{t("Proceed To Buy")}</Button> </Link>
                </div>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  )
}

export default Cartpage
