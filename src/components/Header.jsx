import phone from "../assets/phone.svg";

export default function Header() {
  return (
    <header>
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
            <a className="phone" href="tel:+14434451191">
              <img src={phone} alt="phone" />
              +1(443)445-1191
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
