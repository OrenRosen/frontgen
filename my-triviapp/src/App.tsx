import "./App.css";
import { Outlet } from "react-router";
import NavBar from "./components/Navbar";

function App(props = {}) {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
