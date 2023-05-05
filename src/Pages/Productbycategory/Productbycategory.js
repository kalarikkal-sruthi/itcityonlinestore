import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
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
import { ScaleLoader } from "react-spinners";
import { setSelectedData,setSelectedBrands,setSelectedclear } from '../../Redux/brandsSlice';

const itemsPerPage = 20;
function Productbycategory() {
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { category_id } = useParams()
  const country = useSelector(getCountry);


  const selectedBrands = useSelector((state) => state.brands.selectedBrands);
  const selectedData = useSelector((state) => state.brands.selectedData);
  console.log(selectedData);


  useEffect(() => {
    dispatch(fetchAsyncinnerproducts({ category: category_id, cur: country }))
  }, [dispatch, category_id, country]);


  const innercategories = useSelector(getinnerProducts);

  useEffect(() => {
    dispatch(setSelectedData(innercategories.filter(product => selectedBrands.includes(parseInt(product.product_brand)))));
    
  }, [selectedBrands]);


  const loading = useSelector((state) => state.categoriesnav.loading);
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
      padding: '250px 0px 0px 0px',
      // alignItems: 'center',
      // height: '1200vh',
    },
  };
  return (
    <div>
      <Container fluid>

        <Row >
          <Col xs={12} sm={12} md={12} lg={3} className='productcat' >
            <Navbar expand="lg" style={{ Padding: '0px'}}>
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
          <Col xs={12} sm={12} md={12} lg={9} className='d-flex flex-wrap justify-content-center'>
          {loading ?
                (
                  <div style={styles.container}>
                    <ScaleLoader
                      color="#f5831a"
                      loading={true}

                    />
                  </div>
                ):(
                  <>
                    {selectedData.length > 0  ? (
                      <div style={{ display: "flex", flexWrap: "wrap" }}  >
                        {selectedData.map((product, index) => {
                          return (
                            <Link style={{ textDecoration: "none", color: "black" }} to={`/product/${product.product_id}`} >
                              <div className='newdesign' style={{ width: '220px' }}>
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
                    ) :  filteredProducts.length > 0  ? (
                      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} >
                        {filteredProducts.slice(start, end).map((product, index) => {
                          return (
                            <Link style={{ textDecoration: "none", color: "black" }} to={`/product/${product.product_id}`} >
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
                    ):(

                      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} >
                      {innercategories.slice(start, end).map((product, index) => {
                        return (
                          <Link style={{ textDecoration: "none", color: "black" }} to={`/product/${product.product_id}`} >
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

                    )
                    
                    
                    
                    }
                   <div className="paginationclass">
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
