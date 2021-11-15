import arrow from "../assets/Vector.png";
let FaqQuestions = (props) => {
  return (
    <>
      {props.data.map((e,index) => {
          return(
        <div className="faq-question-section" key={index}>
          <div className="faq-question">
            <p>{e}</p>
            <img alt="" src={arrow} />
          </div>
          <div className="line-break"></div>
        </div>)
      })}
    </>
  );
};
export default FaqQuestions;
