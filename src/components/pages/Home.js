import React from "react";
import pic1 from "../images/pic1.JPG";
import pic2 from "../images/pic2.JPG";
import pic3 from "../images/pic3.JPG";
import pic4 from "../images/pic4.JPG";
import pic5 from "../images/pic5.JPG";
import pic6 from "../images/pic6.JPG";
import pic7 from "../images/pic7.JPG";
import pic8 from "../images/pic8.JPG";
import pic9 from "../images/pic15.JPG";
import pic10 from "../images/pic10.JPG";
import pic11 from "../images/pic11.JPG";
import pic12 from "../images/pic12.JPG";
import pic13 from "../images/pic13.JPG";
import pic14 from "../images/pic14.JPG";
import pic15 from "../images/pic15.JPG";
import pic16 from "../images/pic16.JPG";
import pic17 from "../images/pic17.JPG";
import pic18 from "../images/pic18.JPG";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h1 className="homeHeading mb-5 ">SLUSH TRAP</h1>
      {/* <div className='lineDiv lineHead'> HEY </div> */}

      <p className="homeText px-3">
        Check in with us below to see where we will be next!
      </p>

      <div id="fDiv">
        <div
          class="fb-page fbPost"
          data-href="https://www.facebook.com/SlushTrap/"
          data-tabs="timeline"
          data-width=""
          data-height=""
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/SlushTrap/"
            class="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/SlushTrap/">Slush Trap</a>
          </blockquote>
        </div>
      </div>

      <h1 className="homeHeading mb-5">GALLERY</h1>
      {/* <div className='lineDiv'> HEY </div> */}

      <div className="allPics container">
        <Carousel>
          <Carousel.Item>
            <img className="homePic" src={pic1} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic2} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic3} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic4} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic5} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic6} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic7} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic8} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic10} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic11} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic12} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic13} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic14} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic15} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic16} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic17} alt="pic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="homePic" src={pic18} alt="pic" />
            <Carousel.Item>
            <img className="homePic" src={pic9} alt="pic" />
          </Carousel.Item>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
