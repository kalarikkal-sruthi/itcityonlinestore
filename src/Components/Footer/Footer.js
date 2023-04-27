import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './Footer.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
      <div className='footer-icons'>
        <Nav className="footer-icons-link"
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Link to="/">
              <HomeOutlinedIcon variant="Outlined" sx={{ fontSize: '20px' }} />
              <h6>Home</h6>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/search" eventKey="link-1">

              <SearchOutlinedIcon variant="Outlined" />
              <h6>Search</h6>
            </Link>

          </Nav.Item>
          <Nav.Item>
            <Link to="/categories">

              <AppsOutlinedIcon variant="Outlined" />
              <h6>Categories</h6>

            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/cartpage">

              <ShoppingCartOutlinedIcon variant="Outlined" />
              <h6>Cart</h6>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/profile">

              <HomeOutlinedIcon variant="Outlined" />
              <h6>Profile</h6>
            </Link>
          </Nav.Item>

        </Nav>



      </div>

    </div>
  )
}

export default Footer