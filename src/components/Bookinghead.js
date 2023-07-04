import Restaurant from "../images/Restaurant.jpg"
import "./Bookinghead.css"
const Bookinghead = () => {
  return (
    <>
      <div className="headbooking">
        <h1>Booking</h1>
        <img src={Restaurant}alt="pic for booking" />
      </div>
    </>
  );
};

export default Bookinghead;
