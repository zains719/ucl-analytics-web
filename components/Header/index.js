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
                    <a>Our People</a>
                    <div className={styles.dropDownContent}>
                        <Link className={styles.Link} href="/ourPeople">
                            <a>Directory Board</a>
                        </Link>  
                        <a>Advisory Board</a>
                    </div>
                </div>
                <div className={styles.dropDown}>
                    <a>Our Approach</a>                    
                    <div className={styles.dropDownContent}>
                        <a>Geographical Locations</a>
                        <a>Business Strategy</a>
                    </div>
                </div>
                <div className={styles.dropDown}>
                    <a>News</a>                    
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