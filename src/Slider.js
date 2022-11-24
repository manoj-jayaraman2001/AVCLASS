import Carousel from 'react-bootstrap/Carousel';

import './slider.css'
const Slider = () => {
            return (
            <>
              <Carousel className = 'carousel'>
                <Carousel.Item>
                  <img
                    className="img1"
                    src="..\pics\c1.jpeg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img2"
                    src="..\pics\c2.jpeg"
                    alt="Second slide"
                  />
          
                  <Carousel.Caption>
        
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img3"
                    src="..\pics\c3.jpeg"
                    alt="Third slide"
                  />
          
                  <Carousel.Caption>
                    
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </>

    );
            
        
}

export default Slider;