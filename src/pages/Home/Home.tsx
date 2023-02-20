import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Footer, Hero, Navbar } from '@/components';
import { useTestimonial } from '@/hooks';
import { AppStore } from '@/redux/store';

const Home = () => {
  const { testimonials } = useSelector((state: AppStore) => state.testimonials);
  const { handleGetTestimonials } = useTestimonial();

  useEffect(() => {
    handleGetTestimonials();
  }, []);

  return (
    <>
      <Navbar />
      <Hero
        title="LoyalFriend is the first comprehensive veterinary service at home in Chilca"
        description=" Chilca – San José – Las Salinas – Pucusana"
        img="/assets/ui/mascots.png"
      />

      <section className="about__grid animate__animated animate__fadeInLeft">
        <div className="about__welcome">
          <h2 className="about__welcome-title">Welcome to LoalyFriend</h2>
          <p className="about__welcome-text">
            Lorem ipsum dolor sit amet dolor elit eos takimata dolores facilisis ea esse enim ad sit magna. Ipsum
            euismod at lorem sadipscing ea stet dolor et. No mazim sed takimata minim molestie sit sanctus zzril rebum
            erat odio lorem sed. Invidunt congue accusam molestie amet at nulla justo ipsum eu nonumy diam sed volutpat
            dolore accusam. Invidunt dolore no ea nisl molestie odio ut rebum eirmod amet duo vel labore.
          </p>
          <p className="about__welcome-hours">
            In addition, we serve Saturdays and Sundays <br /> from 10:00 a.m. to 8:00 p.m. horas.
            <br /> ¡Because the health of your pet does not understand holidays!
          </p>
        </div>
        <div className="about__data">
          <div className="about__data-phone">
            <i className="fa-solid fa-phone-volume about__data-icon"></i>
            <div>
              <p>Phone: Appointments and Emergencies</p>
              <h3>5892065</h3>
            </div>
          </div>
          <div className="about__data-email">
            <i className="fa-solid fa-house-chimney about__data-icon-home"></i>
            <div>
              <p>Email Contact</p>
              <h3>loyalfriend@gmail.com</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="services__grid animate__animated animate__fadeInRight">
        <div className="services__info">
          <i className="fa-solid fa-suitcase-medical services__icon"></i>
          <h3 className="services__text">
            24h emergencies / <br /> 365 days
          </h3>
        </div>

        <div className="services__info">
          <i className="fa-solid fa-user-doctor services__icon"></i>
          <h3 className="services__text">
            Consultations and <br /> Reviews
          </h3>
        </div>

        <div className="services__info">
          <i className="fa-solid fa-heart-pulse services__icon"></i>
          <h3 className="services__text">
            Vaccinations and <br /> Deworming
          </h3>
        </div>

        <div className="services__info">
          <i className="fa-solid fa-tooth services__icon"></i>
          <h3 className="services__text">
            Dental Surgeries and <br /> Cleanings
          </h3>
        </div>

        <div className="services__info">
          <i className="fa-solid fa-paw services__icon"></i>
          <h3 className="services__text">
            Diagnostic <br /> Imaging
          </h3>
        </div>

        <div className="services__info">
          <i className="fa-solid fa-file-waveform services__icon"></i>
          <h3 className="services__text">Clinical Analysis</h3>
        </div>
      </section>

      <section className="delivery animate__animated animate__fadeIn">
        <h2>¿Why do we delivery?</h2>
        <p>
          Because at LoyalFriend we think that neither you nor your pets deserve the long and uncomfortable waits of
          traditional clinics. You will save time and comfort! In addition, you will avoid the risk of contagion of
          infectious diseases, especially if your pet is in its first months of life or is sick, that is, with low
          defenses.
        </p>
      </section>

      <section className="testimonials__grid animate__animated animate__fadeIn">
        {/* {!status && arrayTest.map(() => <LoaderTestimonial key={crypto.randomUUID()} />)} */}

        {testimonials.length > 0 ? (
          <>
            {testimonials.map(({ _id, testimonial, user }) => (
              <div key={_id} className="testimonial__card">
                <div className="testimonial__card-text">
                  <i className="fa-solid fa-quote-left testimonial__quote"></i>
                  <p>{testimonial}</p>
                </div>
                <div className="testimonial__card-author">
                  <img src="/assets/ui/user.webp" alt="profile" />
                  <h3>{user.fullname}</h3>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="no-results">No testimonials</p>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Home;
