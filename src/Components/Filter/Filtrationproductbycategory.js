import { React, useEffect, useState } from 'react'
import { fetchAsyncsubcategorybycategory, getsubcategory } from '../../Redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getinnerProducts } from '../../Redux/filterSlice';
import { Link } from 'react-router-dom';

function Filtrationproductbycategory({ category }) {

  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchAsyncsubcategorybycategory(category))
  }, [category]);

  const subcategories = useSelector(getsubcategory);
 

  return (
    <div className='list-class'>


      {

        subcategories.map((value, index) => {
          return (
            <Link to={`/category/${value.cat_id}`} className='text-dark text-decoration-none' key={index}>
              {value.cat_name}
            </Link>
          )

        })

      }
    </div>



  )
}

export default Filtrationproductbycategory