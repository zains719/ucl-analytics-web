import styles from './Header.module.scss'
import { IoMenuOutline, IoCloseOutline } from 'react-icons//io5'
import { useState } from 'react'
import Link from 'next/link'

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
                <Link href="/">
                    <a>ADOREA ANALYTICS</a>    
                </Link>
            </div>
            <div className={!menuOpen ? styles.menuHeaderHide : styles.menuHeaderShow}>
                <div className={styles.dropDown}>
                    <a>About Us</a>
                    <div className={styles.dropDownContent}>
                        <Link className={styles.Link} href="/ourPeople">
                            <a>Directory Board</a>
                        </Link>  
                        <Link className={styles.Link} href="/storyVision">
                            <a>Story & Vision</a>
                        </Link>  
                    </div>
                </div>
                <div className={styles.dropDown}>
                    <a>Approach</a>                    
                    <div className={styles.dropDownContent}>
                        <Link className={styles.Link} href="/strategy">
                            <a>Strategy</a>
                        </Link>                  
                        <Link className={styles.Link} href="/principlesValues">
                            <a>Principles & Values</a>
                        </Link>                 
                    </div>
                </div>
                <div className={styles.dropDown}>
                    <a>News & Insights</a>                    
                </div>
                <div className={styles.dropDown}>
                    <Link className={styles.Link} href="/contact">
                        <a>Contact</a>                  
                    </Link>  
                </div>
            </div>
        </header>
    )
}

export default Header