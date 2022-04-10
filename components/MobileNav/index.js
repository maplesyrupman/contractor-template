import Link from 'next/link'

import { FiMenu } from 'react-icons/fi'

import styles from './mobileNav.module.css'

export default function MobileNav() {


    return (
        <div className={styles.dropdownContainer}>
            <button>
                <FiMenu className={styles.burger} />
            </button>
            <div className={styles.dropdownMenu}>
                <ul>
                    <li>
                        <Link href='/'>
                            <a>
                                Home
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}