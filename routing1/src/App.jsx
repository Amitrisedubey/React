import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/product";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:userid" element={<UserDetails />}></Route>
        <Route path="/product/:id" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
