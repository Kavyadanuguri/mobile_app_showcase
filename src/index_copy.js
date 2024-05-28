import Header from "../Header";
import "./index.css";

const Home = () => {
  console.log("kavya");
  return (
    <>
      <div className="home-bg-container">
        <Header />
        <div className="home-container1">
          <div>
            <h1 className="home-h1">Best Mobile App Showcase</h1>
            <p className="home-p1">
              Aenean dictum odio dapibus turpis dapibus vestibulum. Mauris quis
              massa nisi. Nullam porta lorem at volutpat euismod. Proin in ex
              nunc.
            </p>
            <button className="home-btn1" type="button">
              Read More
            </button>
          </div>
          <div>
            <img
              alt="contact"
              className="home-image1"
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716798709/gsu6vwnshgwkwcoz0pja.png"
            />
          </div>
        </div>
      </div>
      <div className="home-bg-container2">
        <p>kaa</p>
      </div>
    </>
  );
};

export default Home;
