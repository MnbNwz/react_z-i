import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./carousel.css";
import image1 from "../../images/trucks/1.jpg";
import image2 from "../../images/trucks/2.jpeg";
import image3 from "../../images/trucks/3.jpg";
import image4 from "../../images/trucks/4.jpg";
import image5 from "../../images/trucks/5.jpeg";
import image6 from "../../images/trucks/6.jpeg";

const Carousel = () => {
  const ImageForCarousel = (url) => (
    <div>
      <img alt="Truck" src={url} />
    </div>
  );
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {ImageForCarousel(image1)}
      {ImageForCarousel(image2)}
      {ImageForCarousel(image3)}
      {ImageForCarousel(image4)}
      {ImageForCarousel(image5)}
      {ImageForCarousel(image6)}
      {/* {ImageForCarousel("../../images/trucks/3.jpg")}
      {ImageForCarousel("../../images/trucks/4.jpg")}
      {ImageForCarousel("../../images/trucks/5.jpeg")}
      {ImageForCarousel("../../images/trucks/6.jpeg")} */}

      {/* <div>
        <img alt="Truck" src={require("../../images/trucks/1.jpg")} />
      </div>
      <div>
        <img alt="Truck" src={require("../../images/trucks/2.jpeg")} />
      </div>
      <div>
        <img alt="Truck" src={require("../../images/trucks/3.jpg")} />
      </div>
      <div>
        <img alt="Truck" src={require("../../images/trucks/4.jpg")} />
      </div>
      <div>
        <img alt="Truck" src={require("../../images/trucks/5.jpeg")} />
      </div>
      <div>
        <img alt="Truck" src={require("../../images/trucks/6.jpeg")} />
      </div> */}
    </Slider>
  );
};

export default Carousel;
