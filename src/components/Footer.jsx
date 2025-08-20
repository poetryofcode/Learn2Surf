import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import whatsapp from "../assets/whatsapp.svg";
import footerlogo from "../assets/footer-logo.png";
import styles from "./Footer.module.scss";
export default function Reviews() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <h1 className={styles.footer__title}>surf school</h1>
        <a href="#" className={styles.footer__logo}>
          <img src={footerlogo} alt="" />
        </a>
      </div>
      <div className={styles.footer__info}>
        <dl className={styles.footer__infolist}>
          <div className={styles.footer__infoitem}>
            <dt>Surf School</dt>
            <dd>
              record n.325 <br /> Portuguese Surfing Federation
            </dd>
            <dd>RNAAT registration 986/2016</dd>
          </div>
          <div className={styles.footer__infoitem}>
            <dt>Address</dt>
            <dd>
              record n.325
              <br />
              Portuguese Surfing Federation
            </dd>
            <dd>Vilamoura - Algarve - Portugal</dd>
          </div>
          <div className={styles.footer__infoitem}>
            <dt>Contacts</dt>
            <dd>
              Mobil and wattsapp <br /> (+351) 912568342
            </dd>
            <dd>vilamourasurf@gmail.com</dd>
          </div>
        </dl>
      </div>
      <div className={styles.footer__bottom}>
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
        <ul className={styles.footer__nav}>
          <li className={styles.footer__navitem}>
            <a href="#" className={styles.footer__navlink}>
              Terms and conditions
            </a>
          </li>
          <li className={styles.footer__navitem}>
            <a href="#" className={styles.footer__navlink}>
              Privacy policy
            </a>
          </li>
          <li className={styles.footer__navitem}>
            <a href="#" className={styles.footer__navlink}>
              Complaint book
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
