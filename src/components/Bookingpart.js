import React, { useState } from "react";
import axios from "axios";

const Bookingpart = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/reservation-endpoint", {
        date,
        time,
        guests,
        occasion,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="bookingformpart">
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            maxWidth: "200px",
            gap: "20px",
            paddingTop: "5rem",
          }}
        >
          <label for="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label for="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label for="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
          />
          <label for="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <button type="submit">Make Your reservation</button>
        </form>
      </div>
    </>
  );
};

export default Bookingpart;
