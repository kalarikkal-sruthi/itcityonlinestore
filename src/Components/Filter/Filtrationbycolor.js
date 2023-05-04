import React from 'react'
import { fetchAsyncgetAllProductByColor, getcolors } from '../../Redux/filterSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Filtrationbycolor() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncgetAllProductByColor())
  }, []);
  const colors = useSelector(getcolors);

  return (
    <div>
      {
        colors.map((value, index) => {
          return (


            <>
              <div className='checkboxes'>
                <label>
                  <input
                    type="checkbox"

                  /> {value.attribute_value}
                </label>
        


              </div>
            </>


          )

        })

      }



    </div>
  )
}

export default Filtrationbycolor