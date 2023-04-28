import React from 'react'

import { fetchAsyncgetAllProductByColor,getcolors} from '../../Redux/filterSlice';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setSelectedColors } from '../../Redux/priceFilter';

function Filtrationbycolor() {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncgetAllProductByColor())
    }, []);
    const colors = useSelector(getcolors);

    


    console.log(colors);
  return (
    <div>
    
    {
       
       colors.map((value,index)=>{
return( 
    

    <>
    <div className='checkboxes'>
    <label>
            <input
              type="checkbox"
             
            />
            {value.attribute_value}
          </label>
      {/* <input type="checkbox" />
      <label for="vehicle1" style={{ marginBottom: '2px', marginLeft: "4px" }}>{value.attribute_value}</label> */}

     
    </div>
  </>
   
 
   )
      
    })
   
    }



    </div>
  )
}

export default Filtrationbycolor