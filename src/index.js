import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Baner from "./Components/Baner";
import Slider from "./Components/Slider";
import Catalogo from "./Components/Catalogo";
import Copy from "./Components/Copy";
import Input from "./Components/Input";
import Adicional from "./Components/Adicional";

const App = () => {
  return (
    <div>
      <Header />
      <Baner />
      <Slider />
      <Catalogo />
      <Input />
      <Adicional />
      <Copy />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
