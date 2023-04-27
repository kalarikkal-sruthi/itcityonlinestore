import { useEffect } from 'react'
import React from 'react'
import { getUser } from '../../Redux/userSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import { selectToken } from '../../Redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../Redux/authSlice';


function Account() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
    const userToken = useSelector(selectToken);
    useEffect(() => {
      dispatch(loginSuccess(userToken));
    }, [])
    
    // const userUser = useSelector(getUser);
    const onLogOut=()=>{
    localStorage.removeItem('token');
    navigate('/')}

    console.log(userToken);
    // const keys = Object.keys(userUser);
    // const val = Object.entries(userUser).map((element)=> element[1].customer_name)
  
  return (
    <div>
         <button
            onClick={onLogOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Log Out
          </button>
  {/* <h1>{val}</h1> */}
   
    </div>
  )
}

export default Account