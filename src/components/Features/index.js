import "./index.css";
import Header from "../Header";
import Reviews from "../Reviews";

const Features = () => {
  console.log("kaa");
  return (
    <>
      <div className="feature-header-container">
        <Header />
        <div className="feature-container11">
          <div className="feature-container12">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716861497/i3pxeejzlsq9vnor6zy5.png"
              alt="man"
              className="feature-man"
            />
          </div>
          <div className="feature-con121">
            <h1>Features</h1>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716798709/gsu6vwnshgwkwcoz0pja.png"
              alt="contact"
            />
          </div>
        </div>
      </div>
      <div className="feature-bg-container1">
        <div>
          <p className="feature-p1">Features</p>
        </div>
        <h1 className="feature-h1">THE FEATURES TO CREATE YOUR</h1>
        <div className="ul-list-f">
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716866727/lelerxvxyqbxhukvqfic.png"
            alt="card"
          />
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716866727/lelerxvxyqbxhukvqfic.png"
            alt="card"
          />
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716866727/lelerxvxyqbxhukvqfic.png"
            alt="card"
          />
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716866727/lelerxvxyqbxhukvqfic.png"
            alt="card"
          />
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716866727/lelerxvxyqbxhukvqfic.png"
            alt="card"
          />
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716866727/lelerxvxyqbxhukvqfic.png"
            alt="card"
          />
        </div>
      </div>
      <Reviews />
    </>
  );
};

export default Features;
