import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncproducts} from '../../Redux/productSlice';
import { getProductitem } from '../../Redux/productSlice';
import { thumbimgURL } from '../../Utils/Api/Imageapi';
import { addToCart, getCartMessageStatus, setCartMessageOff, setCartMessageOn } from '../../Redux/cartSlice';
import { Container, Row, Col,Button } from 'react-bootstrap';
import Cartmessage from '../../Components/Cartmessage/Cartmessage';
import './Productsinglepage.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { getCountry } from '../../Redux/countrySlice';
import { useTranslation } from 'react-i18next';

function Productsinglepage() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { product_id } = useParams()
  const [product_qty, setProduct_qty] = useState(1);
  const productdata = useSelector(getProductitem);
  const cartmessage = useSelector(getCartMessageStatus);

  const country=useSelector(getCountry);
  useEffect(() => {
    dispatch(fetchAsyncproducts({ product: product_id, cur: country }));
    if (cartmessage) {
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
  }, [dispatch, product_id,cartmessage,country])


  const increaseQty = () => {
    setProduct_qty((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > productdata?.stock) tempQty = productdata?.stock;
      return tempQty;
    })
  }
  const decreaseQty = () => {
    setProduct_qty((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    })
  }
  const addToCartHandler = (productdata) => {
    let totalPrice = product_qty * productdata?.product_price_offer;
    dispatch(addToCart({ ...productdata, product_qty: product_qty, totalPrice: totalPrice }));
    dispatch(setCartMessageOn(true));
  }

  return (
    <div>
      {productdata?.map((value, index) => {
        return (
          <>
            <Container>
              <Row className="my-4 mb-5">
                <Col xs={12} md={6} sm={6} lg={6}><img alt="itcity" src={thumbimgURL + value.product_image}></img></Col>
               
                <Col xs={12} md={6} sm={6} lg={6} className="productsingle">
                  <h4>{value.product_name}</h4>
                  <h5>{value.product_price_offer.toFixed(3)} {country}</h5>
                  <h5 style={{ MarginBottom: '4px', textDecoration: "line-through", fontSize: '14px' }}>{value.product_price.toFixed(3)} {country}</h5>
                  <div className='qty-change d-flex align-center '>
                    <h5>{t("Quantity")}:</h5>
                    <button type="button" className='qty qty-decrease flex align-center justify-center' onClick={decreaseQty} >
                      <RemoveOutlinedIcon variant="outlined" />
                    </button>
                    <div className=" qty-value flex align-center justify-center px-2 fw-bold">{product_qty} </div>
                    <button onClick={increaseQty} type="button" className='qty qty-increase flex align-center justify-center'  >
                      <AddOutlinedIcon variant="outlined" />
                    </button>
                  </div>
                  <div className='text-start py-4'>
                    <Button className=' bg-dark border-0' onClick={() => { addToCartHandler(value) }} ><ShoppingCartOutlinedIcon />{t("Add To Cart")}</Button>
                  </div>

                </Col>
              </Row>

            </Container>

          </>
        )
      })

      }


      {cartmessage && <Cartmessage />}

    </div>
  )
}

export default Productsinglepage
