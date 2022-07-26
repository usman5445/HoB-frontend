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
import Profile from "../../assests/Profile.svg";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const showSidebar = () => setSidebar(!sidebar);

  function handleGoToCart() {
    if (!JSON.parse(localStorage.getItem("customer"))?.accessToken) {
      setModalShow(true);
    } else {
      navigate("/cart");
    }
  }

  return (
    <>
      <div className="navbar" style={{ border: "none", position: "sticky" }}>
        <div
          className="container-fluid"
          style={{ border: "none", position: "sticky" }}
        >
          <div
            className="navbar-brand"
            style={{ border: "none", position: "sticky" }}
          >
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
            <a onClick={handleGoToCart}>
              <img className="me-3" src={cart} alt="..."></img>
            </a>
            <img className="me-3" src={heart} alt="..."></img>
          </form>
        </div>
      </div>
      <nav
        className={sidebar ? "nav-menu active" : "nav-menu"}
        style={{ zIndex: 10 }}
      >
        <div
          className="Navside Cont d-flex align-items-center justify-content-center flex-column "
          style={{ width: "100%" }}
        >
          <div
            className="upperCont d-flex align-items-center justify-content-center flex-row "
            style={{ width: "100%", height: "25vh" }}
          >
            <span className="HOBLOGO" style={{ paddingLeft: "1rem" }}>
              <img src={logo} style={{ width: "8rem" }} alt="..." />
            </span>
            <span
              className="nav-menu-items"
              onClick={showSidebar}
              style={{ height: "100%" }}
            >
              <li className="navbar-toggle" style={{ height: "100%" }}>
                <button className="menu-bars" style={{ border: "none" }}>
                  <img src={cross} alt="..." />
                </button>
              </li>
            </span>
          </div>
          <hr />
          <div
            className="middleCont d-flex align-items-center justify-content-center flex-column "
            style={{ height: "55vh", width: "100%" }}
          >
            <ul className="navigation-items" style={{ width: "100%" }}>
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
          <div
            className="lastCont d-flex align-items-center justify-content-center flex-row"
            style={{ height: "8vh" }}
          >
            <div className="MyAccount" onClick={() => setModalShow(true)}>
              <div
                className="Myaccountlogo d-flex align-items-center justify-content-center flex-row"
                style={{ cursor: "pointer" }}
              >
                <img src={Profile}></img>
                <div className="Myaccounttext mx-4">MY ACCOUNT</div>
              </div>
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
