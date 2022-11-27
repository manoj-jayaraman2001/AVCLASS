import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Design Gallery' subtitle='Explore our exclusive designs for every room to transform your home to a dream home.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
