import Layout from "../../components/Layout"
import styles from '../../styles/gallery.module.css'
import { getThumbData } from "../../lib/gallery"

const testThumbs = [1, 2, 3, 4, 5]

export async function getStaticProps() {
    const thumbs = getThumbData()
    return {
        props: {
            thumbs
        }
    }
}

export default function Gallery({thumbs}) {
    

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
                    {testThumbs.map(thumb => {
                        return (
                            <div key={thumb} className={styles.projectCard}>
                                <div className={styles.cardImg}>
                                    image
                                </div>
                                <div className={styles.projDesc}>
                                    <h3>Description of Proj</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}