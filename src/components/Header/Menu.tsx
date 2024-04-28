import styles from "./Menu.module.scss"
import Link from 'next/link'

type Props = {
    link: string
    title: string
}

export default function Menu({ link, title }: Props) {
    return (
        <div className={styles.menu_container}>
            <Link className={styles.menu_link}
                href={link}>{title}</Link>
            <div className={styles.highlight_bar}></div>
        </div>
    )
}