import Layout from "../../components/Layout"
import Slideshow from "../../components/Slideshow"

import { getAllProjectIds, getProjectImages } from "../../lib/gallery"

export async function getStaticProps({ params }) {
    const imagePaths = getProjectImages(params.proj)
    console.log('image paths',imagePaths)
    return {
        props: {
            imagePaths
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


export default function Project({imagePaths}) {

    return (
        <Layout>
            <Slideshow imagePaths={imagePaths} />
            <p>Helllo</p>
        </Layout>
    )
}