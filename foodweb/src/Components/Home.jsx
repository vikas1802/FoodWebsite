import React from 'react'
import Hero from './Hero'
import Delivery from './Delivery'
import SliderFood from './SliderFood'

const Home = ({handleAdd}) => {
  return (
    <div>
      <Hero/>
      <Delivery/>
      <SliderFood handleAdd={handleAdd}/>
    </div>
  )
}

export default Home
