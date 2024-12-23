import "./App.css";

import { MainForm } from "./PageForms/MainForm";
import { Header } from "./PageForms/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
