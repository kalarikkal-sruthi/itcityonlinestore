import React, {  useEffect,useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import Filter from '../../Components/Filter/Filter';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import './Productbycategory.css'
import { Link } from 'react-router-dom';
import { fetchAsyncinnerproducts } from '../../Redux/filterSlice';
import { getinnerProducts } from '../../Redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Productlist from '../../Components/Productlist/Productlist';
import { setSidebarOn } from '../../Redux/sidebarSlice';
import '../../Components/Navbar/Navbar.css'
import { getCountry } from '../../Redux/countrySlice';
import { thumbimgURL } from '../../Utils/Api/Imageapi';


function Productbycategory(products) {
    const dispatch = useDispatch();
    const { category_id } = useParams()
    console.log(category_id);
    const country=useSelector(getCountry);
    useEffect(() => {
        dispatch(fetchAsyncinnerproducts({ category: category_id, cur: country }))
    }, [dispatch,category_id,country]);
    const innercategories = useSelector(getinnerProducts);
    console.log('innercategories', innercategories);

    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    return (
        <div>
            <Container fluid>
                <Row >
                    <Col xs={12} sm={12} md={12} lg={3} >
                        <Navbar expand="lg" style={{ Padding: '0px' }}>
                            <Container fluid >
                                <Navbar.Brand className='brand-logo' chref="#" >
                                    <div className='brand-and-toggler'>
                                        {/* <Navbar.Toggle className='border-0' aria-controls="navbarScroll" /> */}
                               
                                   
                                        <div className="" onClick={ToggleSidebar} >
                                        <TuneOutlinedIcon sx={{ background: 'none', color: 'black', border: 'none' }} variant="outlined" /> Show Filter
                                </div>     
                                       
                                        {/* <button type="button" className='sidebar-show-btn ' onClick={() => dispatch(setSidebarOn())}>
                                            
                                        </button> */}
                                    </div>
                                </Navbar.Brand>
                                <div className='center'>
                                </div>
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0 "
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll>
                                            
                                        <Filter />
                                    </Nav>
                                </Navbar.Collapse>
                                <div className='d-flex'>
                                    <div className='cart-btn'>
                                        <div className='cart-items-value'></div>
                                    </div>
                                    <Link to='/cartpage'>
                                    </Link>
                                </div>
                            </Container>
                        </Navbar>
                        <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                        <div className="sd-header">
                           
                            <div className="" onClick={ToggleSidebar}><i className="fa fa-times"></i> <CloseOutlinedIcon variant="outlined" sx={{ Color: '#f5831a' }} /></div>
                        </div>
                        <div className="sd-body">
                        <Filter />
                        </div>
                       </div>
                       <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
                    </Col>
                    
                    <Col xs={12} sm={12} md={12} lg={9}  className='d-flex flex-wrap'>
                    { innercategories.slice(0,45).map((product,index)=>{
             return(
                <Col xs={12} sm={12} md={12} lg={3} >
                <Link style={{ textDecoration: "none" }} to={`/product/${product.product_id}`} >
        <div className='newdesign'>
          <img src={thumbimgURL + product?.product_image} alt="" />
          <p style={{ fontWeight: ' 600', fontSize: '14px', marginBottom: '0.5rem' }}>{product?.product_name}</p>
          <p style={{ fontSize: '18px', marginBottom: "4px", color: "#f5831a" }} className="  ">{product?.product_price_offer.toFixed(3)}{country}</p>
          <div className="font-body"><span style={{ MarginBottom: '4px', textDecoration: "line-through", fontSize: '14px' }} className=" ">{product?.product_price.toFixed(3)}{country}</span>  <span className="" style={{ background: '#f5831a', padding: '3px 3px', fontSize: "12px", color: "white" }}>27%</span></div>
          <Button className='w-100 newbtn'>Add To Cart</Button>
        </div>
      </Link> </Col>         
            
            )
            })
        }

                        {/* <Productlist products={innercategories}  /> */}
                       
                  </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Productbycategory
