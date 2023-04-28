import {React,useEffect} from 'react'
import { fetchAsyncsubcategorybycategory,getsubcategory } from '../../Redux/filterSlice';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Filtrationproductbycategory({category}) {
    const dispatch=useDispatch()
  
    console.log(category);
    useEffect(() => {
        dispatch(fetchAsyncsubcategorybycategory(category))
    }, [category]);
    const subcategories = useSelector(getsubcategory);
    console.log(subcategories);
  return (
    <div className='list-class'>

       
    {
       
    subcategories.map((value,index)=>{
return( 
  <Link to={`/category/${value.cat_id}`} className='text-dark text-decoration-none' key={index}>
   <p>{value.cat_name}<span></span></p></Link>
 
   )
      
    })
   
    }
     </div>
   
             
          
  )
}

export default Filtrationproductbycategory