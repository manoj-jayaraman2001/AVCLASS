import React, { useEffect } from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"
import Location from "../home/location/Location"

const Services = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <Location />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services
