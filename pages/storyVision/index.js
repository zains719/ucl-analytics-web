import Layout from "../../components/Layout"
import styles from "./StoryVision.module.scss"

const StoryVision = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.topBanner}>
                    <img src="/images/banner-image.jpeg" alt="" />
                    <h1>&quot;The future belongs to those who prepare for it today&quot;</h1>
                </div>
                <div className={styles.content} id="storyVision" >
                    <h1>STORY & VISION</h1>
                    <p>
                        The team was founded in a post-pandemic environment, dated August 2021, by Nicoló Andretta and Marco Fontonesi 
                        from a student hall in London. The two like-minded students, both pursuing their degrees at UCL, 
                        were eager in transferring their academic knowledge into practice. and being both curious about developing countries 
                        and their emerging industries decided to initiate a macro-research team.  
                    </p>
                    <p>
                        The term 'Adorea' dates back to the Latin language. In Roman antiquity, Adorea depicted the goddess of enterprise 
                        success and collective progress.
                    </p>
                    <p>
                        The twenty-first century brought along a rapidly continuing technological advancement that carries the promise 
                        of increased productivity and efficiency. The team's mission concerns raising awareness on how more solid 
                        globalisation, in terms of accessibility and innovation, will impact developing countries allowing a higher 
                        participation stake in international markets.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default StoryVision;