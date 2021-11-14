import logo from "../assets/OURS Logo (White) 2.svg";
let Header = () => {
  return (
    <div className="header">
      <div class="d-flex ">
        <div class="p-2 flex-grow-1">
          <div className="logo-container">
            <img className="logo-img" src={logo} />
            <span>OURS</span>
          </div>
        </div>
        <div class="p-2">
          <button className="login-button">Log in</button>
        </div>
        <div class="p-2">
          <button className="signup-button">Sign up</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
