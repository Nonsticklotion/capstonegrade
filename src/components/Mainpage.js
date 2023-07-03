import { Link } from "react-router-dom";
import Food from "../images/Food.jpg";
import "./Mainpage.css";
import Menu from "./Menu";

const Mainpage = () => {
  return (
    <>
      <header
        style={{
          display: "flex",
          padding: "0 15%",
          backgroundColor: "#495e57",
          height: "420px",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <div className="main">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="button">
            <Link
              to="booking"
              style={{ textDecoration: "none", color: "black" }}
            >
              Reserve a table
            </Link>
          </button>
        </div>
        <div className="mainpic">
          <img src={Food} alt="foodpic" />
        </div>
      </header>
      <Menu />
    </>
  );
};
export default Mainpage;
