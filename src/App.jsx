import React, { useState } from 'react'
import Header from './components/Header'
import Items from './components/items'


const App = () => {

  const [products, setProducts] = useState([
    { id: 1, name: "Chipsy", price: 10, count: 0 },
    { id: 2, name: "Pepsi", price: 20, count: 0 },
    { id: 3, name: "Cigarets", price: 30, count: 0 },
    { id: 4, name: "Baneh", price: 40, count: 0 },

  ])



  const Increment = (index) => {
    let myProduct = structuredClone(products)
    myProduct[index].count++
    setProducts(myProduct)
    calcTotalPiad()
  }

  const Decrement = (index) => {
    let myProduct = structuredClone(products);
    myProduct[index].count--;
    setProducts(myProduct)
    calcTotalPiad()
  }

  const Delete = (index) => {
    let myProduct = structuredClone(products);
    myProduct.splice(index, 1);
    setProducts(myProduct)
    calcTotalPiad()
    if (myProduct.length === 0) {
      setShow(false)
    }
  }

  const countNav = products.reduce((total, product) => total + product.count, 0)

  const [theme, setTheme] = useState(true);
  const DarkLight = () => {
    // if(theme==true){
    //         setTheme(false)
    //     }else{
    //         setTheme(true)
    //     }
    theme ? setTheme(false) : setTheme(true)
  }

  const [show, setShow] = useState(true);
  const DeleteCart = () => {
    setProducts([])
    setShow(false)

  }

  const calcTotalPiad = () => {
    return products.reduce((total, product) => total + (product.price * product.count), 0)
  }


  const [mreset] = useState(products);
  // let mreset = structuredClone(products)
  const reset = () => {
    setProducts(mreset);
    setShow(true)
  };


  return (
    <>
      <Header count={countNav} />
      <Items products={products} Increment={Increment} Decrement={Decrement} Delete={Delete} theme={theme} DarkLight={DarkLight} DeleteCart={DeleteCart} show={show} totalPiad={calcTotalPiad()} reset={reset} />

    </>
  )
}

export default App
