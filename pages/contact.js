import Layout from '../components/Layout'
import styles from '../styles/contact.module.css'

import Button from '../components/Button'

export default function Contact() {
    return (
        <Layout>
            <div className={styles.headingContainer}>
                <h1 className={`pageHeading blue`}>
                    Contact Us
                </h1>
            </div>
            <div className={styles.pageContainer}>
                <div className={styles.infoContainer}>
                    <h2 className={styles.headerSecondary}>Get in touch.</h2>
                    <div className={styles.infoTextContainer}>
                        <div>
                            <h3 className={styles.heading}>Domenic Tedesco - President</h3>
                            <p className={styles.text}>Email: dom@tedescogroup.ca</p>
                        </div>
                        <div>
                            <h3 className={styles.heading}>Eleanor Lastname - Secretary</h3>
                            <p className={styles.text}>Phone: 416-123-4567</p>
                            <p className={styles.text}>Email: admin@tedescogroup.ca</p>
                        </div>
                        <div>
                            <h3 className={styles.heading}>Address</h3>
                            <p className={styles.text}>123 Someplace Blvd. Toronto,
                                <br />
                                ON Canada M1G 2L9
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <form className={styles.formBody}>
                        <h2 className={styles.headerSecondary}>Get a quote.</h2>
                        <div className={styles.fieldContainer}>
                            <label htmlFor='name' className={styles.label}>Name</label>
                            <input name='name' type='text' className={styles.fieldInput}/>
                        </div>
                        <div className={styles.fieldContainer}>
                            <label htmlFor='email' className={styles.label}>Email</label>
                            <input name='email' type='email' className={styles.fieldInput} />
                        </div>
                        <div className={styles.fieldContainer}>
                            <label htmlFor='phone' className={styles.label}>Phone</label>
                            <input name='phone' type='text'  className={styles.fieldInput}/>
                        </div>
                        <div className={styles.fieldContainer}>
                            <label htmlFor='message' className={styles.label}>Message</label>
                            <textarea name='message'  className={styles.fieldInput}/>
                        </div>
                        <div>
                            <Button colour='primary' size='small' content={'Submit'} type='submit'/>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}