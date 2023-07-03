import { Link } from "react-router-dom";
import logo from "../images/Logo.svg";

const Nav = () => {
  return (
    <>
      <header style={{ backgroundColor: "black", color: "white" }}>
        <nav
          style={{
            listStyleType: "none",
            padding: "0 15%",
            display: "flex",
            margin: 0,
            justifyContent: "space-between",
          }}
        >
          <Link to="/" style={{padding : "0",margin : "25px 20px 25px 0"}}>
            <img src={logo} alt="lemonlogo" />
          </Link>
          <ul
            style={{
              listStyleType: "none",
              padding: "1rem",
              display: "flex",
              margin: 0,
            }}
          >
            <li style={{ margin: "10px 20px 20px 0" }}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li style={{ margin: "10px 20px 20px 0" }}>
              <Link style={{ color: "white", textDecoration: "none" }}>
                About
              </Link>
            </li>
            <li style={{ margin: "10px 20px 20px 0" }}>
              <Link style={{ color: "white", textDecoration: "none" }}>
                Menu
              </Link>
            </li>
            <li style={{ margin: "10px 20px 20px 0" }}>
              <Link style={{ color: "white", textDecoration: "none" }}>
                Reservations
              </Link>
            </li>
            <li style={{ margin: "10px 20px 20px 0" }}>
              <Link
                to="/booking"
                style={{ color: "white", textDecoration: "none" }}
              >
                Order Online
              </Link>
            </li>
            <li style={{ margin: "10px 20px 20px 0" }}>
              <Link style={{ color: "white", textDecoration: "none" }}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
