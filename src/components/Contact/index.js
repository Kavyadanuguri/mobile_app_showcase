import "./index.css";
import Header from "../Header";
import Reviews from "../Reviews";

const Contact = () => {
  console.log("kaa");
  return (
    <>
      <div className="c-header-container">
        <Header />
        <div className="c-container11">
          <div className="c-container12">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716861497/i3pxeejzlsq9vnor6zy5.png"
              alt="man"
              className="c-man"
            />
          </div>
          <div className="c-con121">
            <h1>Features</h1>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716798709/gsu6vwnshgwkwcoz0pja.png"
              alt="contact"
            />
          </div>
        </div>
      </div>
      <div className="c-bg-container1">
        <p className="c-p1">Features</p>
        <h1 className="c-h1">CONTACT US</h1>
        <div className="c-container13">
          <form>
            <div className="form-con1">
              <label className="label1" htmlFor="input1">
                Name :
              </label>
              <input className="input1" id="input1" type="text" />
            </div>
            <div className="form-con1">
              <label className="label1" htmlFor="input2">
                Phone Number :
              </label>
              <input className="input1" id="input2" type="text" />
            </div>
            <div className="form-con1">
              <label className="label1" htmlFor="input3">
                Email :
              </label>
              <input className="input1" id="input3" type="text" />
            </div>
            <div className="form-con1">
              <label className="label1" htmlFor="input4">
                Your Message :
              </label>
              <textarea className="input2" id="input4" type="text" />
            </div>
            <button className="c-btn" type="submit">
              Send
            </button>
          </form>
          <img
            className="c-line"
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716868590/g55al21xmhqufaak5fxa.png"
            alt="line"
          />
          <div className="c-container14">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716868729/ohuxjibbrada668t2xj4.png"
              alt="location"
            />
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716868736/d5kvniyimuwioybotbar.png"
              alt="number"
            />
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716868745/o0udx4fwu5f6cfbiohay.png"
              alt="number2"
            />
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716868754/uiix5drerm4pav1q0izw.png"
              alt="location"
            />
          </div>
        </div>
      </div>
      <Reviews />
    </>
  );
};

export default Contact;
