import React from 'react'
import { fetchAsyncgetfindAllBrandDetails,getbrands } from '../../Redux/filterSlice';
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getinnerProducts } from '../../Redux/filterSlice';
import Productbycategory from '../../Pages/Productbycategory/Productbycategory';
// import Productfilter from '../../Pages/Productbycategory/Productfilter';
function Filtrationbybrand() {

 
    const dispatch=useDispatch()
    const { t, i18n } = useTranslation();
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchAsyncgetfindAllBrandDetails())
    }, []);
    const brands = useSelector(getbrands);
    console.log(brands);
    const products=useSelector(getinnerProducts)

   
    const brandCheckboxes =  brands.map((brand, index) => (
      <>
      <label key={index}>
        <input type="checkbox" 
               checked={selectedBrands.includes(brand.brands_id)}
               onChange={() => handleBrandChange(brand.brands_id)}/> {brand.brands_name}
      
      </label>
    
      <br></br>
     </>
    ));

    const handleBrandChange = (brand) => {
      console.log((brand));
      if (selectedBrands.includes(brand)) {
        setSelectedBrands(selectedBrands.filter(selectedBrand => selectedBrand !== brand));
      } else {
        setSelectedBrands([...selectedBrands, brand]);
      }
    };

    useEffect(() => {
      setFilteredProducts(products.filter(product => selectedBrands.includes(parseInt(product.product_brand))));
    }, [selectedBrands]);


  console.log(filteredProducts);
  return (
    <>
    <div className='list-class'>  
     {brandCheckboxes}
    </div>
   
  {/* <Productfilter filteredProducts={filteredProducts}/> */}
    </>
  )
}

export default Filtrationbybrand