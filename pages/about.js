import Image from "next/image"
import Link from "next/link"

import Layout from "../components/Layout"

import styles from '../styles/about.module.css'

export default function About() {
    return (
        <Layout>
            <div className={styles.headingContainer} >
                <h1 className='pageHeading'>About Us</h1>
                <div className={styles.headingImg}>
                    <Image src='/images/about-banner-overlay.jpg' layout='responsive' width={375} height={211} alt='trades person' />
                </div>
            </div>
            <section className={styles.aboutContainer}>
                <div className={styles.aboutText}>
                    <h2 className={styles.aboutHeading}>Since 1995</h2>
                    <p>
                        Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                    </p>
                    <p>
                        Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                    </p>
                    <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                    </p>
                </div>
            </section>
            <section className={styles.articleContainer}>
                <div className={styles.articleCard}>
                    <div className={styles.articleImg}>

                    </div>
                    <div className={styles.articleInfo}>
                        <div>
                            <h3 className={styles.articleTitle}>Article Title</h3>
                            <p className={styles.articleDate}>Publisher Name 02/08/08</p>
                        </div>
                        <p className={styles.articleText}>
                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        </p>
                        <p className={styles.articleText}>
                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        </p>
                        <Link href='/'>
                            <a className={styles.articleLink}>Read More</a>
                        </Link>
                    </div>
                </div>
            </section>
            <section className={styles.communityContainer}>
                <div className={styles.communityText}>
                    <h3 className={`${styles.communityHeading} ${styles.comHeadLg}`}>Giving Back to the Community</h3>
                    <p>
                        Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt.
                    </p>
                </div>
                <div className={styles.communityImg}>

                </div>
                <h3 className={`${styles.communityHeading} ${styles.comHeadSm}`}>Giving Back to the Community</h3>
            </section>
        </Layout>
    )
}