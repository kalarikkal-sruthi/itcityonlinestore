import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
import { registration } from '../../Redux/userSlice';
import Loginmodel from '../../Components/Loginmodel/Login';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Register.css'
export function Register() {

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [name, setCustomername] = useState('');
  const [email, setCustomeremail] = useState('');
  const [password, setPassword] = useState('');

  const [formErrors, setFormErrors] = useState({});


  const navigate = useNavigate()
  const handleSubmit = (e) => {

    e.preventDefault();
    if (validateForm()) {
      dispatch(registration({ name, email, password }));
      console.log("Form is valid");
    }
   
    setTimeout(() => {
      navigate('/login');
    }, 2000);

    // setCustomername('')
    // setCustomeremail('')
    // setPassword('')
    console.log({ name, email, password });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // validate first name
    if (!name.trim()) {
      errors.name = "name is required";
      isValid = false;
    }

    // // validate last name
    // if (!formValues.lastName.trim()) {
    //   errors.lastName = "Last name is required";
    //   isValid = false;
    // }

    // validate email
    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    // validate password
    if (!password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    // validate confirm password
    if (password.trim()) {
      errors.confirmPassword = "Confirm password is required";
      isValid = false;
    } else if (password !== password) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };






  return (

    <>
      <Container >
        <Row className="registration">
          <Col xs={12} md={6} sm={6} lg={6} className=''>
            <Loginmodel />
          </Col>
          <Col xs={12} md={6} sm={6} lg={6} className=' registerform '>
            <h5 className='cart-modal-title fw-7 fs-15 font-manrope text-center'>{t("Register")}</h5>
            <form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control type="text" id="name" value={name} onChange={(e) => setCustomername(e.target.value)} className='rounded-0 my-2'
                  placeholder={t("Enter your your name")} />
                   {formErrors.name && <span>{formErrors.name}</span>}
              </Form.Group>
             
              <Form.Group>
                <Form.Control type="email" id="email" value={email} onChange={(e) => setCustomeremail(e.target.value)} className='rounded-0 my-2'
                  placeholder={t("Enter your your email")} />
                   {formErrors.email && <div>{formErrors.email}</div>}
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-0 my-2'
                  placeholder={t("Enter your  password")} />
                  {formErrors.password && <div>{formErrors.password}</div>}
              </Form.Group>
              {/* <Form.Group>
                <Form.Control type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-0 my-2'
                  placeholder={t("Enter your confirm password")} />
                  {formErrors.password && <div>{formErrors.password}</div>}
              </Form.Group> */}
              <div class="loginbutton">
                <Button type="submit" disabled={()=>(!validateForm())} class=" w-100 btn btn-primary" >{t("Register")}</Button>
              </div>
            </form>
          </Col>
        </Row>


      </Container>
    </>


  );
}