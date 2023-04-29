import React,{useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Banner.css';
import { imgURL } from '../../Utils/Api/Imageapi';
import { useDispatch,useSelector } from 'react-redux';
import { getHomeslider } from '../../Redux/homeSlice';
import { fetchAsynchome } from '../../Redux/homeSlice';




function Banner() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsynchome(getHomeslider))
  }, [])
  const homeslider = useSelector(getHomeslider)
  console.log("homeslider",homeslider);

    var settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
              },
            },
            
          ],
    };
    return (
        <>
            <div>
                <Slider {...settings}>
             
                                {/* <h3>
                                   <img src="/homeslider/accessories.jpg" alt="itcity" ></img>
                                </h3>
                                <h3>
                                   <img src="/homeslider/accessories.jpg" ></img>
                                </h3>
                                <h3>
                                   <img src="/homeslider/1663088379.jpg" ></img>
                                </h3> */}
              
                    {homeslider?.map((item,index) => {
                        return (
                          <div className='banner' key={index}>
                                <h3>
                                   <img src={imgURL + item.img_name} alt={item.img_id}></img>
                                </h3>
                            </div>
                        )
                    })}
                    </Slider>
            </div>

        </>
    )
}

export default Banner