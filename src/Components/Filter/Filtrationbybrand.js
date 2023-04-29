import React from 'react'
import { fetchAsyncgetfindAllBrandDetails,getbrands } from '../../Redux/filterSlice';
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getinnerProducts } from '../../Redux/filterSlice';
function Filtrationbybrand() {

  const [selectedBrands, setSelectedBrands] = useState([]);
    const dispatch=useDispatch()
    const { t, i18n } = useTranslation();
   
    useEffect(() => {
        dispatch(fetchAsyncgetfindAllBrandDetails())
    }, []);
    const brands = useSelector(getbrands);
    console.log(brands);

    const innercategories = useSelector(getinnerProducts);
    console.log('innercategories', innercategories);

    const filteredData = innercategories.filter((item,event) => {
     
      if (selectedBrands.length === 0) {
        return true; // show all items if no brands are selected
      }
      return selectedBrands.includes(item.product_brand);
    });
    console.log(filteredData);
  return (
    <div className='list-class'>  
    {
       brands.map((value,index)=>{
return( 
 
  <>
    <div className='checkboxes'>
    <label key={value.brands_id}>
        <input
          type="checkbox"
          value={value.brands_id}
          checked={selectedBrands.includes(value.brands_id)}
          
          onChange={(event) => {

            if (event.target.checked) {
              setSelectedBrands([...selectedBrands,event.target.brands_id]);
            } else {
              setSelectedBrands(selectedBrands.filter((b) => b.brands_id !==  b.product_brand));
            }
          }}
        />
        {value.brands_name}
      </label>
      {/* <input type="checkbox" />
      <label for="vehicle1" style={{ marginBottom: '2px', marginLeft: "4px" }}>{value.brands_name}</label> */}
    </div>
  </>
 
   )
      
    })
   
    }
     </div>
  )
}

export default Filtrationbybrand