import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Product from './Pages/Product'
import ProductList from './Pages/ProductList'
import Register from './Pages/Register'
import Success from './Pages/Success'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  const user =false
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={user ? <Navigate to="/"/> :<Login/>} />  
        <Route path="/register" element={user ? <Navigate to="/"/> :<Register/>} />
        <Route path="/success" element={<Success/>} />
      </Routes>
    </Router>
  );
}

export default App