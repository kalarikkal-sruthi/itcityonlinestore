import React, { useState,useEffect } from 'react'
import './Homecategorybyproduct.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { fetchAsynccamera } from '../../Redux/homeSlice';
import { getHomecamera } from '../../Redux/homeSlice';
import { useDispatch,useSelector } from 'react-redux';
import { thumbimgURL } from '../../Utils/Api/Imageapi';
import { getCountry } from '../../Redux/countrySlice';
import { useTranslation } from 'react-i18next';

function Categorycameras() {
  const { t, i18n } = useTranslation();
  const dispatch=useDispatch();
  const country=useSelector(getCountry)
    console.log("country",country);

  useEffect(() => {
   dispatch(fetchAsynccamera(country))
  }, [country])
  const homecamera=useSelector(getHomecamera)
  console.log('getHomecamera',getHomecamera);
  return (
    <div>
    <div className='bestdeals'>
        <div className='bestdeals-head'>
            <h3 className='pe-5'>
{t("Cameras & Drones")}
</h3>
        </div>
        <div className='bestdeals-view'>
          <Link to={`/category/${139}`}><Button >{t("View All")}</Button></Link>
        </div>
    </div>
    <div className='content'>
   
          { homecamera.map((value,index)=>{
          return(
            <Link style={{ textDecoration: "none",color:"black" }} to={`/product/${value.product_id}`} >
            <div className='newdesign' >
                  <img src={thumbimgURL+value.product_image} alt="itcity" ></img>
                  <p style={{ fontWeight: ' 600', fontSize: '14px', marginBottom: '0.5rem', fontWeight: '600' }}>{value.product_name}</p>
                  <p style={{ fontSize: '18px', marginBottom: "4px", color: "#f5831a" }} className="  ">{value.product_price_offer.toFixed(3)}{country}</p>
                  <div className="font-body"><span style={{ MarginBottom: '4px', textDecoration: "line-through", fontSize: '14px' }} className=" ">{value.product_price.toFixed(3)}{country}</span>  <span className="" style={{ background: '#f5831a', padding: '3px 3px', fontSize: "12px", color: "white" }}>27%</span></div>
                  <Button className='w-100 newbtn' ><ShoppingCartOutlinedIcon />{t("Add To Cart")}</Button>
              </div>
              </Link>
          )
        })}       
   
    </div>
    <div className='bannerimage'>
                <img src="/homeslider/camerlap.jpg" alt=""></img>
            </div>
            <div className='bannerimagemobile'>
                <img src="/homeslider/cameramobile.jpg" alt=""></img>
            </div>
</div>
  )
}

export default Categorycameras
