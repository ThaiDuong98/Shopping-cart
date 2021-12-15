import { useState, useEffect } from 'react';
import CartList from "./CartList";
import ProductList from "./ProductList";
import data from './data';
import './bootstrap/bootstrap.min.css';

function App() {
  
  const [products, setProducts] = useState(data)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [countProduct, setCountProduct] = useState(0)
  

  const handleAddProduct = (product) => {
    //debugger
    const newCart = [...cart]
    const checkExistId = newCart.findIndex(item => item.id === product.id)
    if(checkExistId >= 0){
     // const updateNumberOfProduct = {...product, quantity: product.quantity++}
      newCart[checkExistId] = {...product, quantity: product.quantity++}
      setCart(newCart)
    }else{
      setCart(pre => {
        const addNewProductToCart = [...pre, product]
        return addNewProductToCart
      })
    }    
  }   

 
  const hadleDeleteCart = (item) => {
    const newCart = [...cart]
    const result = newCart.filter(cart => cart.id !== item.id)
    setCart(result)
  }

  useEffect(() => {
    if(cart){
        var result = 0
        for(let i=0; i < cart.length; i++){
            result += cart[i].price
        }
    }
    setTotal(result)
  }, [cart])

  

  return (
    <div className="App">
      <div className='container'>
        <h4>Danh Sách Sản Phẩm</h4>
        <CartList 
          cart={cart}
          total={total}
          hadleDeleteCart={hadleDeleteCart}
        />
        <hr/>
        <ProductList 
          products={products}
          handleAddProduct={handleAddProduct}
        /> 
      </div>
    </div>
  );
}

export default App;
