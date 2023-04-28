import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsychsearch, clearSearch, getSearchResults } from '../../Redux/searchSlice'
import { thumbimgURL } from '../../Utils/Api/Imageapi'
import { Row, Col,Button} from 'react-bootstrap';

import { useTranslation } from 'react-i18next';
import Productbycategory from '../Productbycategory/Productbycategory';
import { Link } from 'react-router-dom';
import { getCountry } from '../../Redux/countrySlice'

function Searchpage() {
  const { t, i18n } = useTranslation();
  const country=useSelector(getCountry);
  const dispatch = useDispatch();
  const { searchterm } = useParams();
  useEffect(() => {
    // dispatch(clearSearch());
    dispatch(fetchAsychsearch({ searchterm: searchterm, cur: country }));
  }, [searchterm,country]);


  const searchProducts = useSelector(getSearchResults);
console.log(searchProducts);
  
  if (searchProducts.length === 0) {
    return (
      <div className='container' style={{
        minHeight: "70vh"
      }}>
        <div className='fw-5 text-danger py-5'>
          <h3>{t("No Products found")}</h3>
        </div>
      </div>
    )
  }

  return (
    <main>
      <div className='search-content bg-whitesmoke'>
        <div className='container'>
          <div className='py-5'>
            <div className='title-md'>
              <h3>{t("Search results")}:</h3>
            </div>
            <Row>
        {searchProducts.map((product,index)=>{
             return(
           
          <Col xs={12} sm={6} md={4} lg={3} >
          <Link  style={{ textDecoration: "none",color:"black" }}  to={`/product/${product.product_id}`} >
  <div className='newdesign'>
    <img src={thumbimgURL + product?.product_image} alt="" />
    <p style={{ fontWeight: ' 600', fontSize: '14px', marginBottom: '0.5rem' }}>{product?.product_name}</p>
    <p style={{ fontSize: '18px', marginBottom: "4px", color: "#f5831a" }} className="  ">{product?.product_price_offer.toFixed(3)}{country}</p>
    <div className="font-body"><span style={{ MarginBottom: '4px', textDecoration: "line-through", fontSize: '14px' }} className=" ">{product?.product_price.toFixed(3)}{country}</span>
      <span className="" style={{ background: '#f5831a', padding: '3px 3px', fontSize: "12px", color: "white" }}>27%</span></div>
    <Button className='w-100 newbtn'>{t("Add To Cart")}</Button>
  </div>
</Link> </Col>         
      
      )
      })
  }

                  {/* <Productlist products={innercategories}  /> */}
                 
           
 </Row>
          
         
          </div>
        </div>
      </div>
    </main>
  )
}

export default Searchpage