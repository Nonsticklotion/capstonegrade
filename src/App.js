import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookForm from "./pages/BookForm";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookForm />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
