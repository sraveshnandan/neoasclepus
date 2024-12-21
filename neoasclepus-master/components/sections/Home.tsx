import React from 'react'
import AboutUsSection from './About'
import ProductSliders from './ProductSliders'
import ProductSection from './ProductSection'

const Home = () => {
  return (
    <div>

        <ProductSliders/>

        <section>
            <AboutUsSection/>
            <ProductSection/>
        </section>
    </div>

  )
}

export default Home