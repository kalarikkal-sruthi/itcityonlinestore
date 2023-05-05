import React from 'react'
import './Loginmodel.css'
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../Redux/userSlice';
import { useNavigate } from 'react-router-dom'
import { getToken } from '../../Redux/userSlice';
import { useTranslation } from 'react-i18next';
import { getCartMessageStatus, setCartMessageOff, setCartMessageOn } from '../../Redux/cartSlice';
import Loginmessage from '../Cartmessage/Loginmessage';

function Loginmodel() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const token = useSelector(getToken);
  const cartmessage = useSelector(getCartMessageStatus)
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (cartmessage) {
      setTimeout(() => {
        dispatch(setCartMessageOff())
      }, 2000);
    }
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault();
    const customer_email = event.target.customer_email.value;
    const password = event.target.password.value;
    try {
      dispatch(login({ customer_email: customer_email, password: password }));
      if (!token) {
        alert('Unable to login. Please try after some time.');
        return;
      }
      const errors = {};
      if (!customer_email) {
        errors.email = "Email is required";
      }
      if (!password) {
        errors.password = "Password is required";
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
  return (
    <>
      <h5 className='cart-modal-title fw-7 fs-15 font-manrope text-center'>{t("Log in or register")}</h5>
      <div className='cart-modal-list grid'>
        <div className='text-capitalize view-cart-btn bg-orange fs-15 font-manrope '>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control type="email" name="customer_email" className='rounded-0 my-2'
                placeholder={t("Enter your email")} />
                 {errors.email && <div>{errors.email}</div>}
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" name="password" className='rounded-0 my-2'
                placeholder={t("Enter your  password")} />
                  {errors.password && <div>{errors.password}</div>}
            </Form.Group>
            <div class="loginbutton">
              <Button type="submit" class=" w-100 btn btn-primary">{t("Login")}</Button>
            </div>
          </Form>
        </div>
        {cartmessage && <Loginmessage />}
      </div>
    

    </>
  )
}

export default Loginmodel
