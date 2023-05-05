import React from 'react'
import { useState, useEffect } from 'react';
import { Col, Row, Form, Button, FloatingLabel, Table} from 'react-bootstrap'
import { APIClient } from '../../Utils/Api/Api';
import './Payment.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thumbimgURL } from '../../Utils/Api/Imageapi';
import { getCountry } from '../../Redux/countrySlice';
import { useTranslation } from 'react-i18next';
import Cartmessage from '../../Components/Cartmessage/Cartmessage';
import { clearCart, getCartMessageStatus, setCartMessageOff, setCartMessageOn } from '../../Redux/cartSlice';



function Payment() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const country = useSelector(getCountry);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { carts } = useSelector((state) => state.cart)
  const [shippingAddress, setshippingAddress] = useState({});
  const [checked, setChecked] = React.useState(false);
  const [secondchecked, setseconChecked] = React.useState(false);
  const cartmessage = useSelector(getCartMessageStatus)
  const navigate = useNavigate();
  const [reg, setReg] = useState({
    customer_name: "",
    customer_email: "",
    customer_mobile: "",
    customer_address: "",
    customer_pincode: "",
    customer_dist: "",
    customer_state: "",
    remarks: "",
    password: "",
    confirmPassword:"",

  });

  const [total, setTotal] = useState(0);

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    setTotal(
      carts.reduce(
        (total, item) => {
          return (total += item.totalPrice)
        }, 0)
    );
    if (cartmessage) {
      setTimeout(() => {
        dispatch(setCartMessageOff())
      }, 2000);

    }
  }, [carts]);




  const handleChange = () => {
    setChecked(!checked);
  };
  const handleChangesecond = () => {
    setseconChecked(!checked);
  };
  const handle = (e) => {
    const newData = { ...reg };
    newData[e.target.id] = e.target.value;

    setReg(newData);
    updateShippingaddress({
      [e.target.name]: e.target.value,
    });

  };
  const updateShippingaddress = (address) => {
    setshippingAddress({ ...shippingAddress, ...address });
    localStorage.setItem("shipping", JSON.stringify(address));
  };

  const completeshopping = async (e) => {
    e.preventDefault();
    console.log({ shippingAddress });
    const customer = new FormData();

    Object.entries(shippingAddress).forEach(([key, value]) => {
      customer.append(key, value);
    });
    customer.append("customer_type", "Regular");
    customer.append("password", "123456");

    const cartData = carts?.map((it) => {
      return {
        id: it.id,
        product_id: it.product_id,
        product_qty: it.product_qty,
      };
    });

    const purchase = {
      cur: "KWD",
      user_id: "0",
      cart_data: cartData,
    };
 console.log(purchase);
    try {
      if (validateForm()) {
        const cust = await APIClient.post("/createCustomer", customer);
        const purch = await APIClient.post("/createPurchase", purchase);
        if (purch.status === 200 || purch.status === 201) {
          localStorage.removeItem("cart");
  
         
          console.log("Form is valid");
          
      }
          
  
        }
        dispatch(clearCart());
        dispatch(setCartMessageOn(true))

        setTimeout(() => {
          navigate('/');
        }, 2000);
        
    
    } 
    
    
    catch (error) {
      console.log(error);
    }
  };




  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // validate first name
    if (!reg.customer_name.trim()) {
      errors.customer_name = "First name is required";
      isValid = false;
    }

   
    // validate email
    if (!reg.customer_email.trim()) {
      errors.customer_email = "Email is required";
      isValid = false;
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reg.customer_email.trim())
    ) {
      errors.customer_email = "Invalid email address";
      isValid = false;
    }



     // validate mobile
     if (!reg.customer_mobile.trim()) {
      errors.customer_mobile = "Mobile Number is required";
      isValid = false;
    }
    else if(reg.customer_mobile.length < 10){
      errors.customer_mobile = "Mobile Number must be at least 10 digits";
      isValid = false;

    }


      // validate address name
      if (!reg.customer_address.trim()) {
        errors.customer_address = "Customer address is required";
        isValid = false;
      }
   

       // validate pincode name
       if (!reg.customer_pincode.trim()) {
        errors.customer_pincode = "Customer pincode is required";
        isValid = false;
      }

       // validate first name
       if (!reg.customer_dist.trim()) {
        errors.customer_dist = "Customer dist is required";
        isValid = false;
      }


      if (!reg.customer_state.trim()) {
        errors.customer_state = "Customer state is required";
        isValid = false;
      }

      if (!reg.remarks.trim()) {
        errors.remarks = "Remarks is required";
        isValid = false;
      }
   
      
    
    





    // validate password
    if (!reg.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (reg.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }




    // validate confirm password
    if (!reg.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm password is required";
      isValid = false;
    } else if (reg.confirmPassword !== reg.password) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };


  





  return (
    <div>
      <div className='payment'>
        <Row className='mx-2  p-0' >
        <Form className='text-start ' disabled={()=>(!validateForm())} style={{display:"contents"}}>
          <Col className='text-start p-2' xs={12} md={12} sm={12} lg={4} >
            <h4 className='fw-bold mb-4'>{t("Shipping Address")}</h4>



            
              <FloatingLabel
                controlId="floatingInput"
                label={t("Customer Name")}
                className="mb-3  required" >

                <Form.Control type="text"
                  id="customer_name"
                  onChange={handle}
                  name="customer_name"
                  placeholder={t("Customer Name")} />
                  {formErrors.customer_name && <div>{formErrors.customer_name}</div>}
              </FloatingLabel>


              <FloatingLabel
                controlId="floatingInput"
                label={t("Email Address")}
                className="mb-3  required"
              >
                <Form.Control type="email"
                  id="customer_email"
                  onChange={handle}
                  name="customer_email"
                  placeholder={t("name@example.com")} />
                   {formErrors.customer_email && <div>{formErrors.customer_email}</div>}
              </FloatingLabel>


              <FloatingLabel
                controlId="floatingInput"
                label={t("Mobile number")}
                className="mb-3  required"
              >
                <Form.Control type="number"
                  id="customer_mobile"
                  onChange={handle}
                  name="customer_mobile"
                  placeholder={t("Mobile number")} />
                   {formErrors.customer_mobile && <div>{formErrors.customer_mobile}</div>}
              </FloatingLabel>


              <FloatingLabel
                controlId="floatingInput"
                label={t("Place / Area")}
                className="mb-3  required"
              >
                <Form.Control type="text"
                  id="customer_pincode"
                  onChange={handle}
                  name="customer_pincode"
                  placeholder={t("Place / Area")} />
                   {formErrors.customer_pincode && <div>{formErrors.customer_pincode}</div>}
              </FloatingLabel>





              <Form.Group controlId="exampleForm.SelectCustom">

                <Form.Select className="mb-3  required">
                  <option>{t("Select Country")}</option>
                  <option>{t("KUWAIT")}</option>
                  <option>{t("SAUDI ARABIA")}</option>
                  <option>{t("QATAR")}</option>
                  <option>{t("OMAN")}</option>
                  <option>{t("PHILIPPINES")}</option>
                  <option>{t("UAE")}</option>
                </Form.Select>
              </Form.Group>


              <FloatingLabel
                controlId="floatingTextarea2"
                label={t("Remarks")}>
                <Form.Control
                  as="textarea"
                  id="remarks"
                  onChange={handle}
                  name="remarks"
                  placeholder={t("Remarks")}
                  className="mb-3  required"
                  style={{ height: '100px' }}
                />
                  {formErrors.remarks && <div>{formErrors.remark}</div>}
              </FloatingLabel>
          

          </Col>




          <Col className='text-start p-2' xs={12} md={12} sm={12} lg={3}>
            <h4 className='fw-bold mb-4'>{t("Payment Method")}</h4>
            <Form className='text-start border border p-3'>

              <Form.Check type="radio" name="delivery" label={t("Cash on Delivery")} checked />
              <Form.Check type="radio" name="delivery" label={t("Pay on Delivery ( Pay cash or KNET, or credit card right at your doorstep! )")} />
              <h4 className='fw-bold my-3'>{t("Checkout Options")}</h4>
              <Form.Check

                type="checkbox"
                checked={secondchecked}
                onChange={handleChangesecond}

                label={t("Guest Checkout")} />
              <Form.Check type="checkbox"


                checked={checked}
                onChange={handleChange}
                label={t("Create an account for later use")} />
              {checked && <div>
                <Form>
                  <FloatingLabel
                    controlId="floatingInput"
                    label={t("Password")}
                    className="mb-3  required" >
                    <Form.Control type="password"

                      id="password"
                      onChange={handle}
                      name="password"
                      placeholder={t("Password")} />
                      {formErrors.password && <div>{formErrors.password}</div>}
                  </FloatingLabel>


                  <FloatingLabel
                    controlId="floatingInput"
                    label={t("Confirm Password")}
                    className="mb-3  required" >
                    <Form.Control type="password"

                      id="password"
                      onChange={handle}
                      name="password"
                      placeholder={t("Confirm Password")} />
 {formErrors.password && <div>{formErrors.password}</div>}
                  </FloatingLabel>
                </Form>

              </div>}
              <Link to="/">
                <Button style={{ background: "#f5831a", borderColor: "#f5831a" }} className="border-0 me-2 mt-2 " variant="primary" type="submit">
                  {t("Continue Shopping")}
                </Button></Link>
              <Button className="border-0 bg-dark me-2 mt-2 "  onClick={completeshopping} variant="primary" type="submit" >
                {t("Complete Shopping")}
              </Button>
              {isSubmitted && <p>{t("Thank you for submitting the form!")}</p>}
            </Form>
          
          </Col>
          </Form>
          {/* <Col className='text-start' xs={12} md={12} sm={12} lg={1}>
          </Col> */}


          <Col className='text-start p-2' xs={12} md={12} sm={12} lg={5}>
            <h4 className='fw-bold mb-4'>{t("Order Summary")}</h4>
            <Table responsive>
              <thead>
                <tr>
                  <th>{t("Image")}</th>
                  <th>{t("Name")}</th>
                  <th>{t("Quantity")}</th>
                  <th>{t("Amount")}</th>
                </tr>
              </thead>
              <tbody>

                {
                  carts.map((value, index) => {
                    return (
                      <>
                        <tr>
                          <td ><img style={{ width: 50 }} src={thumbimgURL + value?.product_image} ></img></td>
                          <td>{value?.product_name}</td>
                          <td>{value?.product_qty}</td>
                          <td>{value?.totalPrice.toFixed(3)} {country}</td></tr></>

                    )



                  })


                }





              </tbody>
            </Table>
            <h5 className='text-start'>{t("Shipping Charge")}:{t("Nil")}</h5>
            <h5 className='text-start'>{t("Total Price")}:{total.toFixed(2)} {country}</h5>
          </Col>
        </Row>
      </div>
      {cartmessage && <Cartmessage />}
    </div>
  )
}

export default Payment