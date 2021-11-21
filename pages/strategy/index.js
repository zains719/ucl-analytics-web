import Layout from "../../components/Layout"
import styles from "./Strategy.module.scss"
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-scroll'

const divisions = [
    {
        name: "Economic Research Dept.",
        description: "Specialises in analysing economic indicators through historical data and creating financial forecasting data.",
    },
    {
        name: "Market Research Dept.",
        description: "Specialises in analysing emerging markets and internal players with the highest market capitalisation.",
    },
    {
        name: "Politics Research Dept.",
        description: "Specialises in analysing economic indicators through historical data and creating financial forecasting data.",
    },
    {
        name: "Demographic Research Dept.",
        description: "Specialises in analysing government structuring, international affairs and party system evolution.",
    },
]

const Strategy = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.topBanner}>
                    <img src="/images/banner-image.jpeg" alt="" />
                    <h1>&quot;We think horizontally not vertically&quot;</h1>
                    <Link to="strategy" smooth offset={-70}>
                        <FiChevronDown className={styles.arrow} size="60px" color="white" />
                    </Link>
                </div>
                <div className={styles.mainContent} id="strategy">
                    <h1>STRATEGY</h1>
                    <p>
                        Our approach is diversified as the research is distinct both in terms of geographical locations and parameter frameworks. 
                    </p>
                    <p>
                        We divided the research&apos;s focal point into two stages. The team will initially concentrate its analysis on China 
                        and India, as having been themselves developing countries in the recent past and now having turned into two of the 
                        fastest-growing economies of the world. We want to understand what made them reach this level of competitiveness so fast.
                    </p>
                    <p>
                        The second stage of the research involves setting the focus on smaller developing countries such as Ethiopia, Malaysia, 
                        Vietnam, Guyana and others, which are named secondary reports. In these, we seek to find patterns with the primary 
                        reports and establish which are more likely to present, in the near future, similar conditions to foster enough 
                        economic growth to compete against developed countries.
                    </p>
                    <h2>Research Process</h2>
                    <p>
                        We undertake a cross-sectional analysis by identifying how different natured parameters interconnect under a 
                        specific period. This is achieved following a collaboration between the team&apos;s four divisions:
                    </p>
                    <div className={styles.divisions}>
                        {divisions.map((division, index) => {
                            return (
                                <div key={index} className={styles.division}>
                                    <h3>{division.name}</h3>
                                    <p>{division.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Strategy;