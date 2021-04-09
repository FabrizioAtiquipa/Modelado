import React from "react";
import "./Css/menu.css";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#home">Sonido</a>
        </li>
        <li class="dropdown">
          <a href="#" class="dropbtn">
          Audio
          </a>
          <div class="dropdown-content">
            <a href="#">Descarga</a>
            <a href="#">Mis Audios</a>
          </div>
        </li>
        <li class="liizq">
          <a href="#news">Login</a>
        </li>
        <li class="liizq">
        </li>
      </ul>
    </div>
  );
}
