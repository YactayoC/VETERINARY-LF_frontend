import { Footer, Hero, Navbar } from '@/components';

const Services = () => {
  document.title = 'LoyalFriend | Services';

  return (
    <>
      <Navbar />
      <Hero title={'Services'} />

      <div className="section__services container">
        <div className="section__services-div animate__animated animate__fadeInLeft">
          <img className="section__services-img section__services-img--1" src="/assets/ui/support.png" alt="img" />
          <div className="section__services-info">
            <h2>Emergency service 365 days a year</h2>
            <p>
              Because for you and for us the health of your pets comes first, we are by your side 24 hours a day, 365
              days a year.
            </p>
            <button>Call Us</button>
          </div>
        </div>

        <div className="section__services-div animate__animated animate__fadeInRight">
          <img className="section__services-img section__services-img--2" src="/assets/ui/mascot_vet.png" alt="img" />
          <div className="section__services-info">
            <h2>Clinical consultations and reviews</h2>
            <p>
              At Autovet the health of your pet is our highest priority. For this reason, when something does not go
              well in it, we will visit you in the best possible environment, your home, and we will prescribe the best
              treatment so that it becomes the same as always.
            </p>
            <button>Request an Appointment</button>
          </div>
        </div>

        <div className="section__services-div animate__animated animate__fadeInLeft">
          <div>
            <img className="section__services-img section__services-img--3" src="/assets/ui/dog.jpg" alt="img" />
            <img className="section__services-img section__services-img--3" src="/assets/ui/cat.jpg" alt="img" />
          </div>

          <div className="section__services-info">
            <h2>Preventive medicine: Vaccinations and deworming</h2>
            <p>
              The saying goes that prevention is better than cure. That is why from Autovet we have the following
              vaccinations at your disposal:
            </p>
            <ul>
              <li>Complete vaccination programs for puppies and kittens</li>
              <li>Annual rabies or "complete" vaccination for dogs</li>
              <li>Vaccine against kennel cough (Canine infectious tracheobronchitis)</li>
              <li>Feline panleukopenia, rhinotracheitis and calicivirus vaccines</li>
              <li>Vaccine against leishmaniasis (Canileish® and LetiFend®)</li>
              <li>Filariasis "Vaccine" (Guardian®)</li>
              <li>Annual myxomatosis and viral hemorrhage vaccine for rabbits</li>
            </ul>
            <p>
              And we also offer you the best products to prevent the appearance of intestinal parasites and external
              parasites, either in the form of tablets, pipettes or collars.
              <br />
              <br />
              If you have any questions related to this topic just ask us!
            </p>
            <button>Request an Appointment</button>
          </div>
        </div>

        <div className="section__services-div animate__animated animate__fadeInRight">
          <img className="section__services-img section__services-img--4" src="/assets/ui/teeth.jpg" alt="img" />
          <div className="section__services-info">
            <h2>Dental surgery and cleanings</h2>
            <p>
              We are associated with a veterinary clinic equipped with the best operating room for those occasions when
              your pet may require surgery.
            </p>
            <p>
              Our priority is to perform quality surgeries always with a continuous monitoring of the patient's vital
              signs and to carry out a perfect post-operative management of the patient to avoid the appearance of
              unwanted discomfort.
            </p>
            <p>We also perform dental cleanings to restore the whiteness of your pet's smile when needed.</p>
            <p>And all this by picking up your pet at your home and bringing it back at no extra cost.</p>
            <button>Request an Appointment</button>
          </div>
        </div>

        <div className="section__services-div animate__animated animate__fadeInLeft">
          <img className="section__services-img section__services-img--5" src="/assets/ui/diagnostic.jpg" alt="img" />
          <div className="section__services-info">
            <h2>Diagnostic imaging</h2>
            <p>We have digital radiography and ultrasound equipment.</p>
            <p>
              These diagnostic tools are essential in some clinical pictures in order to reach a definitive diagnosis
              and therefore to prescribe the best treatment.
            </p>
            <button>Request an Appointment</button>
          </div>
        </div>

        <div className="section__services-div animate__animated animate__fadeInRight">
          <img className="section__services-img section__services-img--6" src="/assets/ui/clinic.jpg" alt="img" />
          <div className="section__services-info">
            <h2>Clinical analysis and diagnostic tests</h2>
            <p>
              Clinical analyses (blood, urine, etc.) are a fundamental tool to objectively evaluate the health status of
              pets in the presence of certain pathologies.
            </p>
            <p>
              In addition, for older pets, it is advisable to perform a blood test every year to evaluate the general
              state of health.
            </p>
            <p>On the other hand, all kinds of diagnostic tests are available:</p>
            <ul>
              <li>Heartworm (filariasis) and leishmaniasis test</li>
              <li>Parvovirus test</li>
              <li>Feline immunodeficiency and leukemia test</li>
            </ul>
            <p>
              If you are interested in another type of test or have any questions, call us or write us without
              obligation! We will be happy to help you.
            </p>
            <button>Request an Appointment</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
