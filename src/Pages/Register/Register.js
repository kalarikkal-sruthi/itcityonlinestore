import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
import { registration } from '../../Redux/userSlice';
import Loginmodel from '../../Components/Loginmodel/Loginmodel';

export function Register() {
  const dispatch = useDispatch();
  const [name, setCustomername] = useState('');
  const [email, setCustomeremail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registration({ name, email, password }));
    console.log({ name, email, password });
  };

  return (

    <>
      <Container>
        <Row className=" my-4">
        <Col xs={12} md={6} sm={6} lg={6}>
            <Loginmodel />
            </Col>
            <Col xs={12} md={6} sm={6} lg={6}>
            <h5 className='cart-modal-title fw-7 fs-15 font-manrope text-center'>Register</h5>
            <form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control type="text" id="name" value={name} onChange={(e) => setCustomername(e.target.value)} className='rounded-0 my-2'
                  placeholder="Enter your your name" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="email" id="email" value={email} onChange={(e) => setCustomeremail(e.target.value)} className='rounded-0 my-2'
                  placeholder="Enter your your email" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-0 my-2'
                  placeholder="Enter your your password" />
              </Form.Group>
              <div class="loginbutton">
                <Button type="submit" class=" w-100 btn btn-primary">Register</Button>
              </div>
            </form>
            </Col>
          </Row>
            
            
            </Container>
    </>


  );
}