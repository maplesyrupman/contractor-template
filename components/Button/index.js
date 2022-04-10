import styles from './button.module.css'

export default function Button({colour, type, content}) {


    return (
        <button type={type} className={`${styles[colour]} ${styles.btn}`}>
            {content}   
        </button>
    )
}