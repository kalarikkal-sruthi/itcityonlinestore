import {React,useEffect,useState} from 'react'
import { fetchAsyncsubcategorybycategory,getsubcategory } from '../../Redux/filterSlice';
import { useDispatch,useSelector } from 'react-redux';
import { getinnerProducts } from '../../Redux/filterSlice';
import { Link } from 'react-router-dom';


function Filtrationproductbycategory({category}) {


  
  const [filteredData, setFilteredData] = useState([]);



    const dispatch=useDispatch()
  
    console.log(category);
    useEffect(() => {
        dispatch(fetchAsyncsubcategorybycategory(category))
    }, [category]);
    const subcategories = useSelector(getsubcategory);
    console.log(subcategories);

   

 


  const innercategories = useSelector(getinnerProducts);
  console.log('innercategories', innercategories);

  const handleFilter = (category) => {
    // setFilterCategory(category);
    console.log(category);
    const newData = innercategories.filter((item) => item.cat_id    === category);
    setFilteredData(newData);
  };

  console.log(filteredData);

  return (
    <div className='list-class'>

       
    {
       
    subcategories.map((value,index)=>{
return( 
  
  <Link to={`/category/${value.cat_id}`} className='text-dark text-decoration-none' key={index}>
  {/* <button onClick={() => handleFilter(value.cat_id)}>{value.cat_name}</button> */}
  {value.cat_name}
   </Link>

 
   )
      
    })
   
    }
     </div>
   
             
          
  )
}

export default Filtrationproductbycategory