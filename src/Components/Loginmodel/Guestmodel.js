import React from 'react'
import './Loginmodel.css'
import { useEffect } from 'react';
import {Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser, login } from '../../Redux/userSlice';
import { useNavigate } from 'react-router-dom'
import { getToken } from '../../Redux/userSlice';
import { useTranslation } from 'react-i18next';
import Cartmessage from '../Cartmessage/Cartmessage';
import { clearCart, getCartMessageStatus,setCartMessageOff,setCartMessageOn } from '../../Redux/cartSlice';
import Loginmessage from '../Cartmessage/Loginmessage';
function Guestmodel() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const token = useSelector(getToken);
  // const error = useSelector((state) => state.auth.error);
  const cartmessage = useSelector(getCartMessageStatus)

useEffect(() => {
    if(cartmessage){
  setTimeout(() => {
    dispatch(setCartMessageOff())
  }, 2000);
}},[])


  const handleSubmit = (event) => {
    event.preventDefault();
    const customer_email = event.target.customer_email.value;
    const password = event.target.password.value;
    try {
    dispatch(login({ customer_email: customer_email, password:password }));
    if (!token) {
      alert('Unable to login. Please try after some time.');
      return;
    }
    dispatch(setCartMessageOn(true))
    setTimeout(() => {
    navigate('/');
    }, 200);


    } 
    catch (error) {
      console.error(error);
    }
  };
  const onLogOut=()=>{
  dispatch(clearUser())
  dispatch(clearCart())
    localStorage.removeItem('token');
    
    navigate('/')
    window.location.reload(); }

  return (
    <>
    <div className='cart-modal'>
      <h3>Login Details</h3>
      <div className='cart-modal-list grid'>
        <div className='text-capitalize view-cart-btn bg-orange fs-15 font-manrope '>
            <Link to="/profile" className='guestmodal mb-2' style={{ textDecoration: "none",Color:"black" }}>Profile</Link>
            <br></br>
            <Link to="/myorder"  className='guestmodal mb-2' style={{ textDecoration: "none",Color:"black" }}>Myorder</Link>
            <br></br>
            <Link to=""   style={{ textDecoration: "none",Color:"black" }}><button className='guestmodal mb-2'
            onClick={onLogOut} 
           
          >
            {t("Log Out")}
          </button></Link>
      
        </div>
      </div>
      
    </div>
    </>
    
 

  )
}

export default Guestmodel
