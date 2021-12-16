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

  //process add product to cart
  const handleAddProduct = (product) => {   
    const newCarts = [...cart]
    const checkExistId = newCarts.findIndex(item => item.id === product.id)
    if(checkExistId >= 0){
     // const updateNumberOfProduct = {...product, quantity: product.quantity++}
      const updateCart = {...newCarts[checkExistId]}
      updateCart.quantity++
      newCarts[checkExistId] = updateCart
      setCart(newCarts)
    }else{
      setCart(pre => {
        const addNewProductToCart = [...pre, product]
        return addNewProductToCart
      })
    }    
  }   

 //process delete product in cart
  const hadleDeleteCart = (item) => {
    const newCart = [...cart]
    const result = newCart.filter(cart => cart.id !== item.id)
    setCart(result)
  }

  //process calculate the total price of the cart
  useEffect(() => {
    if(cart){
        var result = 0
        for(let i=0; i < cart.length; i++){
            result += cart[i].price*cart[i].quantity
        }
    }
    setTotal(result)
  }, [cart])

  //Check the total number of products in the cart
  useEffect(() => {
    if(cart){     
      const result = cart.reduce((total, item) => {
        return total + item.quantity
      }, 0)
      setCountProduct(result)
    }
  }, [cart])

  //process Increase number of product in cart
  const onIncreaseNumberOfProduct = (item) => {
    const newCarts = [...cart]
    const checkExistId = newCarts.findIndex(cart => cart.id === item.id)
    if(checkExistId >=0){
      const updateIncreaseNumber = {...newCarts[checkExistId]}
      updateIncreaseNumber.quantity++
      newCarts[checkExistId] = updateIncreaseNumber
      setCart(newCarts)
    }
  }
  
  //process Decrease number of product in cart
  const onDecreaseNumberOfProduct = (item) => {
    const newCarts = [...cart]
    const checkExistId = newCarts.findIndex(cart => cart.id === item.id)
    if(checkExistId >=0){
      const updateDecreaseNumber = {...newCarts[checkExistId]}
      if(updateDecreaseNumber.quantity === 1){
        return
      }else{
        updateDecreaseNumber.quantity--
        newCarts[checkExistId] = updateDecreaseNumber
        setCart(newCarts)
      }
    }
  }

  

  return (
    <div className="App">
      <div className='container'>
        <h4>Danh Sách Sản Phẩm</h4>
        <CartList 
          cart={cart}
          total={total}
          hadleDeleteCart={hadleDeleteCart}
          onIncrease = {onIncreaseNumberOfProduct}
          onDecrease = {onDecreaseNumberOfProduct}
          countProduct = {countProduct}
        />
        <br/>
        <br/>
        <ProductList 
          products={products}
          handleAddProduct={handleAddProduct}
        /> 
      </div>
    </div>
  );
}

export default App;
