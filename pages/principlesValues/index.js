import Layout from "../../components/Layout"
import styles from "./PrinciplesValues.module.scss"
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-scroll'

const PrinciplesValues = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.topBanner}>
                    <img src="/images/banner-image.jpeg" alt="" />
                    <h1>&quot;Company culture is the backbone of any successful organisation&quot;</h1>
                    <Link to="principlesValues" smooth offset={-70}>
                        <FiChevronDown className={styles.arrow} size="60px" color="white" />
                    </Link>
                </div>
                <div className={styles.content} id="principlesValues" >
                    <h1>PRINCIPLES & VALUES</h1>
                    <p>
                        At Adorea Analytics we welcome global citizens from all kinds of social and economical backgrounds. 
                        Having embraced the significance of studying in a multidisciplinary and multi-ethnic environment, 
                        we are happy to continue a legacy of integration. We are committed to retaining a diverse workforce and 
                        fostering an inclusive workplace.                
                    </p>
                    <img src="/images/Dedication.png" />
                    <p>
                        The team is active in day-to-day operations showing passion and long-term commitment. Our biggest asset is our
                        reputation and we ensure all members act with full transparency in all aspects of their conduct. We provide a 
                        dynamic working environment that encourages professional and personal growth, along with sharing a vision 
                        of enhancing accessibility.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default PrinciplesValues;