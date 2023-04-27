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

function Cartpage() {



  const dispatch = useDispatch()
  const { carts } = useSelector((state) => state.cart)
  const [total, setTotal] = useState();
  const country=useSelector(getCountry);

  useEffect(() => {
    setTotal(
      carts.reduce(
        (total, item) =>{
        return(  total += item.totalPrice)
        },0)
    );
  }, [carts]);



  if (carts.length === 0) {
    return (
      <div className='container my-5'>
        <div className='empty-cart  d-flex flex-row justify-content-center flex-column align-items-center'>
          <img src={shopping_cart} alt="" />
          <span className='empty-font fw-6 fs-15 text-gray'>Your shopping cart is empty.</span>
          <Link to="/" className='shopping-btn bg-orange text-white fw-5'>Go shopping Now</Link>
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
                    <div className='cartpage d-flex'>
                      <div className='cartpageimg'>
                        <img alt="itcity" src={thumbimgURL + value?.product_image} style={{ width: '150px' }} />
                      </div>
                      <div className='cartpagecontent text-start'>
                        <h5 className='mt-4' style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.5rem'}}>{value?.product_name}</h5>  
                        <h5>Quantity:{value.product_qty}{country}</h5>
                        <h5>Total Price:{value.totalPrice}{country}</h5>
                        <Button className=' bg-dark border-0 ' onClick={() => dispatch(removeFromCart(value?.id))}>Remove</Button>

                      </div>
                    </div>
                  </div>
                )
              })
            }
          </>
        </Col>
        <Col xs={12} md={12} sm={12} lg={4}>
          <h4 className=' text-start py-2'>Summary</h4>
          <Table className='px-5 cartpagetable' responsive>
            <tbody>
              <tr >
                <td className=' text-start py-2'>Sub-total </td>
                <td className=' text-end py-2' >{total}{country}</td>
              </tr>
              <tr>
              <td className=' text-start py-2'>Est. total </td>
               
              <td className=' text-end py-2' >{total}{country}</td>
               
              </tr>
              <tr>
                <div className=' py-4'>
                  <Link to="/payment"><Button  style={{background:"#f5831a"}} className='border-0 w-100'>Proceed To Buy</Button> </Link>
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
