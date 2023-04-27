import React from 'react'
import { fetchAsyncgetfindAllBrandDetails,getbrands } from '../../Redux/filterSlice';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

function Filtrationbybrand() {
    const dispatch=useDispatch()
  
   
    useEffect(() => {
        dispatch(fetchAsyncgetfindAllBrandDetails())
    }, []);
    const brands = useSelector(getbrands);
    console.log(brands);
  return (
    <div className='list-class'>  
    {
       brands.map((value,index)=>{
return( 
 
  <>
    <div className='checkboxes'>
      <input type="checkbox" />
      <label for="vehicle1" style={{ marginBottom: '2px', marginLeft: "4px" }}>{value.brands_name}</label>
    </div>
  </>
 
   )
      
    })
   
    }
     </div>
  )
}

export default Filtrationbybrand