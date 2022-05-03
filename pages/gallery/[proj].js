import Layout from "../../components/Layout"
import Slideshow from "../../components/Slideshow"
import styles from '../../styles/proj.module.css'

import { getAllProjectIds, getProjectData } from "../../lib/gallery"
import Link from "next/link"

export async function getStaticProps({ params }) {
    const data = getProjectData(params.proj)
    return {
        props: {
            ...data
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllProjectIds()
    return {
        paths,
        fallback: false
    }
}

export default function Project({ imageCount, proj }) {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.gallery}>
                    <Link href='/gallery'>
                        <a className="btn bgOrange">back</a>
                    </Link>
                    <Slideshow
                        imageCount={imageCount}
                        proj={proj}
                    />
                </div>
            </div>
        </Layout>
    )
}