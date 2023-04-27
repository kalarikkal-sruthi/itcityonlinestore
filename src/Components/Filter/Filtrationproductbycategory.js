import {React,useEffect} from 'react'
import { fetchAsyncsubcategorybycategory,getsubcategory } from '../../Redux/filterSlice';
import { useParams,Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import Productlist from '../Productlist/Productlist';

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
    
   <p>{value.cat_name}<span></span></p>
 
   )
      
    })
   
    }
     </div>
   
             
          
  )
}

export default Filtrationproductbycategory