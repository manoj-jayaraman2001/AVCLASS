import Carousel from "react-bootstrap/Carousel";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Slider.css";
const Slider = () => {
  return (
    <>
      <Carousel >
        <Carousel.Item>
          <img
            className="img1"
            src="../images/simg/img1.png"
            alt="First slide"
          />
          <Carousel.Caption>
     
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img2"
            src="../images/simg/img2.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img3"
            src="../images/simg/img3.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;