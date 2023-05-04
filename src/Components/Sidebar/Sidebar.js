import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { setSidebarOff, getSidebarStatus } from '../../Redux/sidebarSlice';
import './Sidebar.css';
import { fetchAsyncategories } from '../../Redux/filterSlice';
import { getcategoriesNav } from '../../Redux/filterSlice';
import { Link } from 'react-router-dom';



function Sidebar() {

  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);
  const categories = useSelector(getcategoriesNav);

  useEffect(() => {
    dispatch(fetchAsyncategories(getcategoriesNav));
  }, []);
  console.log('categoriesnav', categories);



  return (
    <div>
      <aside className={`sidebarhome ${isSidebarOn ? 'hide-sidebar' : ""}`}>
        <button className='sidebar-hide-btn' type="button" onClick={() => dispatch(setSidebarOff())}>
          <CloseOutlinedIcon variant="outlined" sx={{ Color: '#f5831a' }} />
        </button>

        <div className='sidebar-cnt'>
          <div className='cat-title fs-8 text-uppercase fw-6 ls-1h'>All Categories</div>
          <ul className='cat-list p-0'>
            {
              categories.map((value, index) => {
                return (

                  <Link to={`/category/${value.cat_id}`} className='sidebarlink text-dark text-decoration-none ' key={index}>{value.cat_name}
                    <br></br>
                  </Link>
                )
              })
            }

          </ul>
        </div>



      </aside>


    </div>
  )
}

export default Sidebar
