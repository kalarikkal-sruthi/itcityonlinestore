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
import '../../Components/Navbar/Navbar.css'
import { getCountry } from '../../Redux/countrySlice';
import { thumbimgURL } from '../../Utils/Api/Imageapi';
import { useTranslation } from 'react-i18next';
import priceFilter from '../../Redux/priceFilter';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {ScaleLoader} from "react-spinners";
const itemsPerPage = 32;
function Productbycategory(products) {
    const { t, i18n } = useTranslation();

    const [currentPage, setCurrentPage] = useState(1);
    

    const dispatch = useDispatch();
    const { category_id } = useParams()
    console.log(category_id);


    const country=useSelector(getCountry);
    useEffect(() => {
        dispatch(fetchAsyncinnerproducts({ category: category_id, cur: country }))
    }, [dispatch,category_id,country]);

   


    const innercategories = useSelector(getinnerProducts);
    const loading = useSelector((state) => state.categoriesnav.loading);
    console.log('loading',loading);
    console.log('innercategories', innercategories);

    const maxPage = Math.ceil(innercategories.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    const { minPrice, maxPrice } = useSelector((state) => state.priceFilter);
    const filteredProducts = innercategories.filter(
        (product) => product.product_price_offer >= minPrice && product.product_price_offer <= maxPrice
      );
      console.log(filteredProducts);

      const handleNextPage = () => {
        if (currentPage < maxPage) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const handlePrevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };

// pagination
      const styles = {
        container: {
          display: 'flex',
          justifyContent: 'center',
          padding:'250px 0px 0px 0px', 
          // alignItems: 'center',
          height: '450vh',
        },
      };
    return (
        <div>
            <Container fluid>
                <Row >
                    <Col xs={12} sm={12} md={12} lg={3} >
                        <Navbar expand="lg" style={{ Padding: '0px',height:'2500px;' }}>
                            <Container fluid >
                                <Navbar.Brand className='brand-logo' chref="#" >
                                    <div className='brand-and-toggler'>
                                        {/* <Navbar.Toggle className='border-0' aria-controls="navbarScroll" /> */}
                               
                                   
                                        <div className="" onClick={ToggleSidebar} >
                                        <TuneOutlinedIcon sx={{ background: 'none', color: 'black', border: 'none' }} variant="outlined" />{t("Show Filter")}
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
                                        // style={{ maxHeight: '100px' }}
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
                    
                               
                    <Col xs={12} sm={12} md={12} lg={9}  className='d-flex flex-wrap justify-content-center'>
                    
                  
                    {

loading ?
(
  <div style={styles.container}>
{/* PropagateLoader */}
    <ScaleLoader 
color="#f5831a"
loading={true}

/>
  
 
</div>

)
:(
  <>      
                    
                    {filteredProducts.length > 0 ? (
        <div style={{display:"flex",flexWrap:"wrap"}}  >
           {filteredProducts.map((product,index)=>{
             return(
             
                    
        <Link style={{ textDecoration: "none" }} to={`/product/${product.product_id}`} >
        <div className='newdesign' style={{width:'220px'}}>
          <img src={thumbimgURL + product?.product_image} alt="" />
          <p style={{ fontWeight: ' 600', fontSize: '14px', marginBottom: '0.5rem' }}>{product?.product_name}</p>
          <p style={{ fontSize: '18px', marginBottom: "4px", color: "#f5831a" }} className="  ">{product?.product_price_offer.toFixed(3)}{country}</p>
          <div className="font-body"><span style={{ MarginBottom: '4px', textDecoration: "line-through", fontSize: '14px' }} className=" ">{product?.product_price.toFixed(3)}{country}</span>  <span className="" style={{ background: '#f5831a', padding: '3px 3px', fontSize: "12px", color: "white" }}>27%</span></div>
          <Button className='w-100 newbtn'>{t("Add To Cart")}</Button>
        </div>
      </Link>       
            
            )
            })
        }
        </div>
      ) : (
        <div  style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}} >
            { innercategories.slice(start, end).map((product,index)=>{
             return(
           
                    
        <Link style={{ textDecoration: "none",color:"black" }} to={`/product/${product.product_id}`} >
        <div className='newdesign innerproduct'>
          <img src={thumbimgURL + product?.product_image} alt="" />
          <p style={{ fontWeight: ' 600', fontSize: '14px', marginBottom: '0.5rem' }}>{product?.product_name}</p>
          <p style={{ fontSize: '18px', marginBottom: "4px", color: "#f5831a" }} className="  ">{product?.product_price_offer.toFixed(3)}{country}</p>
          <div className="font-body"><span style={{ MarginBottom: '4px', textDecoration: "line-through", fontSize: '14px' }} className=" ">{product?.product_price.toFixed(3)}{country}</span>  <span className="" style={{ background: '#f5831a', padding: '3px 3px', fontSize: "12px", color: "white" }}>27%</span></div>
          <Button className='w-100 newbtn'>{t("Add To Cart")}</Button>
        </div>
      </Link>    
            
            )
            })
        }
        </div>
      )}





{/* 
                    { innercategories.slice(0,50).map((product,index)=>{
             return(
                <Col xs={6} sm={12} md={4} lg={3} >
                    
                <Link style={{ textDecoration: "none" }} to={`/product/${product.product_id}`} >
        <div className='newdesign'>
          <img src={thumbimgURL + product?.product_image} alt="" />
          <p style={{ fontWeight: ' 600', fontSize: '14px', marginBottom: '0.5rem' }}>{product?.product_name}</p>
          <p style={{ fontSize: '18px', marginBottom: "4px", color: "#f5831a" }} className="  ">{product?.product_price_offer.toFixed(3)}{country}</p>
          <div className="font-body"><span style={{ MarginBottom: '4px', textDecoration: "line-through", fontSize: '14px' }} className=" ">{product?.product_price.toFixed(3)}{country}</span>  <span className="" style={{ background: '#f5831a', padding: '3px 3px', fontSize: "12px", color: "white" }}>27%</span></div>
          <Button className='w-100 newbtn'>{t("Add To Cart")}</Button>
        </div>
      </Link> </Col>         
            
            )
            })
        } */}

                        {/* <Productlist products={innercategories}  /> */}
                        <div className="paginationclass ">
        <button onClick={handlePrevPage}><KeyboardDoubleArrowLeftIcon /> Previous</button>
        <button onClick={handleNextPage}>Next <KeyboardDoubleArrowRightIcon /></button>
      </div>
      </>    
                )
              }
                </Col>




                 
             
                  
                </Row>
            </Container>
        </div>
    )
}

export default Productbycategory
