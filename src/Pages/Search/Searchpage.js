import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsychsearch, clearSearch, getSearchResults } from '../../Redux/searchSlice'
import Product from '../../Components/Product/Product'
import { Row, Col} from 'react-bootstrap';



function Searchpage() {
  const dispatch = useDispatch();
  const { searchterm } = useParams();
  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchAsychsearch(searchterm));
  }, [searchterm]);


  const searchProducts = useSelector(getSearchResults);

  
  if (searchProducts.length === 0) {
    return (
      <div className='container' style={{
        minHeight: "70vh"
      }}>
        <div className='fw-5 text-danger py-5'>
          <h3>No Products found.</h3>
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
              <h3>Search results:</h3>
            </div>
            <Row>
        { searchProducts.map((value,index)=>{
             return(
              <Col lg={3} xs={6} sm={4} className='inner' >
                <Product key={value.product_id}  product={{...value}}/>
              </Col>         
             )
            })
        }
 </Row>
          
         
          </div>
        </div>
      </div>
    </main>
  )
}

export default Searchpage