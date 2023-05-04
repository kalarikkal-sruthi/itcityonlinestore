
import Homepage from './Pages/Home/Home.js';
import { Routes, Route } from 'react-router-dom'
import Category from './Pages/Productbycategory/Productbycategory';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import Productsinglepage from './Pages/Productsinglepage/Productsinglepage';
import Sidebar from './Components/Sidebar/Sidebar';
import Searchpage from './Pages/Search/Searchpage';
import Cartpage from './Pages/Cart/Cart';
import Payment from './Pages/Payment/Payment';
import { Register } from './Pages/Register/Register';
import Account from './Pages/Register/Account';
import Footercategory from './Components/Homecategory/Footercategory';
import Profile from './Pages/Register/Profile';

import Guestnav from './Components/Navbar/Guestnav';
import { getToken } from './Redux/userSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Myorder from './Pages/Register/Myorder';




function App() {

  const userToken = useSelector(getToken)
  useEffect(() => {
    if (!userToken) {
      <Navbar />
    }
  }, []);

  return (
    <div className="App">
      <Sidebar />
      {userToken ? (<Guestnav />) : (<Navbar />)}
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path='/category/:category_id' element={<Category />} />
      </Routes>

      <Routes>
        <Route path='/product/:product_id' element={<Productsinglepage />} />
      </Routes>
      <Routes>
        <Route path='/search/:searchterm' element={<Searchpage />} />
      </Routes>
      <Routes>
        <Route path='/cart' element={<Cartpage />}></Route>
      </Routes>
      <Routes>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Routes>
        <Route path='/search' element={<Searchpage />}></Route>
      </Routes>
      <Routes>
        <Route path='/cat-footer' element={<Footercategory />}></Route>
      </Routes>
      <Routes>
        <Route path='/profile' element={<Profile />} ></Route> 
      </Routes>
      <Routes>
        <Route path='/myorder' element={<Myorder />} ></Route>
      </Routes>

      <Routes>
        <Route path='/payment' element={<Payment />}></Route>
      </Routes>
      <Routes>
        <Route path='/account' element={<Account />}></Route>
      </Routes>

      <Routes>
        <Route path='/login' element={<Register />}></Route>
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
