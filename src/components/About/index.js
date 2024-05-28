import "./index.css";
import Header from "../Header";
import Reviews from "../Reviews";

const About = () => {
  console.log("kaa");
  return (
    <>
      <div className="about-header-container">
        <Header />
        <div className="about-container11">
          <div className="about-container12">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716861497/i3pxeejzlsq9vnor6zy5.png"
              alt="man"
              className="about-man"
            />
          </div>
          <div className="about-con121">
            <h1>About Us</h1>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716798709/gsu6vwnshgwkwcoz0pja.png"
              alt="contact"
            />
          </div>
        </div>
      </div>
      <div className="about-bg-container1">
        <div>
          <h1 className="about-h1">
            Find Out More About <br /> Our Business Consulting
          </h1>
          <p className="about-p1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            dictum arcu sed erat fringilla placerat. Proin fringilla lacinia
            risus sed porttitor. Quisque tincidunt lectus vitae massa vulputate
            pellentesque et vitae ligula. Sed eu leo odio. Aliquam erat
            volutpat. Praesent cursus quam purus, sed scelerisque orci tincidunt
            in. Donec a neque facilisis, lobortis tellus vitae, dictum nisl.
            Morbi sed lacus dui. Sed eu leo imperdiet, pulvinar massa ut,
            ullamcorper magna.
          </p>
          <p className="about-p1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            dictum arcu sed erat fringilla placerat. Proin fringilla lacinia
            risus sed porttitor. Quisque tincidunt lectus vitae massa vulputate
            pellentesque et vitae ligula. Sed eu leo odio. Aliquam erat
            volutpat. Praesent cursus quam purus, sed scelerisque orci tincidunt
            in. Donec a neque facilisis, lobortis tellus vitae, dictum nisl.
            Morbi sed lacus dui. Sed eu leo imperdiet, pulvinar massa ut,
            ullamcorper magna.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/djysychfq/image/upload/v1716863003/rl05rg2qkxnep8xhv4vn.png"
          alt="img"
        />
      </div>
      <Reviews />
    </>
  );
};

export default About;
