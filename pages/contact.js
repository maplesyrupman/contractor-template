import Layout from '../components/Layout'
import styles from '../styles/contact.module.css'

export default function Contact() {
    return (
        <Layout>
            <div>
                <h1 className={styles.alex}>
                    Contact Us
                </h1>
            </div>
            <div>
                <div>
                    <h2>Get in touch.</h2>
                    <div>
                        <h3>Domenic Tedesco - President</h3>
                        <p>Email: dom@tedescogroup.ca</p>
                    </div>
                    <div>
                        <h3>Eleanor Lastname - Secretary</h3>
                        <p>Phone: 416-123-4567</p>
                        <p>Email: admin@tedescogroup.ca</p>
                    </div>
                    <div>
                        <p>123 Someplace Blvd. Toronto,
                            ON Canada M1G 2L9
                        </p>
                    </div>
                </div>
                <div>
                    <form>
                        <h2>Get a quote.</h2>
                        <div>
                            <label htmlFor='name'>Name</label>
                            <input name='name' type='text' />
                        </div>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input name='email' type='email' />
                        </div>
                        <div>
                            <label htmlFor='phone'>Phone</label>
                            <input name='phone' type='text' />
                        </div>
                        <div>
                            <label htmlFor='message'>Message</label>
                            <textarea name='message' />
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}