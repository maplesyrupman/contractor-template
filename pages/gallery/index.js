import Layout from "../../components/Layout";
import styles from '../../styles/gallery.module.css'

const thumbs = [1, 2, 3, 4, 5]

export default function Gallery() {


    return (
        <Layout>
            <div className={styles.headingContainer}>
                <h1 className={`pageHeading blue`}>
                    Gallery
                </h1>
                <p className={styles.headingPara}>
                    Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                </p>
            </div>
            <div className={styles.galleryContainer}>
                <div className={styles.gallery}>
                    {thumbs.map(thumb => {
                        return (
                            <div key={thumb} className={styles.projectCard}>
                                <div className={styles.cardImg}>
                                    image
                                </div>
                                <h3>Project Desc.</h3>
                                <a>View more</a>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>

            </div>
        </Layout>
    )
}