import desktop from "../assets/images/image-web-3-desktop.jpg";

const Left = () => {
  return (
    <div className="left">
      <div className="left-img">
        <img src={desktop} alt="Image desktop" />
      </div>
      <div className="left-details">
        <div className="title">
          <h1>The Bright Future of Web 3.0 ?</h1>
        </div>
        <div className="side">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise ?
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Left;
