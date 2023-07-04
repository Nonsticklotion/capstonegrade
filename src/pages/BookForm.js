import Bookinghead from "../components/Bookinghead";
import Bookingpart from "../components/Bookingpart";
const BookForm = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "0 15%",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "2rem 3rem",
        }}
      >
        <Bookinghead />
        <Bookingpart />
      </div>
    </>
  );
};

export default BookForm;
