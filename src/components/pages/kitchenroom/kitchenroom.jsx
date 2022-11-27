import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./kitchenroom.css"
function Kitchenroom() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  const bedroom_pics = [
    {
      id: 1, cover: "../images/kitchenroom/kitcehnmain.webp",
      name: "Wooden wall light Design"
    }
    , {
      id: 2, cover: "../images/kitchenroom/kitchen.jpg",
      name: "Wooden wall light Design"
    }
    , {
      id: 3, cover: "../images/kitchenroom/kitchen1.jpeg",
      name: "Wooden wall light Design"
    }
    , {
      id: 4, cover: "../images/kitchenroom/kitchen2.jpg",
      name: "Wooden wall light Design"
    }];
  return (
    <>
    <div className='bedroompage'>
      <div className='content grid3 mtop'>
        {bedroom_pics.map((val, index) => {
          const { cover, Para, name, more, type } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>


              <div className='bedroomtext'>
                <div className='textleft'>
                  <i className='fa fa-heart'></i>
                  <h4>{name}</h4>
                </div>
                <div className='textright'>
                  <Link to={"/pricing"}><button className='getest'>Get Estimate</button></Link>
                </div>
              </div>

            </div>
          )
        })}
      </div>
      </div>
    </>
  )
}

export default Kitchenroom