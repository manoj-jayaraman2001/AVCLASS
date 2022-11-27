import React, { useEffect } from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price />
    </>
  )
}

export default Home
