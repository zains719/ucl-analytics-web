import Layout from "../../components/Layout"
import styles from "./Contact.module.scss"

const Contact = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.topBanner}>
                    <img src="/images/banner-image.jpeg" alt="" />
                    <h1>CONTACT US</h1>
                </div>
                <div className={styles.content} id="contact" >
                    <h1>GET IN TOUCH</h1>
                    <p>
                        We are more than happy to answer any questions you may have. 
                        Please contact us at the following email address based on your concerns:
                    </p>
                    <p>
                        For external relator enquiries: <a href="mailto:contact.adoreaanalytics@gmail.com">contact.adoreaanalytics@gmail.com</a>
                    </p>
                    <p>
                        For students new entries enquiries: <a href="mailto:apply.adoreaanalytics@gmail.com">apply.adoreaanalytics@gmail.com</a>
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