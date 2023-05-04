import { useEffect} from 'react';
import React from 'react'
import { fetchAsyncinnerproducts } from '../../Redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { setMaxPrice, setMinPrice } from '../../Redux/priceFilter';

function Pricefiltration() {

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { category } = useParams()


  useEffect(() => {
    dispatch(fetchAsyncinnerproducts(category))
  }, [category]);
 

  const { minPrice, maxPrice } = useSelector((state) => state.priceFilter);

  const handleMinPriceChange = (event) => {
    dispatch(setMinPrice(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    dispatch(setMaxPrice(event.target.value));
  };


  return (
    <div>

      <div>
        <label>{t("Min Price")} : </label>
        <input type="number" value={minPrice} onChange={handleMinPriceChange} />
        <br></br>
        <br></br>
        <label>{t("Max Price")} : </label>
        <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
      </div>

    </div>

  )
}

export default Pricefiltration