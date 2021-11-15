import logo from "../assets/OURS Logo (White) 2.svg";
let Header = () => {
  return (
    <div className="header">
      <div className="d-flex ">
        <div className="p-2 flex-grow-1">
          <div className="logo-container">
            <img alt="" className="logo-img" src={logo} />
            <span>OURS</span>
          </div>
        </div>
        <div className="p-2">
          <button className="login-button">Log in</button>
        </div>
        <div className="p-2">
          <button className="signup-button">Sign up</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
