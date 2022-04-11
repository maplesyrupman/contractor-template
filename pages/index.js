import Image from "next/image"
import Testimonials from '../components/Testimonials'

import styles from './index.module.css'

import Layout from "../components/Layout"
import Button from '../components/Button'

export default function Home() {
  return (
    <Layout>
      <section className={styles.hero}>
        <Image src={'/images/hero-img-overlay.jpg'} layout='responsive' height={82} width={175} />
        <div className={styles.heroContent}>
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroText}>Restoration.</h1>
            <h1 className={styles.heroText}>Design.</h1>
            <h1 className={styles.heroText}>Build.</h1>
          </div>
          <div className={styles.heroBtns}>
            <Button type={'link'} colour={'primary'} content='Get a Quote' size='small' />
            <Button type={'link'} colour={'secondary'} content='View Our Projects' size='small' />
          </div>
        </div>
      </section>

      <section className={styles.aboutContainer}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.aboutHeading}>
            Delivering Exceptional Services Since 1995
          </h2>
          <p className={styles.aboutText}>
            Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.
          </p>
          <div>
            <Button type={'link'} colour={'secondary'} content='About Us' size='small' />
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>
            Experienced in Commercial and Residential Projects
          </h2>
          <p>
            One tasty titbit of information.
          </p>
          <p>
            Another tasty titbit of information with a longer explanation
            of what it means
          </p>
          <p>
            One tasty titbit of information.
          </p>
          <p>
            Another tasty titbit of information with a longer explanation
            of what it means
          </p>
        </div>

        <div>
          <Image src='/images/home-middle.jpg' layout="responsive" width={245} height={328} />
        </div>

      </section>

      <section>
        <Testimonials />
      </section>

    </Layout>
  )
}
