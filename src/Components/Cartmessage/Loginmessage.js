import React,{useEffect} from 'react'
import './Cartmessage.css'

import { useTranslation } from 'react-i18next';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { selectToken } from '../../Redux/userSlice';
import { loginSuccess } from '../../Redux/authSlice';
import { useSelector,useDispatch } from 'react-redux';
function Loginmessage() {
  const dispatch =useDispatch()
  const { t, i18n } = useTranslation();
  const myItem =JSON.parse(localStorage.getItem('cart')) || ''
  const objLength = Object.keys(myItem).length;
  console.log('myItem',objLength);

 const userToken = useSelector(selectToken);
    console.log(userToken);
    useEffect(() => {
      dispatch(loginSuccess(userToken));
    }, []);

  return (
    <div className='cart-message'>
    <div className='cart-message-icon'>
  <ThumbUpIcon sx={{
   color:"white",
   fontSize:"25px"
  }}/>
   </div>
<h6 className='text-white fs-14 fw-5'>{t("Login Successfully Completed")}</h6>
 </div>
  )
}

export default Loginmessage
