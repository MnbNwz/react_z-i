import "./header.css";
import Announcement from "./Announcement";
const Header = () => {
  const anchor = (text) => (
    <a target="_blank" rel="noreferrer" href="https://www.google.com/">
      {text}
    </a>
  );
  const HeaderContainer = () => (
    <header>
      <div className="container" style={{ paddingTop: 10, paddingBottom: 10 }}>
        <div className="row">
          <div className="col-4">
            <div className="header-logo">
              <img src={require("../../images/ZI PNG.png")} alt="Z & I Logo" />
            </div>
          </div>
          <div className="col-8">
            <ul className="header-menu">
              <li>{anchor("Home")}</li>
              <li>{anchor("About us")}</li>
              <li>{anchor("Services")}</li>
              <li>{anchor("Our Fleet")}</li>
              <li>{anchor("Testimonials")}</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );

  return (
    <>
      <Announcement />
      {HeaderContainer()}
    </>
  );
};

export default Header;
