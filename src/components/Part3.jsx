import "../css/part3.css";
import yoga from "../assets/yoga sutra 1.svg";
import Compassion from "../assets/Compassion 1.svg";
import consciousness from "../assets/consciousness 1.svg";
import SubContentCard from "./SubContentCard";
import program1photo from "../assets/Group 110.svg";
import program2photo from "../assets/Group 118.svg"
import program3photo from "../assets/Group 108.svg";
import program4photo from "../assets/Group 109.svg";
let Part3 = () => {
  return (
    <div className="container third-container">
      <div className="content-container-3">
        <div className="heading">
          <h1>Sādhāna</h1>
          <p>Your Daily Practice for Holistic Wellbeing</p>
        </div>
        <div className="program-details">
          <div className="program-card">
            <div className="program-photo">
              <img src={program1photo} />
              <div className="program-time">7:00 AM</div>
            </div>
            <div className="program-data">
              <div className="heading">
                <h2>Haṭha Yoga</h2>
                <p className="duration">30 min</p>
              </div>

              <p className="ledby">Led by <b>Harshvardhan Jhaveri</b></p>
              <p>Alumni of <b>Kaivalyadham Yoga Institute</b></p>
              <p>
                Start your day with a combination of Postures (Āsana) and
                Breathwork (Prāṇāyāma) to balance the energy in your body and
                enhance meditation.
              </p>
            </div>
          </div>
          <div className="program-card">
            <div className="program-photo">
              <img src={program2photo} />
              <div className="program-time">10:00 PM</div>
            </div>
            <div className="program-data">
              <div className="heading">
                <h2>Meditation</h2>
                <p className="duration">10 min</p>
              </div>
              <p className="ledby">Led by <b>Gunjan Sugandhi</b></p>
              <p>Alumni of <b>The Yoga Institute</b></p>
              <p>
                End the day with Yoga Nidra, an ancient relaxation tool for
                achieving Withdrawal (Pratyāhāra). It is a state of
                consciousness between the waking and dreaming.
              </p>
            </div>
          </div>
          <div className="program-card">
            <div className="program-photo">
              <img src={program3photo} />
              <div className="program-time">6:00 PM</div>
            </div>
            <div className="program-data">
              <div className="heading">
                <h2>Mantra Chanting</h2>
                <p className="duration">10 min</p>
              </div>

              <p>
                Artists: <b>Anurag Dhoundeyal + Nrtya, Jahaan Shah + Srishti Biyani</b>
              </p>
              <p>
                Concentration (Dhāraṇā) through the repetitive chanting of
                sacred words in Sanskrit helps release positive energy, which
                leads to lasting inner peace.
              </p>
            </div>
          </div>
          <div className="program-card">
            <div className="program-photo">
              <img src={program4photo} />
              <div className="program-time">10:00 PM</div>
            </div>
            <div className="program-data">
              <div className="heading">
                <h2>Yoga Nidra</h2>
                <p className="duration">10 min</p>
              </div>
              <p className="ledby">Led by <b>Gunjan Sugandhi</b></p>
              <p>Alumni of <b>The Yoga Institute</b></p>
              <p>
                A morning Meditation (Dhyāna) to calm the mind and detach from
                the senses. An ancient tecnique to help relieve stress and stay
                more present.
              </p>
            </div>
          </div>
          <p className="note">
            <strong>Please note:</strong> The above timings are recommendations only. These
            techniques can be practiced at any time in the day
          </p>
        </div>
      </div>
      <SubContentCard
        head="Benefits"
        data={[
          {
            imgsrc: yoga,
            h1tagdata: "Physical Wellbeing",
            ptagdata: "Increased flexibility, stamina and physical strength",
          },
          {
            imgsrc: Compassion,
            h1tagdata: "Mental Wellbeing",
            ptagdata:
              "Increased flexibImproved emotional stability and clarity of thoughtility, stamina and physical strength",
          },
          {
            imgsrc: consciousness,
            h1tagdata: "Spiritual Wellbeing",
            ptagdata: "Enhanced sense of positivity, intuition and gratitude",
          },
        ]}
      />
    </div>
  );
};
export default Part3;
