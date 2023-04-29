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
function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className='footer-icons mt-5'>
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

    </div>
  )
}

export default Footer