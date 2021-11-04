import Layout from "../../components/Layout"
import styles from "./OurPeople.module.scss"
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-scroll'

const OurPeople = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.topBanner}>
                    <img src="/images/banner-image.jpeg" alt="" />
                    <h1>OUR PEOPLE</h1>
                    <Link to="whoWeAre" smooth offset={-70}>
                        <FiChevronDown className={styles.arrow} size="60px" color="white" />
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default OurPeople;