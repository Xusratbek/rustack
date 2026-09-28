import React from 'react'
import Main from '../../components/Main/Main'
import Categories from '../../components/Categories/Categories'
import About from '../../components/About/About'
import Statistics from '../../components/Statistics/Statistics'
import ProductDetail from '../../components/ProductDetail/ProductDetail'
import Products from '../../components/Products/Products'


const Home = () => {
  return (
    <div>
      <div className='container'>
        <Main />
        <Categories />
        <About />
      </div>
      <Statistics  />
      <ProductDetail />
      <Products />
    </div>
  )
}

export default Home