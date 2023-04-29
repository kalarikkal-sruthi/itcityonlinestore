import React from 'react'
import './Categories.css'
import { useTranslation } from 'react-i18next';

function Categories() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className='category-main'>
        <div className='categories'>
          <div className='dd '>
            {/* <div className='cat'> */}
            <img src="/app_image/accessories.png" alt="itcity"></img>
            {/* </div>   */}
            <p className='fw-bold'>{t("Accessories")}</p>
          </div>
          <div className='dd'>
            <img src="/app_image/computers.png" alt="itcity"></img>
            <p className='fw-bold'>{t("Computers")}</p>
          </div>
          <div className='dd'>
            <img src="/app_image/mobile.png" alt="itcity"></img>
            <p className='fw-bold'>{t("Mobiles")}</p>
          </div>
          <div className='dd'>
            <img src="/app_image/tabe.png" alt="itcity"></img>
            <p className='fw-bold'>{t("Tablets")}</p></div>
          <div className='dd'>
            <img src="/app_image/home.png" alt="itcity"></img>
            <p className='fw-bold'>{t("Home Appliances")}</p> </div>
          <div className='dd'>
            <img src="/app_image/watch.png" alt="itcity"></img>
            <p className='fw-bold'>{t("Watches & Perfumes")}</p> </div>
          <div className='dd'>
            <img src="/app_image/travel.png" alt="itcity"></img>
            <p className='fw-bold'>{t("Travel Bags")}</p> </div>
          <div className='dd'>
            <img src="/app_image/personal.png" alt="itcity"></img>
            <p className='fw-bold'>{t("Personal Care")}</p> </div>
          <div className='dd'>
            <img src="/app_image/camera.png" alt="itcity"></img>
            <p className='fw-bold'>{t("Cameras & Drones")}</p> </div>
          <div className='dd'>
            <img src="/app_image/offer.png" alt="itcity"></img>
            <p className='fw-bold'>{t("Offer Zone")}</p>
          </div>
        </div>
      </div>
      {/* <div className='bannerimage'>
        <img src="/homeslider/accessories.jpg" alt="itcity"></img>
      </div> */}
    </>
  )
}

export default Categories