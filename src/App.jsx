import React, { useState } from 'react'
import Header from './components/Header'
import Items from './components/Items'

const App = () => {

  const [products, setProducts] = useState([
    { id: 0, name: 'shipcy', price: 100, items: 1 },
    { id: 1, name: 'pesi', price: 200, items: 1 },
    { id: 2, name: 'molto', price: 300, items: 1 },
    { id: 3, name: 'kranshy', price: 400, items: 1 },
    { id: 4, name: 'cigaretes', price: 500, items: 1 }
  ])

  const [addedProducts] = useState([
    { id: 0, name: 'shipcy', price: 100, items: 1 },
    { id: 1, name: 'pesi', price: 200, items: 1 },
    { id: 2, name: 'molto', price: 300, items: 1 },
    { id: 3, name: 'kranshy', price: 400, items: 1 },
    { id: 4, name: 'cigaretes', price: 500, items: 1 }
  ])

  const [theme, setTheme] = useState(false)
  const [showEmpty, setShowEmpty] = useState(false)

  const increment = (index) => {
    setProducts(products.map((p) => (p.id === index ? { ...p, items: p.items + 1 } : p)))
  }
  const decrement = (index) => {
    setProducts(products.map((p) => (p.id === index ? { ...p, items: p.items - 1 } : p)))
  }
  const deletee = (index) => {
    const myProduct = (products.filter((_, i) => i !== index));
    setProducts(myProduct)
    if (myProduct.length === 0) {
      setShowEmpty(true)
    }
  }
  const deleteCarts = () => {
    setProducts([])
    setShowEmpty(true)
  }
  const darkLight = () => {
    setTheme(!theme)
  }
  const reset = () => {
    setProducts(addedProducts)
    setShowEmpty(false)
  }

  const totalPaid = () => {
    return products.reduce((total, p) => total + (p.price * p.items), 0);
  }

  const counter = () => {
    let count = 0;
    products.forEach(product => {
      if (product.items > 0) {
        count += 1;
      }
    });
    return count;
  }


  return (
    <>
      <Header addedProducts={addedProducts} products={products} increment={increment} counter={counter} theme={theme} />
      <Items products={products} increment={increment} decrement={decrement} deletee={deletee} deleteCarts={deleteCarts} darkLight={darkLight} reset={reset} theme={theme} totalPaid={totalPaid} showEmpty={showEmpty} />
    </>
  )
}

export default App
