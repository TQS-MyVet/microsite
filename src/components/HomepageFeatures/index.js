import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import image1 from '@site/static/img/Booking.png';
import image2 from '@site/static/img/Check-In.png';
import image3 from '@site/static/img/doctor.png';

const FeatureList = [
  {
    title: 'Booking and Attending Appointments',
    ImgSrc: image1,
    description: (
      <>
        Our clinic provides a seamless experience for scheduling and attending veterinary appointments. Whether you prefer to book your appointment in person or from the comfort of your home, our system is designed to accommodate your needs.
      </>
    ),
  },
  {
    title: 'Efficient Check-In Options',
    ImgSrc: image2,
    description: (
      <>
        We offer flexible check-in options to suit every pet owner's situation. You can check in at our clinic upon arrival or use our mobile app to check in remotely, saving you time and streamlining your visit.
      </>
    ),
  },
  {
    title: 'Comprehensive Care and Follow-Up',
    ImgSrc: image3,
    description: (
      <>
        Our clinic is committed to providing thorough care for your pets. Access your pet’s appointment history and medical records through our user-friendly web and mobile platforms to stay informed about their health and care.
      </>
    ),
  },
];

function Feature({ ImgSrc, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={ImgSrc} alt={title} style={{ width: "250px" }} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}