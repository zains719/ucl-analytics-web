import styles from './LandingPage.module.scss'
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-scroll';


const LandingPage = () => {
  return (
      <div className={styles.container}>
          <div className={styles.topBanner}>
            <img src="/images/banner-image.jpeg" alt="" />
            <Link to="whoWeAre" smooth offset={-70}>
              <FiChevronDown className={styles.arrow} size="60px" color="white" />
            </Link>
          </div>
        <div className={styles.intro} id="whoWeAre" >
          <h1>&quot;WHO WE ARE&quot;</h1>
          <p>
              Adorea Analytics is a student-led venture which carries out financial research 
              in developing countries in order to seek the potential for future involvement in international markets.
          </p>
          <p>
            Adorea Analytics studies the countries&apos; fundamentals and how innovation took place in those areas considering 
            different parameters, including access to technology, demographic changes, government restructuring and raw materials.
          </p>
        </div>
        <div className={styles.images}>
            <div className={styles.peopleImage}>
              <h1>OUR PEOPLE</h1>
            </div>
            <div className={styles.approachImage}>
              <h1>OUR APPROACH</h1>
            </div>
            <div className={styles.philosophyImage}>
              <h1>OUR PHILOSOPHY</h1>
            </div>
        </div>
        <div className={styles.quote}>
          <p>
            &quot;We are committed to fostering global social progress. Being inspired by an ever more connected world, 
            we believe areas that were once marginalised have now progressive prospects of increasing their exposure 
            and will catalyse new opportunities for future generations.&quot;
          </p>
          <p className={styles.caption}>
            NICOLÓ L.ANDRETTA
            <br />
            PRESIDENT, FOUNDER
          </p>
        </div>
      </div>
  )
}

export default LandingPage