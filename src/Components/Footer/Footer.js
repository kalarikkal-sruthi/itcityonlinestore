import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './Footer.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row,Col } from 'react-bootstrap';
function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className='footer-icons mt-5 mobilediv'>
        <Nav className="footer-icons-link"
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Link to="/">
              <HomeOutlinedIcon variant="Outlined" sx={{ fontSize: '20px' }} />
              <h6>{t("Home")}</h6>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/search" eventKey="link-1">

              <SearchOutlinedIcon variant="Outlined" />
              <h6>{t("Search")}</h6>
            </Link>

          </Nav.Item>
          <Nav.Item>
            <Link to="/cat-footer">

              <AppsOutlinedIcon variant="Outlined" />
              <h6>{t("Categories")}</h6>

            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/cart">

              <ShoppingCartOutlinedIcon variant="Outlined" />
              <h6>{t("Cart")}</h6>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/account">

            <Person2OutlinedIcon variant="outlined"  ></Person2OutlinedIcon>
              <h6>{t("Profile")}</h6>
            </Link>
          </Nav.Item>

        </Nav>



      </div>


      <div className='footer-div desktopview pt-3'>
    <Row>
        <Col lg={3} sm={3} md={3}>
            <ul>
            <img src="/homeslider/main-logo-footer.png" alt=""></img>
                <li>info@itcityonlinestore.com</li>
                <li>+965 90019287</li>
                <li>IT City online store
                 Habeeb al Munawar street
                 Maghatheer complex
                ezzanine floor. Farwaniah, Kuwait</li>
            </ul>
        </Col>
   

    <Col lg={3} sm={3} md={3}> 
        <div className="col">
            
            <ul>
            <h5>Information</h5>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms&Condition</li>
            </ul>
        </div>
    </Col>

    <Col lg={3} sm={3} md={3}> 
        
            <ul>
                <h5>Categories</h5>
                <li>Accessories</li>
                <li>Computers</li>
                <li>Mobiles</li>
                <li>Tablets</li>
                <li>Home Appliances</li>
                <li>Watches & Perfumes</li>
                <li>Travel Bags</li>
                <li>Personal Care</li>
                <li>Cameras & Drones </li>
                <li>Offer Zone</li>
                <li>Gaming</li>
            </ul>
        
    </Col>

<Col lg={3} sm={3} md={3}>
    <ul>
        <h5>Service</h5>
        <li>Wish List</li>
        <li>Shopping Cart</li>
        <li>Return Policy</li>
        <li>About Us</li>
    </ul>
</Col>
<hr></hr>
<div className='bottom-footer'>
<h6>© 2019 IT CITY ONLINE STORE </h6>

</div>

</Row>

</div>


    </div>
  )
}

export default Footer