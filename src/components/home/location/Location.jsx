import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"
import { Link } from "react-router-dom"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explore By Categories' subtitle='Various Designs for your House corners' />

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <Link to={item.path}>
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    {/* <label>{item.Offices}</label>
                    <label>{item.Apartments}</label> */}
                  </p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
