import styles from './Footer.module.scss'
import { FiInstagram } from 'react-icons/fi'
import { GrLinkedinOption } from 'react-icons/gr'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.leftSection}>
                <a>uclanalytics.society@gmail.com</a>
                <p>Gower Street, London WC1E 6BT</p>
                <p>© 2021 UCL Analytics</p>
            </div>
            <div className={styles.rightSection}>
                <FiInstagram className={styles.icon} size="25px"/>
                <GrLinkedinOption className={styles.icon} size="25px"/>
            </div>
        </footer>
    )
}

export default Footer