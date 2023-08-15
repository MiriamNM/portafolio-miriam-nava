import Header from "../view/Header/index.js";
import Main from "../view/Main/index.js";
import Footer from "../view/Footer/index.js";

function App() {
  return (
    <div class="flex flex-col h-screen justify-between">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
