import Layout from '../components/Layout'
import Image from 'next/image'

import { FaPlug, FaFaucet, FaFire, FaHardHat, FaHouseDamage, FaBorderAll, FaRulerCombined, FaPencilRuler, FaHome, } from 'react-icons/fa'

import styles from '../styles/services.module.css'

const services = [
    {
        title: 'Project Management',
        blurb: 'Our team of experts has years of experience in completing projects on time and within budget. We are committed to delivering the best possible results for our clients, and we believe that proper project management is essential to achieving this goal.',
        icon: <FaHardHat className={styles.serviceIcon} />
    },
    {
        title: 'Design',
        blurb: 'We offer a wide range of design services to help you create the home or office of your dreams. Our team of experts can help you choose the right colours, materials, and finishes for your project, ensuring that it is both beautiful and functional.',
        icon: <FaPencilRuler className={styles.serviceIcon} />
    },
    {
        title: 'Disaster Restoration',
        blurb: 'Tedesco Group has a great deal of experience in disaster restoration, as they often require specific attention to detail to mitigate the damage.',
        icon: <FaHouseDamage className={styles.serviceIcon} />
    },
    {
        title: 'Electrical',
        blurb: 'At Tedesco Group, we understand the importance of having a reliable and efficient electrical system in your home or office. That\'s why we offer a wide range of electrical services, from installation to repair and maintenance.',
        icon: <FaPlug className={styles.serviceIcon} />
    },
    {
        title: 'Plumbing',
        blurb: 'Our plumbing services are designed to meet the needs of both residential and commercial clients. Our team of experts is experienced in all aspects of plumbing, from fixing a leaky faucet to installing a new water heater.',
        icon: <FaFaucet className={styles.serviceIcon} />
    },
    {
        title: 'Gas',
        blurb: 'From installing a brand-new gas system or repairs to an existing system, Tedesco Group has your gas service needs covered. ',
        icon: <FaFire className={styles.serviceIcon} />
    },
    {
        title: 'Tiling',
        blurb: 'We offer our tiling services for both residential and commercial projects. Our experienced team can help you choose and install the right tile for your restoration. ',
        icon: <FaBorderAll className={styles.serviceIcon} />
    },
    {
        title: 'Drywall & Framing',
        blurb: 'We offer drywall and framing services to help you get your project completed quickly and efficiently, while maintaining the quality you expect.',
        icon: <FaRulerCombined className={styles.serviceIcon} />
    },
    {
        title: 'Roofing',
        blurb: 'Our team of experts have years of experience in the roofing industry and delivers high-quality roofing services that are designed to meet the specific needs of each client. ',
        icon: <FaHome className={styles.serviceIcon} />
    },
]

export default function Services() {
    return (
        <Layout>
            <div className={styles.headingContainer} >
                <h1 className='pageHeading'>Services</h1>
                <div className={styles.headingImg}>
                    <Image src='/images/services-banner-overlay.jpg' layout='responsive' width={375} height={211} alt='trades person' />
                </div>
            </div>
            <section className={styles.servicesParaContainer}>
                <div className={styles.servicesPara}>
                    <p>
                        At Tedesco Group, our primary focus is on quality craftmenship. With over 30 years of experience in the industry, we&apos;ve learnt the tricks of the trade through the only way we believe possible: experience. With our team of seasoned contractors on your site, you can rest assured knowing that we won&apos;t leave until every detail is attended to.
                    </p>
                </div>
            </section>
            <section>
                <section className={styles.servicesContainer}>
                    {services.map((service, idx) => {
                        return (
                            <div 
                                className={styles.serviceCardBody }
                                key={idx}
                            >
                                {service.icon}
                                <h2 className={styles.serviceHeading}>{service.title}</h2>
                                <p className={styles.serviceText}>{service.blurb}</p>
                            </div>
                        )
                    })}
                </section>
            </section>

        </Layout>
    )
}