import Image from "next/image"
import Link from "next/link"
import Testimonials from '../components/Testimonials'

import styles from './index.module.css'

import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <section className={styles.heroWrapper}>
        <div className={styles.hero}>
          <div className={styles.heroImg}>
            <Image src={'/images/hero-img-overlay.jpg'} layout='responsive' height={82} width={175} alt='finished kitchen'/>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroTextContainer}>
              <h1 className={`pageHeading ${styles.heroText}`}>Restoration.</h1>
              <h1 className={`pageHeading ${styles.heroText}`}>Design.</h1>
              <h1 className={`pageHeading ${styles.heroText}`}>Build.</h1>
            </div>
            <div className={styles.heroBtns}>
              <Link href='/contact'>
                <a className="btn btnSm bgOrange">Get a Quote</a>
              </Link>
              <Link href='/gallery'>
                <a className="btn btnSm bgBlue">View Our Projects</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutContainer}>
        <div >
          <h2 className={styles.heading}>
            Delivering Exceptional Services Since 1995
          </h2>
          <p className={styles.text}>
          Tedesco Group has been delivering exceptional services since 1995. From home restoration to commercial projects, Tedesco Group takes pride in completing every project with the utmost attention to detail.
          </p>
          <div className={styles.aboutBtn}>
            <Link href='/about'>
              <a className='btn btnSm bgBlue'>
                About Us
              </a>
            </Link>
            {/* <Button type={'link'} colour={'secondary'} content='About Us' size='small' /> */}
          </div>
        </div>
      </section>

      <section className={styles.comResContainer}>
        <div className={styles.comResTextContainer}>
          <h2 className={`${styles.heading} ${styles.light} ${styles.left}`}>
            Experienced in Commercial <br />
            and Residential Projects
          </h2>
          <p className={`${styles.text} ${styles.light} ${styles.left} ${styles.comResText}`}>
          We deliver exceptional services for both residential and commercial projects. Our company has vast experience with everything from restoring homes built a hundred years ago, to outfitting a commercial building with the newest equipment and technology. 
          </p>
        </div>

        <div className={styles.comResImg}>
          <Image src='/images/home-middle.jpg' layout="responsive" width={245} height={328} alt='trades worker'/>
        </div>

      </section>

      {/* <section className={styles.testsContainer}>
        <div>
          <Image src='/images/testimonialBG-overlay.jpg' layout='responsive' width={3} height={2} alt='testimonials' />
        </div>
        <h2 className={`${styles.heading} ${styles.testHeading}`}>
          Testimonials
        </h2>
        <Testimonials />
      </section> */}

    </Layout>
  )
}