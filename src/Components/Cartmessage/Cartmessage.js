import React, { useEffect } from 'react'
import './Cartmessage.css'
import { useTranslation } from 'react-i18next';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { selectToken } from '../../Redux/userSlice';
import { loginSuccess } from '../../Redux/authSlice';
import { useSelector, useDispatch } from 'react-redux';

function Cartmessage() {

  const dispatch = useDispatch()
  const { t, i18n } = useTranslation();
  const myItem = JSON.parse(localStorage.getItem('cart')) || ''
  const objLength = Object.keys(myItem).length;
  const userToken = useSelector(selectToken);
  // useEffect(() => {
  //   dispatch(loginSuccess(userToken));
  // }, []);

  return (
    <div className='cart-message'>
      <div className='cart-message-icon'>
        <ThumbUpIcon sx={{
          color: "white",
          fontSize: "25px"
        }} />
      </div>
      {objLength === 0 ? (
        <h6 className='text-white fs-14 fw-5'>{t("Your Order has being placed successfully.Move on to shop more from ITCITY Online store.")}</h6>
      ) : (
        <h6 className='text-white fs-14 fw-5'>{t("An item has been added to your shopping cart")}</h6>
      )}
    </div>
  )
}

export default Cartmessage
