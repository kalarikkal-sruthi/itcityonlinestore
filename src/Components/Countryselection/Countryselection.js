import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { setSelected } from '../../Redux/countrySlice'
import { useTranslation } from 'react-i18next';

function Countryselection() {
    const [state,setState]=useState('KWD')
    const { t, i18n } = useTranslation();
    const dispatch=useDispatch()
    const onselectedvalue=(event)=>{
        setState(event.target.value)
        dispatch(setSelected(event.target.value))
    }
    console.log(state);
  return (
    <div>

 <select onChange={onselectedvalue} >
        <option style={{ color: 'black' }}  value="KWD">{t("KUWAIT")}</option>
        <option style={{ color: 'black' }}   value="SAR">{t("SAUDI ARABIA")}</option>
        <option style={{ color: 'black' }}  value="QAR">{t("QATAR")}</option>
        <option style={{ color: 'black' }}   value="BHD">{t("BAHRAIN")}</option>
        <option style={{ color: 'black' }}  value="OMR">{t("OMAN")}</option>
        <option style={{ color: 'black' }}  value="PHP">{t("PHILIPPINES")}</option> 
        <option style={{ color: 'black' }}  value="AED">{t("UAE")}</option>
 </select>


    </div>
  )
}

export default Countryselection