import Layout from "../../components/Layout"
import styles from "./OurPeople.module.scss"
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-scroll'

const people = [
    {
        title: "Founder & President",
        name: "Person 1",
        photoUrl: "",
    },
    {
        title: "Cheif Executive Officer",
        name: "Person 1",
        photoUrl: "",
    },
    {
        title: "Corporate Analysis Executive Officer",
        name: "Person 1",
        photoUrl: "",
    },
    {
        title: "Financials Analysis Executive Officer",
        name: "Person 1",
        photoUrl: "",
    },
    {
        title: "Demographics Analysis Executive Officer",
        name: "Person 1",
        photoUrl: "",
    },
    {
        title: "Political Analysis Executive Officer",
        name: "Person 1",
        photoUrl: "",
    },
    {
        title: "Head of Technology",
        name: "Person 1",
        photoUrl: "",
    },
    {
        title: "Head of Marketing",
        name: "Person 1",
        photoUrl: "",
    },
]

const OurPeople = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.topBanner}>
                    <img src="/images/banner-image.jpeg" alt="" />
                    <h1>OUR PEOPLE</h1>
                    <Link to="meetOurTeam" smooth offset={-70}>
                        <FiChevronDown className={styles.arrow} size="60px" color="white" />
                    </Link>
                </div>
                <div className={styles.mainContent} id="meetOurTeam">
                    <div className={styles.header}>
                        <h1 className={styles.rightBorder} >MEET OUR TEAM</h1>
                        <h1>DIRECTORY BOARD</h1>
                    </div>
                    <div className={styles.people}>
                        {people.map((index, person) => {
                            return (
                                <div key={index} className={styles.person}>
                                    <div className={styles.profilePicture}>
                                    </div>
                                    <div className={styles.text}>
                                        <h2>{person.title}</h2>
                                        <p>{person.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.info}>
                        <p>
                            Our team consists of students coming from two of the highest rank universities in London. 
                            Both institutions, namely UCL and LSE welcome global citizens and leaders of tomorrow, 
                            from all kinds of social and economical backgrounds.
                        </p>
                        <p>
                            Having embraced the significance and opportunity of studying in a multidisciplinary and multi-ethnic environment, 
                            we are happy to continue a legacy of integration. We believe that selecting students from different backgrounds 
                            and studies informs and enriches each other, providing the team with greater perspectives and observations.
                        </p>
                        <p>
                            At Adorea Analytics we are committed to retaining a diverse workforce and fostering an inclusive workplace.
                        </p>
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