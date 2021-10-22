import styles from './Header.module.scss'
import { IoMenuOutline, IoCloseOutline } from 'react-icons//io5'
import { useState } from 'react'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen)
    }
    
    return (
        <header className={styles.container}>
            <div className={styles.mainHeader}>
                <IoMenuOutline 
                onClick={handleMenuClick}
                size='40px' 
                className={!menuOpen ? styles.menuIconOpen : styles.menuIconOpenHide} 
                />   
                <IoCloseOutline 
                onClick={handleMenuClick}
                size='40px' 
                className={!menuOpen ? styles.menuIconOpenHide : styles.menuIconOpen}  
                />   
                <h1>UCL ANALYTICS</h1>    
            </div>
            <div className={!menuOpen ? styles.menuHeaderHide : styles.menuHeaderShow}>
                <a>Our People</a>
                <a>Our Approach</a>
                <a>Publications</a>
                <a>Events</a>
                <a>Contact</a>
            </div>
        </header>
    )
}

export default Header