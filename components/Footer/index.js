import styles from './Footer.module.scss'
import { GrLinkedinOption, GrTwitter } from 'react-icons/gr'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.leftSection}>
                <a>adoreaanalytics.society@gmail.com</a>
                <p>© 2021 ADOREA Analytics</p>
            </div>
            <div className={styles.rightSection}>
                <GrTwitter className={styles.icon} size="25px"/>
                <GrLinkedinOption className={styles.icon} size="25px"/>
            </div>
        </footer>
    )
}

export default Footer