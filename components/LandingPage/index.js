import styles from './LandingPage.module.scss'
import useWindowSize from "react-use/lib/useWindowSize"

const LandingPage = () => {
  const { width } = useWindowSize()

  const largeImage = () => {
    return width > 600
  }

  return (
      <div className={styles.container}>
        {largeImage() && (
          <img src="/images/banner-image.jpeg" alt="" />
        )}
        {!largeImage() && (
          <img src="/images/tes.jpeg" alt="" />
        )}
        <div className={styles.intro}>
          <h1>WHO WE ARE</h1>
          <p>
              UCL Analytics is a student-led society which carries out financial research 
              in developing countries in order to seek the potential for future involvement in international markets.
          </p>
          <p>
            UCL Analytics studies the countries&apos; fundamentals and how innovation took place in those areas considering 
            different parameters, including access to technology, demographic changes, government restructuring and raw materia
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
            WE ARE COMMITTED TO SUPPORTING SOCIAL PROGRESS ACROSS THE GLOBE AND BELIEVE EXCHANGING DIVERSE 
            PERSPECTIVES WHILST SPENDING AWARENESS IS KEY FOR NEW GENERATIONS
          </p>
        </div>
      </div>
  )
}

export default LandingPage