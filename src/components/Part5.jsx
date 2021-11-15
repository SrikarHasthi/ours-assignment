import "../css/part5.css";
import listicon from "../assets/listicon.svg";
import FaqQuestions from "./FaqQuestions";
let Part5 = () => {
  return (
    <div className="fifth-container">
      <div className="container">
        <h1>Membership</h1>
        <p>6 Months · Semi-Annual</p>
        <div className="payment-details">
          <div className="cost">
            <p>$54</p>
          </div>
          <div className="benefits">
            <h3>What’s included?</h3>
            <ul>
              <li>
                <img alt="" src={listicon} />
                40+ Hatha Yoga Techniques
              </li>
              <li>
                <img alt="" src={listicon} />
                12 Guided Meditations
              </li>
              <li>
                <img alt="" src={listicon} />
                12 Yoga Nidra Lessons
              </li>
              <li>
                <img alt="" src={listicon} />6 Mantra Chants
              </li>
              <li>
                <img alt="" src={listicon} />
                Access to Community Forum
              </li>
              <li>
                <img alt="" src={listicon} />
                Upcoming Features &amp; Content
              </li>
            </ul>
          </div>
        </div>
        <button className="signup-button mt-2">Sign up</button>
        <p className="mt-3">7 Day Free Trial</p>
        <section className="sub-content mt-5">
          <div className="sub-content-h1tag">
            <h1> FAQs</h1>
          </div>
        </section>
        <div className="faq-container">
          <FaqQuestions
            data={[
              "Do I need prior experience to join OURS?",
              "Do I have to do all the daily practices?",
              "How much time do I have to commit each day?",
              "When will I start seeing the benefits?",
              "How long is my membership valid for?",
              "I can’t afford the programme. What should I do?",
              "Will I need any equipment?",
            ]}
          />
        </div>
      </div>
    </div>
  );
};
export default Part5;
