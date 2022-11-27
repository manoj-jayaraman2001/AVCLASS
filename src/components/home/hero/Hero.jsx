import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import Slider from "../Slider/Slider"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        {/* <Slider/> */}
        <div className='container'>
          <Heading title='YOUR CREATIVE SPACE ' subtitle='Get latest & featured interior designs.' />
        </div>

      </section>
    </>
  )
}

export default Hero
