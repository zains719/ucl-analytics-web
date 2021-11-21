import Layout from "../../components/Layout"
import styles from "./OurPeople.module.scss"
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-scroll'

const people = [
    {
        name: "Nicoló Andretta",
        title: "Founder & CEO",
        major: "Major in Economics and Politics",
        photoUrl: "",
    },
    {
        name: "Marco Fontonesi",
        title: "Chief Operations Officer",
        major: "Major in Economics & Statistics",
        photoUrl: "",
    },
    {
        name: "Georgi Zaykov",
        title: "Economic Research Executive",
        major: "Major in Economics & Statistics",
        photoUrl: "",
    },
    {
        name: "Leo Zeligmans",
        title: "Markets Research Executive",
        major: "Major in Data Science",
        photoUrl: "",
    },
    {
        name: "Maria Valentina",
        title: "Politics Research Executive",
        major: "Major in Law",
        photoUrl: "",
    },
    {
        name: "Neal Patel",
        title: "Demographics Research Executive",
        major: "Major in History",
        photoUrl: "",
    },
    {
        name: "Zain Saleem",
        title: "Head of Technology",
        major: "Major in Computer Science",
        photoUrl: "",
    },
    {
        name: "Firstname Surname",
        title: "Head of Publications",
        major: "Major in",
        photoUrl: "",
    },
]

const OurPeople = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.topBanner}>
                    <img src="/images/banner-image.jpeg" alt="" />
                    <h1>&quot;Working together is success&quot;</h1>
                    <Link to="meetOurTeam" smooth offset={-70}>
                        <FiChevronDown className={styles.arrow} size="60px" color="white" />
                    </Link>
                </div>
                <div className={styles.mainContent} id="meetOurTeam">
                    <div className={styles.header}>
                        <h1 className={styles.rightBorder} >MEET OUR TEAM</h1>
                        <h1>DIRECTORY BOARD</h1>
                    </div>
                    <p className={styles.caption}>
                        Adorea's team represents the core of international experience and combines technical-academic expertise with financial areas.
                    </p>
                    <div className={styles.people}>
                        {people.map((person, index) => {
                            return (
                                <div key={index} className={styles.person}>
                                    <div className={styles.profilePicture}>
                                    </div>
                                    <div className={styles.text}>
                                        <h2>{person.name}</h2>
                                        <h3>{person.title}</h3>
                                        <p>{person.major}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.info}>
                        <p>
                            Our board of directors consists of driven and ambitious individuals who demonstrated a track record in 
                            leadership positions and professional experience. They all share an interest in understanding the 
                            complexities surrounding factors that stagnate or trigger progress in developing countries.
                        </p>
                        <p>
                            Each of them has full autonomy in managing their sector in research and has responsibility for its team of analysts.                        </p>
                        <div className={styles.bottomInfo}>
                            <p>&quot;15 Members&quot;</p>
                            <p>&quot;10 Nationalities&quot;</p>
                            <p>&quot;10 Degrees&quot;</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default OurPeople;