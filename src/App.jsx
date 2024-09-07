import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import Cart from "./Components/Cart";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
