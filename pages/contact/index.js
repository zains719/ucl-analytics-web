import Layout from "../../components/Layout"
import styles from "./Contact.module.scss"

const Contact = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.topBanner}>
                    <img src="/images/banner-image.jpeg" alt="" />
                    <h1>&quot;Join Our Network&quot;</h1>
                </div>
                <div className={styles.content} id="contact" >
                    <h1>GET IN TOUCH</h1>
                    <p>
                        We are more than happy to answer any questions you may have. 
                        Do not hesitate to get in touch. Based on your enquiries, contact us at the appropriate email address.                  
                    </p>
                    <h3>External Relators</h3>
                    <p>
                        If you are interested in collaborating with us as a data service provider or joining our advisory board, 
                        please contact us at: <a href="mailto:contact.adoreaanalytics@gmail.com">contact.adoreaanalytics@gmail.com</a>
                    </p>
                    <h3>New Entires Application</h3>
                    <p>
                        If you are interested in joining the team for an available position, 
                        please contact us at: <a href="mailto:apply.adoreaanalytics@gmail.com">apply.adoreaanalytics@gmail.com</a>
                    </p>   
                    <p>
                        You can also contact us via our socials:
                    </p>
                    <p>
                        Twitter: 
                    </p>
                    <p>
                        LinkedIn:
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Contact;