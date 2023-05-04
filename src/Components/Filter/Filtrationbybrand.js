import React from 'react'
import { fetchAsyncgetfindAllBrandDetails, getbrands } from '../../Redux/filterSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setSelectedBrands, setSelectedData } from '../../Redux/brandsSlice';
import { getinnerProducts } from '../../Redux/filterSlice';

function Filtrationbybrand() {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation();

  const selectedBrands = useSelector((state) => state.brands.selectedBrands);



  useEffect(() => {
    dispatch(fetchAsyncgetfindAllBrandDetails())
  }, []);
  const brands = useSelector(getbrands);



  // const brandCheckboxes = brands.map((brand, index) => (
  //   <>
  //     <label key={index}>
  //       <input type="checkbox"


  //         checked={selectedBrands.includes(brand.brands_id)}
  //         onChange={() => handleBrandSelect(brand.brands_id)} /> {brand.brands_name}

  //     </label>
  //     <br></br> </>
  // ));

  const handleBrandSelect = (brand) => {
    console.log((brand));
    if (selectedBrands.includes(brand)) {
      dispatch(setSelectedBrands(selectedBrands.filter(selectedBrand => selectedBrand !== brand)));
    } else {
      dispatch(setSelectedBrands([...selectedBrands, brand]));
    }
  };

  // const handleBrandSelect = (event) => {
  //   const brandName = event.target.value;
  //   if (event.target.checked) {
  //     dispatch(setSelectedBrands([...selectedBrands, brandName]));
  //   } else {
  //     dispatch(setSelectedBrands(selectedBrands.filter(name => name !== brandName)));
  //   }
  // };


  return (
    <div>

{
       brands.map((brand,index) => {
          return (


            <>
              <div className='checkboxes'>
              <label>
            <input
                 type="checkbox"
              // value={brand.brands_id}
              
              // name={brand.brands_id} 
              checked={selectedBrands.includes(brand.brands_id)}
              onChange={() => handleBrandSelect(brand.brands_id)}
      
            /> {brand.brands_name}
        


          </label><br></br>
              </div>
              
            </>


          )

        })

      }
      
    </div>
  )
}

export default Filtrationbybrand