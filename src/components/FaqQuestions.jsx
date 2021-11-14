import arrow from "../assets/Vector.png";
let FaqQuestions = (props) => {
  return (
    <>
      {props.data.map((e) => {
          return(
        <div className="faq-question-section">
          <div className="faq-question">
            <p>{e}</p>
            <img src={arrow} />
          </div>
          <div className="line-break"></div>
        </div>)
      })}
    </>
  );
};
export default FaqQuestions;
