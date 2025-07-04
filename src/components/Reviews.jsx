import rev1 from "../assets/rev-1.jpg";
import rev2 from "../assets/rev-2.jpg";
import rev3 from "../assets/rev-3.jpg";
import rev4 from "../assets/rev-4.jpg";
export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews__top">
          <p className="reviews__subtitle">Reviews</p>
          <h2 className="reviews__title">let's go surf & sup</h2>
          <div className="reviews__items">
            <div className="reviews__item">
              <img className="reviews__img" src={rev1} alt="" />
              <blockquote className="blockquote">
                <p className="blockquote__text">
                  "I rented the whole equipment for 7 days. New GEAR! 10 stars."
                </p>
                <cite className="blockquote__cite">/Ana</cite>
                <time className="blockquote__time">July 2025</time>
              </blockquote>
            </div>
            <div className="reviews__item">
              <img className="reviews__img" src={rev2} alt="" />
              <blockquote className="blockquote">
                <p className="blockquote__text">
                  "It was an unforgettable experience. The super professional
                  instructors. I loved it!"
                </p>
                <cite className="blockquote__cite">/Sara</cite>
                <time className="blockquote__time">October 2025</time>
              </blockquote>
            </div>
            <div className="reviews__item">
              <img className="reviews__img" src={rev3} alt="" />
              <blockquote className="blockquote">
                <p className="blockquote__text">
                  "I rented the whole equipment for 7 days. New GEAR! 10 stars."
                </p>
                <cite className="blockquote__cite">/Ana</cite>
                <time className="blockquote__time">July 2025</time>
              </blockquote>
            </div>
            <div className="reviews__item">
              <img className="reviews__img" src={rev4} alt="" />
              <blockquote className="blockquote">
                <p className="blockquote__text">
                  The best experiens in my life
                </p>
                <cite className="blockquote__cite">/Tom</cite>
                <time className="blockquote__time">March 2026</time>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
