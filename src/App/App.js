import { HashRouter } from "react-router-dom";
import Header from "../view/Header/index.js";
import Main from "../view/Main/index.js";
import Footer from "../view/Footer/index.js";
import "./App.css";

function App() {
  return (
    <div class="flex flex-col h-screen justify-between">
      <HashRouter>
        <Header />
        <Main />
      </HashRouter>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
