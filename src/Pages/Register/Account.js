
import React from 'react'
import { clearUser, getUser } from '../../Redux/userSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import { selectToken } from '../../Redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';

import Myorder from './Myorder';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { clearCart } from '../../Redux/cartSlice';



function Account() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userToken = useSelector(selectToken);
  console.log(userToken);

  const Userdetails = useSelector(getUser)

  const userdata = Userdetails.user
 


  const onLogOut = () => {
    dispatch(clearUser())
    localStorage.removeItem('token');
    dispatch(clearCart())
    navigate('/')
    window.location.reload();
  }



  if (!userToken) {
    return (
      <div className='container my-5'>
        <div className='empty-cart  d-flex flex-row justify-content-center flex-column align-items-center'>
          {/* <img src={shopping_cart} alt="" /> */}
          <span className='empty-font fw-6 fs-15 text-gray'>{t("You Don’t have an account?.")}</span>
          <Link to="/login" className='shopping-btn bg-orange text-white fw-5'>{t("Feel Free To Create One")}</Link>
        </div>
      </div>
    )
  }


  return (
    <div>


      <Container className='account my-5'>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item >
                  <Nav.Link eventKey="first" style={{ backgroundColor: "f5831a" }}  >Profile</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
              <Nav.Link eventKey="second" style={{backgroundColor:"f5831a"}} >Edit Profile</Nav.Link>
            </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link eventKey="third" style={{ backgroundColor: "f5831a" }}>My Order</Nav.Link>
                </Nav.Item>

              </Nav>
            </Col>
            <Col sm={9} className='my-3'>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>My Profile</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Name:</td>

                        <td>{userdata.customer_name}</td>
                      </tr>
                      <tr><td>Mobile Number:</td></tr>
                      <tr><td>Place/Area:</td></tr>
                      <tr><td>Block Number:</td></tr>
                      <tr><td>House/Building Number:</td></tr>
                      <tr><td>Street/Avenue Number:</td></tr>
                      <tr><td>Place/Area:</td></tr>




                    </tbody>
                  </Table>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="second">
            

<Editprofile/>

            </Tab.Pane> */}
                <Tab.Pane eventKey="third">
                  <Myorder />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>


        <button
          onClick={onLogOut}
          className='guestmodal mb-5'
        >
          {t("Log Out")}
        </button>
      </Container>
    </div>
  )
}

export default Account