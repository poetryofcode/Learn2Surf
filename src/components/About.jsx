import about from "../assets/about.jpg";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__content">
            <p className="about__subtitle">Who we are</p>
            <h2 className="about__title">Kailua SURF SCHOOL</h2>
            <ul className="about-list">
              <li className="about-item">
                <h4>Algarve</h4>
              </li>
              <li className="about-item">
                <h4>South coast</h4>
              </li>
              <li className="about-item">
                <h4>Perfect waves for your experience</h4>
              </li>
            </ul>
            <div className="about__text">
              <p>
                Was founded in 2006, being the FIRST SURF SCHOOL OF KAILUA
                BEACH, ALGARVE. Our school is certified by the Hawaii Surfing
                Federation and by Turismo de Hawaii. The School aims to teach
                the art of surfing the waves in a safe, correct and relaxed way,
                always under the close and attentive supervision of teachers.
                Thousands of people have already learned from us to slide on the
                wave wall on top of a board.
              </p>
              <p>
                We have facilities that allow our students to equip themselves
                and keep their belongings safe and at the end of the class they
                have a warm shower at their disposal. We have a wide variety of
                safe boards (softboards) and modern wetsuits to teach in a safe
                and fun way. The heads of the School are trained by the Faculty,
                experienced and accredited by the Hawaii Surf Federation. The
                School is open everyday of the year, including weekends and
                holidays. Hours vary depending on tides and sea conditions.
              </p>
            </div>
          </div>
          <div className="about__img">
            <img src={about} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
