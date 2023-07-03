import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookForm from "./pages/BookForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookForm />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
