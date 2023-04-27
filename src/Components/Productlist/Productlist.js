import React from 'react'
import Product from '../Product/Product'
import { Row, Col} from 'react-bootstrap';

function Productlist({products}) {
 return (
    <Row>
  
        { products.slice(0,45).map((value,index)=>{
             return(
              <Col lg={3} xs={6} sm={4} className='inner' >
                <Product key={value.product_id}  product={{...value}}/>
              </Col>         
             )
            })
        }
 </Row>
  )
}

export default Productlist