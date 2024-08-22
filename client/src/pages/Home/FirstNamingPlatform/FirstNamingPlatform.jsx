import { Link } from 'react-router-dom';
import styles from './FirstNamingPlatform.module.sass';
import data from './data';
import CONSTANTS from './../../../constants';

const { STATIC_IMAGES_PATH } = CONSTANTS;

function FirstNamingPlatform () {
  const mapItems = ({ icon, title, body }, i) => (
    <li key={i} className={styles.featureItem}>
      <img src={icon} alt='icon' className={styles.featureIcon} />
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureBody}>{body}</p>
    </li>
  );

  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>
        Atom: The World's #1 Business Naming Platform
      </h2>
      <ul className={styles.featuresList}>{data.map(mapItems)}</ul>
      <div className={styles.premiumMarketplace}>
        <img
          src={`${STATIC_IMAGES_PATH}home/nh-theworld5.svg`}
          alt=''
          className={styles.marketplaceIcon}
        />
        <p className={styles.marketplaceText}>
          The Ultra Premium Marketplace Is Here
        </p>
        <Link to='#' className={styles.exploreButton}>
          Explore now
        </Link>
      </div>
    </section>
  );
}

export default FirstNamingPlatform;
