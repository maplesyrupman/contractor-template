import styles from './button.module.css'

export default function Button({colour, type, content, size}) {


    return (
        <button type={type} className={`${styles[colour]} ${styles.btn} ${styles[size]}`}>
            {content}   
        </button>
    )
}