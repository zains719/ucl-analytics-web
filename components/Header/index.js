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
                <a href="/">ADOREA ANALYTICS</a>    
            </div>
            <div className={!menuOpen ? styles.menuHeaderHide : styles.menuHeaderShow}>
                <div class={styles.dropDown}>
                    <a>Our People</a>
                    <div class={styles.dropDownContent}>
                        <a href="/ourPeople">Directory Board</a>
                        <a href="#">Advisory Board</a>
                    </div>
                </div>
                <div class={styles.dropDown}>
                    <a>Our Approach</a>                    
                    <div class={styles.dropDownContent}>
                        <a href="#">Geographical Locations</a>
                        <a href="#">Business Strategy</a>
                    </div>
                </div>
                {/* geographical locations */}
                {/* business strategy */}
                <a>News</a>
                <a href="/contact">Contact</a>
            </div>
        </header>
    )
}

export default Header