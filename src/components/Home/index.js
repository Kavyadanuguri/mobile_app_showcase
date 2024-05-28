import Header from "../Header";
import Reviews from "../Reviews";
import "./index.css";

const Home = () => {
  console.log("kk");
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
              className="home-img1"
              alt="home-img1"
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716798709/gsu6vwnshgwkwcoz0pja.png"
            />
          </div>
        </div>
      </div>
      <div className="home-bg-container2">
        <div className="home-container21">
          <div>
            <h2 className="home-h2">Engaging & Spacious School Campus</h2>
            <div className="home-center">
              <img
                className="home-img2"
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716801408/ngumwh7b2cytx1o2kwyv.png"
                alt="home-img2"
              />
            </div>
            <p className="home-p2">
              Hise sed augue vitae felis pellentesque varius nec quis nunc.
              Morbi mauris augue, pulvinar quis luctus eget. Phasellus gravida
              lacus quis eros lobortis, nec dapibus quam gravida.
            </p>
          </div>
          <img
            className="home-girl"
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716802537/ugdc5muwvpnlkcgu07lw.png"
            alt="girl"
          />
        </div>
        <div className="home-container22">
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716802878/gvxstnhpyll1u5tmbfqr.png"
            alt="card"
          />
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716803458/ruykbgnfvyqxw2tto87h.png"
            alt="card"
          />
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716803512/k3fe1a0rmkij6jtjhyra.png"
            alt="card"
          />
        </div>
        <div className="home-center">
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716803629/ixxzrolpttociq9ebmxl.png"
            alt="line"
          />
        </div>
        <div className="home-container23">
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716803763/otmhxwanayjcyfdro1l1.png"
            alt="show"
          />
          <div>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716804094/youoe8zdasbndi4z9rqb.png"
              alt="text"
            />
            <p className="home-p3">
              Aliquam aliquet purus a est consequat lobortis. Etiam vehicula
              suscipit purus, eget ullamcorper augue blandit vitae. Ut eu
              euismod felis. Etiam at varius quam. Vivamus lacinia pulvinar
              turpis in suscipit. Aenean mattis enim ut pretium gravida. Sed
              fermentum a lacus bibendum convallis. Consequat purus aliquet a
              est aliquam lobortis. Etiam vehicula suscipit purus, eget
              ullamcorper augue blandit vitae....
            </p>
            <button className="home-btn1" type="button">
              Read More
            </button>
          </div>
        </div>
        <div className="home-container23">
          <div className="home-container231">
            <h1>How does This App Work?</h1>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716804562/g6p4malrpjreb7kez2kk.png"
              alt="line"
              width={100}
            />
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716804690/iof7vrjy8wi4kagiossn.png"
              alt="pic"
              className="home-card1"
            />
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716804947/t34ce101lxiwkb0kzgum.png"
              alt="pic"
              className="home-card1"
            />
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716804974/owiegcotbfmwis4zp4zj.png"
              alt="pic"
              className="home-card1"
            />
          </div>
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716804484/lmhrmphqxygwf3xwojyj.png"
            alt="show"
          />
        </div>
        <div className="home-container23">
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716805172/aext6htanguqglvd5zzx.png"
            alt="freelance"
          />
          <div className="home-container232">
            <h1>Designed & Worked By The Latest Partners</h1>
            <h2 className="home-back-h2">
              Aliquam varius ligula nec leo tempus porta.
            </h2>
            <p className="home-p3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
            <h2 className="home-back-h2">
              Suspendisse vitae varius diam, a vulputate urna.
            </h2>
            <h2 className="home-back-h2">
              Aliquam aliquet purus eget lacus pretium.
            </h2>
          </div>
        </div>
      </div>
      <div className="home-bg-container3">
        <div>
          <h1 className="home-h2">App Screenshots</h1>
          <div className="home-center">
            <img
              className="home-img2"
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716801408/ngumwh7b2cytx1o2kwyv.png"
              alt="home-img2"
            />
          </div>
          <p className="home-p22">
            Saepe quo labore aenean dictumst expedita commodi auctor, <br />
            nisl, lorem iusto feugiat nemo reiciendis laboris.
          </p>
        </div>
        <div className="home-container31">
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716806306/r1gkhpw2einripbfyyiy.png"
            alt="screenshot"
          />
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716806372/onzr411ddfrm9udlb6bz.png"
            alt="screenshot"
          />
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716806541/afm1gelhvvku4tesivg6.png"
            alt="screenshot"
          />
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716806551/gylftpotxsugwmcaqrnt.png"
            alt="screenshot"
          />
        </div>
      </div>
      <Reviews />
    </>
  );
};

export default Home;
