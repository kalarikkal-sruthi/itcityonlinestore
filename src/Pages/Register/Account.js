import { useEffect } from 'react'
import React from 'react'
import { getUser } from '../../Redux/userSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import { selectToken } from '../../Redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../Redux/authSlice';
import { useTranslation } from 'react-i18next';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import Editprofile from './Editprofile';
import Myorder from './Myorder';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Account() {
  const { t, i18n } = useTranslation();
  const navigate=useNavigate()
  const dispatch=useDispatch()
    const userToken = useSelector(selectToken);
    console.log(userToken);
    useEffect(() => {
      dispatch(loginSuccess(userToken));
    }, []);
    
    
    const onLogOut=()=>{
    localStorage.removeItem('token');
    navigate('/')}



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
    
    // const keys = Object.keys(userUser);
    // const val = Object.entries(userUser).map((element)=> element[1].customer_name)
  
  return (
    <div>
         <button
            onClick={onLogOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            {t("Log Out")}
          </button>

<Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Edit Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">My Order</Nav.Link>
            </Nav.Item>
          
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>My Profile</th>
          
        </tr>
      </thead>
      <tbody>
        <tr><td>Name:</td></tr>
        <tr><td>Mobile Number:</td></tr>
        <tr><td>Place/Area:</td></tr>
        <tr><td>Block Number:</td></tr>
        <tr><td>House/Building Number:</td></tr>
        <tr><td>Street/Avenue Number:</td></tr>
        <tr><td>Place/Area:</td></tr>
      
        
       
         
      </tbody>
    </Table>    
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            

<Editprofile/>

            </Tab.Pane>
            <Tab.Pane eventKey="third">
         <Myorder />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </Container>
    </div>
  )
}

export default Account