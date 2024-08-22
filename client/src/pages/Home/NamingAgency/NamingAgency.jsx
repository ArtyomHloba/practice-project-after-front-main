import { Link } from 'react-router-dom';
import styles from './NamingAgency.module.sass';
import data from './data';

function NamingAgency () {
  const mapItem = ({ icon, title, body }) => (
    <li>
      <img src={icon} alt='icon' />
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionContentContainer}>
        <h2 className={styles.sectionTitle}>
          Like A Naming Agency, But Better
        </h2>
        <p className={styles.sectionContent}>
          With Atom's managed contests, leverage our team's naming expertise and
          our pool of 300K+ naming experts. Our hybrid-solution partners you
          with a trained Atom branding consultant who will guide your
          crowdsourcing process step-by-step to get the best results possible.
        </p>
      </div>
      <div className={styles.sectionCards}>
        <ul>{data.map(mapItem)}</ul>
      </div>
      <Link to='#' className={styles.orangeBtn}>
        Learn More
      </Link>
    </section>
  );
}

export default NamingAgency;
