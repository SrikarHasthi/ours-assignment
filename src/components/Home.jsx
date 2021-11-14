import "../css/home.css";
import I1 from "../assets/I1 1.svg";
import arrow from "../assets/Vector.png";
import bhagavgita from "../assets/bhagavgita 2.svg";
import nonduality from "../assets/non duality 1.svg";
import selfinquiry from "../assets/self inquiry 1.svg";
import Part2 from "./Part2";
import Part3 from "./Part3";
import SubContentCard from "./SubContentCard";
import Part4 from "./Part4";
import Part5 from "./Part5";
import Footer from "./Footer";
import Header from "./Header";
let Home = () => {
  return (
    <>
    <Header/>
        <div class="custom-container">
        <div className="main-content">
          <div className="main-photo">
            <img src={I1} />
          </div>
          <section>
            <h1>Live a Yogic Lifestyle</h1>
            <p>
              A Daily Practice consisting of Yoga, Meditation, Chanting and Yoga
              Nidra, led by Traditional Indian Practitioners.
            </p>
            <button className="mt-3">Get Early Access</button>
          </section>
          <img className="arrow mt-5" src={arrow} />
          <SubContentCard
            head="Why OURS?"
            data={[
              {
                imgsrc: bhagavgita,
                h1tagdata: "Traditional",
                ptagdata:
                  "Designed by alumni of the oldest Yoga institutes in India.",
              },
              {
                imgsrc: nonduality,
                h1tagdata: "Holistic",
                ptagdata:
                  "A set of daily practices for your mind, body and spirit.",
              },
              {
                imgsrc: selfinquiry,
                h1tagdata: "For Beginners",
                ptagdata:
                  "Master the basics, and unlock new techniques as you progress.",
              },
            ]}
          />
        </div>
        <Part2 />
        <Part3 />
        <Part4 />
        <Part5 />
        <Footer />
      </div>
</>
  );
};
export default Home;
