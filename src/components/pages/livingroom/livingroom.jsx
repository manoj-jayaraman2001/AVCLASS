import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./livingroom.css"

function Livingroom() {
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  const bedroom_pics = [
    {
      id: 1, cover: "../images/livingroom/livingmain.jpg",
      name: "Wooden wall light Design"
    }
    , {
      id: 2, cover: "../images/livingroom/livingroom.jpg",
      name: "Wooden wall light Design"
    }
    , {
      id: 3, cover: "../images/livingroom/livingroom1.jpg",
      name: "Wooden wall light Design"
    }
    , {
      id: 4, cover: "../images/livingroom/livingroom2.webp",
      name: "Wooden wall light Design"
    },
    {
        id: 5, cover: "../images/livingroom/livingroommain.webp",
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

export default Livingroom