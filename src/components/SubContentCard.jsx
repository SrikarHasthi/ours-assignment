let SubContentCard = (props) => {
  return (
    <section className="sub-content mt-5">
      <div className="sub-content-h1tag">
        <h1> {props.head}</h1>
      </div>
      <div className="row sub-content-row mt-5">
        {props.data.map((e,index) => {
          return (
            <div key={index}>
              <img alt="" src={e.imgsrc} />
              <h2>{e.h1tagdata}</h2>
              <p>{e.ptagdata}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default SubContentCard;
