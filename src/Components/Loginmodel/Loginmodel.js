import React from 'react'
import './Loginmodel.css'
import {Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../Redux/userSlice';
import { useNavigate } from 'react-router-dom'
import { getToken } from '../../Redux/userSlice';

function Loginmodel() {

  const dispatch = useDispatch();
  const navigate=useNavigate()
  const token = useSelector(getToken);
  // const error = useSelector((state) => state.auth.error);

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
    setTimeout(() => {
    navigate('/');
    }, 500);
    } 
    catch (error) {
      console.error(error);
    }
  };

  return (
    // <div className='cart-modal'>
    //   <h5 className='cart-modal-title fw-7 fs-15 font-manrope text-center'>Log in or register</h5>
    //   <div className='cart-modal-list grid'>
    //     <div className='text-capitalize view-cart-btn bg-orange fs-15 font-manrope '>
    //     <Form onSubmit={handleSubmit}>
    //       <Form.Group>
    //         <Form.Control type="email" name="customer_email" className='rounded-0 my-2'
    //           placeholder="Enter your your email" />
    //       </Form.Group>
    //       <Form.Group>
    //         <Form.Control type="password"   name="password"className='rounded-0 my-2'
    //           placeholder="Enter your your password" />
    //       </Form.Group>
    //       <div class="loginbutton">
    //         <Button type="submit" class=" w-100 btn btn-primary">Login</Button>
    //       </div>
    //     </Form>
    //     </div>
    //   </div>
    //   <div className="flex flex-column align-center justify-center cart-modal-empty">
    //     <h6 className='text-dark fw-4'>Don’t have an account?</h6>
    //     <Link to="/register">Create an account</Link>
    //   </div>
    // </div>
    <>
    
      <h5 className='cart-modal-title fw-7 fs-15 font-manrope text-center'>Log in or register</h5>
      <div className='cart-modal-list grid'>
        <div className='text-capitalize view-cart-btn bg-orange fs-15 font-manrope '>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control type="email" name="customer_email" className='rounded-0 my-2'
              placeholder="Enter your your email" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="password"   name="password"className='rounded-0 my-2'
              placeholder="Enter your your password" />
          </Form.Group>
          <div class="loginbutton">
            <Button type="submit" class=" w-100 btn btn-primary">Login</Button>
          </div>
        </Form>
        </div>
      </div>
      <div className="flex flex-column align-center justify-center cart-modal-empty">
        <h6 className='text-dark fw-4'>Don’t have an account?</h6>
        <Link to="/register">Create an account</Link>
      </div>
    
    </>
  )
}

export default Loginmodel
