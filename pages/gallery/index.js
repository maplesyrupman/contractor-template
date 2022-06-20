import Image from "next/image"
import Link from "next/link"
import Layout from "../../components/Layout"
import styles from '../../styles/gallery.module.css'
import { getThumbData } from "../../lib/gallery"

export async function getStaticProps() {
    const thumbs = getThumbData()
    return {
        props: {
            thumbs
        }
    }
}

export default function Gallery({ thumbs }) {

    return (
        <Layout>
            <div className={styles.headingContainer}>
                <h1 className={`pageHeading blue`}>
                    Gallery
                </h1>
                <p className={styles.headingPara}>
                    Here you can get a glimpse of the quality and attention to detail we provide for each one of our residential or commercial projects. Browse through the gallery of just a few of our immaculately restored homes and buildings.
                </p>
            </div>
            <div className={styles.galleryContainer}>
                <div className={styles.gallery}>
                    {thumbs.map((thumb, idx) => {
                        return (
                            <Link href={`/gallery/${thumb.proj}`} key={`proj${idx}`} passHref>
                                <div key={thumb} className={styles.projectCard}>
                                    <div className={styles.cardImg}>
                                        <Image src={`/projects/${thumb.proj}/proj${idx + 1}-0.jpg`} layout='responsive' width={300} height={300} alt='project image' />
                                    </div>
                                    <div className={styles.projDesc}>
                                        <h3>{thumb.desc}</h3>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}