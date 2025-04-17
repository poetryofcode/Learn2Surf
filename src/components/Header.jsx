import phone from "../assets/phone.svg";
import title from "../assets/title.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import whatsapp from "../assets/whatsapp.svg";
import news from "../assets/news-img.jpg";
import "../index.css";
// import { useState } from "react";

export default function Header() {
  // const [response, setResponse] = useState("");
  // async function fetchHandler() {
  //   const request = await fetch("http://localhost:3000");
  //   const text = await request.text();
  //   setResponse(text);
  // }
  return (
    <header>
      {/* <button onClick={fetchHandler}>Fetch data</button>
      <p>{response}</p> */}
      <div className="container">
        <div className="header__top">
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  home
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  activities
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  pricing plan
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  contact us
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  blog
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  about us
                </a>
              </li>
            </ul>
          </nav>
          <a className="phone" href="tel:+14434451191">
            <img src={phone} alt="phone" />
            +1(443)445-1191
          </a>
        </div>
        <img className="title-img" src={title} alt="title" />
        <h1 className="title">Surfing school</h1>
        <p className="title-text">Vilamoura, Portugal</p>
        <div className="header__content">
          <div className="header__info">
            <ul className="header__info-list">
              <li className="header__info-item">Private lessons</li>
              <li className="header__info-item">Group lessons</li>
              <li className="header__info-item">Surf & Sup rentals</li>
              <li className="header__info-item">Stand up puddle</li>
              <li className="header__info-item">Surf trips</li>
            </ul>
            <div className="header__social">
              <ul className="header__social-list">
                <li className="header__social-item">
                  <a className="header__social-link" href="#">
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
                <li className="header__social-item">
                  <a className="header__social-link" href="#">
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
                <li className="header__social-item">
                  <a className="header__social-link" href="#">
                    <img src={youtube} alt="youtube" />
                  </a>
                </li>
                <li className="header__social-item">
                  <a className="header__social-link" href="#">
                    <img src={whatsapp} alt="whatsapp" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header__news">
            <div className="header__news-box">
              <h3 className="header__news-title">NAZARE. BIG WAvE TRIP</h3>
              <time className="header__news-subtitle">10/02/2025</time>
              <a className="header__news-link" href="#">
                more info
              </a>
              <img src={news} alt="news" />
            </div>
          </div>
          <div className="header__buttons">
            <a className="header__buttons-book">book now</a>
            <a className="header__buttons-activities">activities</a>
          </div>
        </div>
      </div>
    </header>
  );
}
