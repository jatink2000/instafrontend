import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { Home } from './Components/Home';
import { Addproduct } from './admin/Addproduct';
import { Nav } from './Components/Nav';
import { Products } from './Components/Products';
import { BgMain } from './Components/BgMain';
import { Productlink } from './Components/Productlink';
import Productdetails from './Components/Productdetails';
import { Footer } from './Components/Footer';
import { Productcat } from './Components/productcat';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import { Users } from './admin/Users';
import { Adminnav } from './admin/Adminnav';
import { Updateproduct } from './admin/Updateproduct';
import Allproducts from './admin/Allproducts';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/admin/users' element={<Users />} />
          <Route path='/admin/Adminnav' element={<Adminnav />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/addproduct' element={<Addproduct />} />
          <Route path='/Nav' element={<Nav />} />
          <Route path='/products' element={<Products />} />
          <Route path='/BgMain' element={<BgMain />} />
          <Route path='/Productlink' element={<Productlink />} />
          <Route path='/productdetails' element={<Productdetails />} />
          <Route path='/Footer' element={<Footer />} />
          <Route path='/productcat' element={<Productcat />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/allproducts' element={<Allproducts />} />
          <Route path='/updateproduct' element={<Updateproduct />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
