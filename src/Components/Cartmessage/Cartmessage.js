import React from 'react'
import './Cartmessage.css'
import  correct from '../../assets/correct.png'
import { useTranslation } from 'react-i18next';
function Cartmessage() {
  const { t, i18n } = useTranslation();
  return (
    <div className='cart-message'>
       <div className='cart-message-icon'>
       <img src={correct} />
      </div>
        <h6 className='text-white fs-14 fw-5'>{t("An item has been added to your shopping cart")}</h6>
    </div>
  )
}

export default Cartmessage
