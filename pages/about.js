import Image from "next/image"
import Link from "next/link"

import Layout from "../components/Layout"

import styles from '../styles/about.module.css'

export default function About() {

    const articleParas = [
        "Owner Domenic Tedesco has a degree from the University of Toronto, a background in Structural Engineering, and education in interior and exterior design. With twenty-six years of experience in the industry, he started Tedesco Restorations in 2006, focusing on serving the GTA market.  Tedesco Restorations specializes in commercial and residential spaces. Services offered include exteriors, renovation, roofing, foundation restoration, remodeling, bathrooms, and kitchens.",
        "Following his passion for client interaction and a personal touch in every job, Tedesco swayed to the home restoration industry. \"You are changing people\'s lives, you are changing their homes, and you get to see the happy faces of your clients\", says Tedesco. \"That is why I ventured in the restoration industry. I love building stuff, and I love building something from nothing.\""
    ]
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
                    <h2 className={`${styles.aboutHeading} pageHeading`}>Since 1995</h2>
                    <p>
                        Domenic Tedesco has over 30 years of experience in the construction industry. He founded Tedesco Restoration in 1995, and has recently rebranded to Tedesco Group to more accurately portray the variety of services him and his team provide.
                    </p>
                    <p>
                        “At Tedesco Restoration, we understand the importance of preserving history. Our team of experts has years of experience in restoring old homes and commercial buildings, ensuring that each project is completed with care.
                    </p>
                    <p>
                        Our passion for restoration shines through in every project we undertake, from home restoration to commercial projects. We take pride in our work, and we are committed to delivering the best possible results for our clients.”
                    </p>
                </div>
            </section>
            <section className={styles.articleContainer}>
                <div className={styles.articleCard}>
                    <div className={styles.articleInfo}>
                        <div>
                            <h3 className={styles.articleTitle}>Tedesco Restorations</h3>
                            <p className={styles.articlePub}>Canadian Business Journal</p>
                        </div>
                        <div className={styles.articleImg}>
                            <Image src='/images/article-thumb.jpg' layout='responsive' width={1033} height={1325} alt='house' />
                        </div>
                        <p className={styles.articleText}>
                            {articleParas[0]}
                        </p>
                        <p className={styles.articleText}>
                            {articleParas[1]}
                        </p>
                        <Link href='https://www.cbj.ca/tedesco_restorations/'>
                            <a className={styles.articleLink}>Read More</a>
                        </Link>
                    </div>
                </div>
            </section>
            <section className={styles.communityContainer}>
                <div className={styles.communityText}>
                    <h3 className={`${styles.communityHeading} ${styles.comHeadLg}`}>Giving Back to the Community</h3>
                    <div className={styles.communityImg}>
                        <Image src='/images/owen-racing.jpg' layout='responsive' width={293} height={326} alt='Owen holding a trophey and helmet' />
                    </div>
                    <p className={styles.communityPara}>
                        It with great excitement that we continue to charge forward in the 2022 championship chase with Tedesco Group as our primary partner. Domenic and his team of skilled trades have been the backbone to our fine tuned race program. Without individuals like Domenic it would be absolutely impossible to accomplish such success so early on in the season.
                    </p>
                    <p className={styles.communityPara}>
                        Tedesco Group is proudly represented by 10 year old Owen Solomon of Oakville On. Owen competes in MIKA Briggs Cadet , MIKA Jr Lite as well as WRKC Jr Lite. He is so lucky and honored to represent a company that cares about the future of not only our community but those within it. From our family, team and other partners , Thank You for  your support and dedication to push us into the winner circle together!
                    </p>
                    <p className={styles.communityPara}>
                        Tiffany Lessard <br /> Stirton Lessard Racing <br /><span className={styles.italic}>2021 Rookie of the Year</span>
                    </p>

                </div>
                <h3 className={`${styles.communityHeading} ${styles.comHeadSm}`}>Giving Back to the Community</h3>
            </section>
        </Layout>
    )
}