import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import { Routes, Route } from 'react-router-dom'
import Category from './Pages/Productbycategory/Productbycategory';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import Productsinglepage from './Pages/Productsinglepage/Productsinglepage';
import Sidebar from './Components/Sidebar/Sidebar';
import Searchpage from './Pages/Search/Searchpage';
import Cartpage from './Pages/Cartpage/Cartpage';

import Categories from './Components/Homecategory/Homecategory';
import Payment from './Pages/Payment/Payment';
import { Register } from './Pages/Register/Register';
import Account from './Pages/Register/Account';
import Footercategoris from './Components/Footercategoris/Footercategoris';
import Profile from './Pages/Register/Profile';
import Mywhishlist from './Pages/Register/Mywhishlist';



function App() {

  return (
    <div className="App">
      <Sidebar/>
      <Navbar />
      <Routes>
      <Route path='/' element={<Homepage />} />
      </Routes>
      <Routes>
      <Route path='/category/:category_id' element={<Category />} />
      </Routes>
  
      <Routes>
      <Route path='/product/:product_id' element={<Productsinglepage/>} />
      </Routes>
      <Routes>
      <Route path='/search/:searchterm' element={<Searchpage/>} />
      </Routes>
      <Routes>
      <Route path='/cartpage' element={<Cartpage/>}></Route>
      </Routes>
      <Routes>
      <Route path='/register' element={<Register/>}></Route>    
      </Routes>
      <Routes>
      <Route path='/search' element={<Searchpage/>}></Route>  
      </Routes>
      <Routes>
        <Route path='/categories' element={<Footercategoris/>}></Route>
      </Routes>
      <Routes>
        <Route path='/profile' element={<Profile />} ></Route>   
      </Routes>
      <Routes>
        <Route path='/payment' element={<Payment/>}></Route>          
      </Routes>
      <Routes>
        <Route path='/account' element={<Account/>}></Route>          
      </Routes>
      <Routes>
        <Route path='/whishlist' element={<Mywhishlist/>}></Route>          
      </Routes>
      <Routes>
        <Route path='/login' element={<Register/>}></Route>          
      </Routes>

      
      <Footer />
    </div>
  );
}

export default App;
