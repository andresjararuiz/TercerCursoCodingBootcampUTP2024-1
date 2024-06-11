import "./App.css";
import RenderAPI from "./components/RenderApi.jsx";
import Header from "./images/header.png";
import "./styles/Header.css";
// import AlterEgoRender from "./components/AlterEgoRender.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <img src={Header} alt="header" />
      </header>
      <RenderAPI />
    </div>
  );
}

export default App;
