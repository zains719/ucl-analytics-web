import styles from './Layout.module.scss'
import Footer from "../Footer"
import Header from "../Header"

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                { children }
            </main>
            <Footer />
        </div>
    )
}

export default Layout