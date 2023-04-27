import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { setSelected } from '../../Redux/countrySlice'

function Countryselection() {
    const [state,setState]=useState('KWD')
    const dispatch=useDispatch()
    const onselectedvalue=(event)=>{
        setState(event.target.value)
        dispatch(setSelected(event.target.value))
    }
    console.log(state);
  return (
    <div>

 <select onChange={onselectedvalue} >
        <option style={{ color: 'black' }}  value="KWD">KUWAIT</option>
        <option style={{ color: 'black' }}   value="SAR">SAUDI ARABIA</option>
        <option style={{ color: 'black' }}  value="QAR">QATAR</option>
        <option style={{ color: 'black' }}   value="BHD">BAHRAIN</option>
        <option style={{ color: 'black' }}  value="OMR">OMAN</option>
        <option style={{ color: 'black' }}  value="PHP">PHILIPPINES</option> 
        <option style={{ color: 'black' }}  value="AED">UAE</option>
 </select>


    </div>
  )
}

export default Countryselection