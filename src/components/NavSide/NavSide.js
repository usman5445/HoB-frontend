import React, { useState } from "react";
import { SidebarData } from "./SidebarData";
import "./NavSide.css";
import { Modal } from "react-bootstrap";
import Login from "../../components/login/login";
import burgermenu from "../../assests/Burger Menu.svg";
import Search from "../../assests/Search.svg";
import heart from "../../assests/Outline-Heart.svg";
import cart from "../../assests/Empty.svg";
import cross from "../../assests/X.svg";
import smile from "../../assests/smilegreylogo.svg";
import logo from "../../assests/logo.svg";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Login />
      </Modal.Body>
    </Modal>
  );
}

const NavSide = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <div className="container-fluid nav">
          <div className="navbar-brand" style={{ border: "none" }}>
            <button
              className="menuBtn"
              onClick={showSidebar}
              style={{ background: "white", border: "none" }}
            >
              <img src={burgermenu} alt="..."></img>
            </button>
          </div>
          <form className="d-flex" role="search">
            <img className="me-3" src={Search} alt="..."></img>
            <img className="me-3" src={cart} alt="..."></img>
            <img className="me-3" src={heart} alt="..."></img>
          </form>
        </div>
      </div>
      <nav
        className={sidebar ? "nav-menu active" : "nav-menu"}
        style={{ zIndex: 5 }}
      >
        <div className="Navside Cont d-flex align-items-center justify-content-center flex-column">
          <div className="upperCont d-flex align-items-center justify-content-center flex-row">
            <span className="HOBLOGO">
              <img src={logo} style={{ width: "8rem" }} alt="..." />
            </span>
            <span className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <button className="menu-bars" style={{ border: "none" }}>
                  <img src={cross} alt="..." />
                </button>
              </li>
            </span>
          </div>
          <hr />
          <div
            className="middleCont d-flex align-items-center justify-content-center flex-column"
            style={{ height: "60vh" }}
          >
            <ul className="navigation-items">
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <a href={item.path}>
                      <img src={smile} alt="..." />
                      <span>{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <hr />
          </div>
          <div className="lastCont">
            <div className="MyAccount" onClick={() => setModalShow(true)}>
              MY ACCOUNT
            </div>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavSide;
