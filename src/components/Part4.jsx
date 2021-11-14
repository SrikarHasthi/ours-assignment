import "../css/part4.css";
import mediamodifier_image from "../assets/mediamodifier_image (1) 1.png";
let Part4 = () => {
  return (
    <div className="fourth-container">
      {/* <div className="container"> */}
      <div className="community-section">
        <div className="community-container">
          <div className="community-header">
            <h1>Community</h1>
          </div>
          <div className="content">
            <img src={mediamodifier_image} />
            <div className="content-data">
              <div className="content-data-section">
                <h2>Practice Together</h2>
                <p>We’re all on this journey together in heart and spirit.</p>
              </div>
              <div className="content-data-section">
                <h2>Ask Questions</h2>
                <p>
                  A space to get help, feedback and motivation to stick through.
                </p>
              </div>
              <div className="content-data-section">
                <h2>Help Others</h2>
                <p>If you feel you have something valuable to contribute</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="manifesto-container">
        <section className="sub-content mt-5">
            <div className="sub-content-h1tag">
          <h1> Manifesto</h1>
          </div>
        </section>
        <div className="manifesto-data">
          <p>Living through love, not fear</p>
          <p className="dot"></p>
          <p>Learning the language of being human</p>
          <p className="dot"></p>
          <p>Transcending the ego by venturing into uncharted territory</p>
          <p className="dot"></p>
          <p>Returning to our roots to uncover lost truths</p>
          <p className="dot"></p>
          <p>Sharing knowledge to empower others</p>
          <p className="dot"></p>
          <p>Living in sync with nature</p>
          <p className="mt-5">
            Our vision is to share ancient Indian wisdom in an accessible and
            authentic manner, empowering people to cultivate inner peace and
            compassion in their everyday lives.
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default Part4;
