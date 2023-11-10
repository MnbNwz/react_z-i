import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./carousel.css";

const Carousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          className="carousel_div"
          src={require("../../images/trucks/1.jpg")}
        />
      </div>
      <div>
        <img src={require("../../images/trucks/2.jpeg")} />
      </div>
      <div>
        <img src={require("../../images/trucks/3.jpg")} />
      </div>
      <div>
        <img src={require("../../images/trucks/4.jpg")} />
      </div>
      <div>
        <img src={require("../../images/trucks/5.jpeg")} />
      </div>
      <div>
        <img src={require("../../images/trucks/6.jpeg")} />
      </div>
    </Slider>
  );
};

export default Carousel;
