import { useEffect,useState } from 'react';
import React from 'react'
import { fetchAsyncinnerproducts,getinnerProducts } from '../../Redux/filterSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function Pricefiltration() {

    const dispatch = useDispatch();
    // const [products, setProducts] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const { category } = useParams()
    console.log(category);
    useEffect(() => {
        dispatch(fetchAsyncinnerproducts(category))
    }, [category]);
    const innercategories = useSelector(getinnerProducts);
    console.log('innercategories', innercategories);
    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
      };
    
      const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
      };
      const filteredProducts = innercategories.filter(product => {
        const price = parseInt(product.product_price_offer);
        if (minPrice && maxPrice) {
          return price >= minPrice && price <= maxPrice;
        } else if (minPrice) {
          return price >= minPrice;
        } else if (maxPrice) {
          return price <= maxPrice;
        } else {
          return false;
        }
      });
      console.log('filteredProducts',filteredProducts);
  return (
    <div> <form>
    <label htmlFor="min-price">Min Price:</label>
    <input type="number" id="min-price" value={minPrice} onChange={handleMinPriceChange}   />

    <label htmlFor="max-price">Max Price:</label>
    <input type="number" id="max-price" value={maxPrice} onChange={handleMaxPriceChange}/>
  </form>
  
  
  <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <h2>{product.product_name}</h2>
            {/* <p>{product.description}</p>
            <p>{product.price}</p> */}
          </li>
        ))}
      </ul>
  </div>
  
  )
}

export default Pricefiltration