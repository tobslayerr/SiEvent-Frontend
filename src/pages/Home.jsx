import React from 'react'
import BestCreator from '../components/Home/BestCreator'
import Carousel from '../components/Home/Carousel'
import EventTerdekat from '../components/Home/EventTerdekat'
import EventGratis from '../components/Home/EventGratis'
import ToLogin from '../components/Home/ToLogin'

const Home = () => {
  return (
    <div>
    <Carousel />
    <EventTerdekat />
    <EventGratis />
    <BestCreator />
    <ToLogin />
    </div>
  )
}

export default Home