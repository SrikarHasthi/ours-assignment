import "../css/footer.css"
import image5 from "../assets/image 5.svg";
import image3 from "../assets/image 3.svg";
import image4 from "../assets/image 4.svg";
let Footer=()=>{
return (
  <div className="footer-container">
    <div className="footer-line"></div>
    <div className="footer-data">
      <div className="social-media">
        <img src={image5} />
        <img src={image3} />
        <img src={image4} />
      </div>
      <div className="tandc">
        <p>Privacy</p>
        <span className="dot"></span>
        <p>Terms</p>
        <span className="dot"></span>
        <p>Contact</p>
      </div>
      <div className="copyright">
        <p>&copy; OURS Community 2021</p>
      </div>
    </div>
  </div>
);
}
export default Footer;