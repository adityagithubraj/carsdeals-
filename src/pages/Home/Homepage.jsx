import React from 'react'
import HomeBanner from './HomeBanner'
import Process from './Process'
import ProductGridHome from './ProductsHome'
import Reviews from './Reviews'

function Homepage() {
  return (
    <>
        <HomeBanner />
        <Process />
        <ProductGridHome />
        <Reviews />
    </>
  )
}

export default Homepage