import { Route, Routes } from 'react-router-dom';
import { Cart } from './Components/ShopCart';
import { Header } from './Components/Navbar';
import { Home } from './Components/Home';
import { Login } from './Components/SignIn';
import { Product } from './Components/Item';
import { ProductDetails } from './Components/Details';
import { Register } from './Components/SignUp';
import { ThankYou} from './Components/ThankYou'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/showProduct/:cat/:type1/:type2/:type3" element={<Product />}></Route >
        <Route path="/productDetails/:id/:type" element={<ProductDetails />}></Route >
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/ThankYou" element={<ThankYou />}></Route>

      </Routes>
    </div>
  );
}

export default App;
