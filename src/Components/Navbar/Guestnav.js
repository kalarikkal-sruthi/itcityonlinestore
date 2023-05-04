import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { fetchAsyncategories } from '../../Redux/filterSlice';
import { getcategoriesNav } from '../../Redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarOn } from '../../Redux/sidebarSlice';

import { getAllCarts,getCartItemsCount } from '../../Redux/cartSlice';
import Language from '../Langhook/Language';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import Countryselection from '../Countryselection/Countryselection';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import { useTranslation } from 'react-i18next';
import Guestmodel from '../Loginmodel/Guestmodel';



function Guestnav() {
    const dispatch = useDispatch()
    const categories = useSelector(getcategoriesNav);

  
    const carts = useSelector(getAllCarts);
    const itemsCount = useSelector(getCartItemsCount);

   

    const [searchterm, setsearchTerm] = useState('')
    const myItem = JSON.parse(localStorage.getItem('cart')) || ''
    const objLength = Object.keys(myItem).length;

    const { t, i18n } = useTranslation();
    

    useEffect(() => {
        dispatch(fetchAsyncategories(getcategoriesNav));
    }, []);



    const handlesearchterm = (e) => {
        e.preventDefault()
        setsearchTerm(e.target.value)
        console.log(searchterm);
    }


    return (
        <>
            <div className='top'>

                <Navbar expand="lg" style={{ Padding: '0px' }}>
                    <Container fluid >
                        <Navbar.Brand className='brand-logo' chref="#" >
                            <div className='brand-and-toggler'>
                                {/* <Navbar.Toggle className='border-0' aria-controls="navbarScroll" /> */}
                                <button type="button" className='sidebar-show-btn ' onClick={() => dispatch(setSidebarOn())}>
                                    <MenuOutlinedIcon sx={{ background: 'none', color: 'white', border: 'none' }} variant="outlined" />
                                </button>
                            </div>

                        </Navbar.Brand>

                        <div className='center'>
                            <Link to="/"> <img src="/itcitylogo-white.png" alt=""></img></Link></div>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0 text-white"
                                style={{ maxHeight: '100px' }}
                                navbarScroll>
                                {
                                    categories.map((value, index) => {
                                        return (

                                            <Link to={`/category/${value.cat_id}`} className='text-white text-decoration-none me-1' key={index}>{value.cat_name}</Link>
                                        )
                                    })
                                }
                            </Nav>
                        </Navbar.Collapse>

                        <div className='d-flex'>
                            <div className='cart-btn'>

                                <Person2OutlinedIcon sx={{ color: '#fff', margin: '2px' }} variant="outlined"  ></Person2OutlinedIcon>

                                <div className='cart-items-value'></div>
                                <Guestmodel />
                            </div>


                            <div className='navbar-cart flex align-center'>
                                <Link to="/cart" className='cart-btn'>
                                    <ShoppingCartOutlinedIcon sx={{ color: '#fff', margin: '2px' }} variant="outlined" />
                                    {objLength ? (<div className='cart-items-value'>{objLength}</div>) :
                                        (<div className='cart-items-value'>0</div>)}

                                </Link>
                            </div>

                        </div>
                        {/* <div className=''></div>
           
            <Cartmodel/> */}


                    </Container>
                </Navbar>
                <Container>
                    <div className='search'>
                        <div className="searchBar">
                            <input id="searchQueryInput" type="text" placeholder={t("Search Products,Brands and More")} onChange={(e) => { handlesearchterm(e) }} />
                            <Link to={`/search/${searchterm}`} className='d-flex'>

                                <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">

                                    <SearchOutlinedIcon variant="outlined" sx={{ color: "black" }} />

                                </button>
                                <CenterFocusWeakIcon variant="outlined" sx={{ color: "black" }} />
                                <KeyboardVoiceOutlinedIcon variant="outlined" sx={{ color: "black" }} />
                            </Link>
                        </div>
                    </div>
                </Container>
                <div className='country-code'>
                    <div className='coutry'>
                        <p><Countryselection /></p>
                    </div>
                    <div className='coutry'>
                        <p>
                            <Language />
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Guestnav