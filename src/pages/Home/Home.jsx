import React from 'react'
import Main from '../../components/Main/Main'
import Categories from '../../components/Categories/Categories'
import About from '../../components/About/About'
import Statistics from '../../components/Statistics/Statistics'
import ProductDetail from '../../components/ProductDetail/ProductDetail'


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
      
    </div>
  )
}

export default Home