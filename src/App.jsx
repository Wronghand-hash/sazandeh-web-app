import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/navbar";
import ContactUs from "./views/contactUs";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full App">
      <Navbar />
      <ContactUs />
    </div>
  );
}

export default App;
