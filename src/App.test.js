import { fireEvent, render, screen } from "@testing-library/react";
import Bookingpart from "./components/Bookingpart";

test("Renders the Bookingpart", () => {
  render(<Bookingpart />);
  const submitBtn = screen.getByText("Make Reservation");
  expect(submitBtn).toBeInTheDocument();
});

test("Updates the time correctly", () => {
  render(<Bookingpart />);
  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, { target: { value: "2023-02-05" } });
  const timeDropDown = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeDropDown, { target: { value: "17:00" } });
  expect(timeDropDown.value).toEqual("17:00");
});