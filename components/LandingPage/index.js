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
          <h1>WHO WE ARE</h1>
          <p>
              UCL Analytics is a student-led society which carries out financial research 
              in developing countries in order to seek the potential for future involvement in international markets.
          </p>
          <p>
            UCL Analytics studies the countries&apos; fundamentals and how innovation took place in those areas considering 
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
          <img src="/images/quote.png" alt=""/>
          <p>
            WE ARE COMMITTED TO FOSTERING GLOBAL SOCIAL PROGRESS. BEING INSPIRED BY AN EVER MORE CONNECTED WORLD, 
            WE BELIEVE AREAS THAT WERE ONCE MARGINALISED HAVE NOW PROGRESSIVE PROSPECTS OF INCREASING THEIR EXPOSURE 
            AND WILL CATALYSE NEW OPPORTUNITIES FOR FUTURE GENERATIONS.
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