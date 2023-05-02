import React, {useEffect } from 'react'
import './Homecategorybyproduct.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { fetchAsynchomeaccessories } from '../../Redux/homeSlice';
import { getHomeaccessories } from '../../Redux/homeSlice';
import { useDispatch,useSelector } from 'react-redux';
import { thumbimgURL } from '../../Utils/Api/Imageapi';
import { getCountry } from '../../Redux/countrySlice';
import { addToCart } from '../../Redux/cartSlice';
// import { getHomecat } from '../../Features/homeSlice';

import { useTranslation } from 'react-i18next';

function Categoryaccessories() {

    const { t, i18n } = useTranslation();
    const country=useSelector(getCountry)
    console.log("country",country);
    const dispatch=useDispatch();
    useEffect(() => {
     dispatch(fetchAsynchomeaccessories(country))
    }, [country])

    const homeaccessories=useSelector(getHomeaccessories)
    console.log('homeaccessories',homeaccessories);
    // const cat=useSelector(getHomecat)
    // console.log("cat",cat);
   
    // const [sliderRef, setSliderRef] = useState(null);
    // const sliderSettings = {
    //     arrows: false,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     margin: 10,
    //     infinite: false,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 6,
    //             },
    //         },
    //         {
    //             breakpoint: 800,
    //             settings: {
    //                 slidesToShow: 2,
    //             },
    //         },
    //     ],
    // };
    return (
     
        <div>
            <div className='bestdeals'>
                <div className='bestdeals-head'>
                    <h3 className='pe-5'>{t("Accessories")}</h3>
                </div>
                <div className='bestdeals-view'>
                  <Link to={`/category/${99}`}><Button >{t("View All")}</Button></Link>
                </div>
              
            </div>
            <div className='bannerimage'>
                <img src="/homeslider/accessories.jpg" alt=""></img>
            </div>
            <div className='bannerimagemobile'>
                <img src="/homeslider/accessoriesmobile.jpg" alt=""></img>
            </div>
            <div className='content'>
                {/* <Slider ref={setSliderRef} {...sliderSettings}> */}
                  {homeaccessories.map((value,index)=>{
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
                    
                {/* </Slider> */}
            </div>
           
        </div>
    )
}

export default Categoryaccessories
