import styles from "./Menu.module.scss"
import Link from 'next/link'

type Props = {
    link: string
    title: string
    isSelected: boolean
}

export default function Menu({ link, title, isSelected }: Props) {
    return (
        <div className={styles.menu_container}>
            <Link className={isSelected ? styles.menu_link_selected : styles.menu_link_normal}
                href={link}>{title}</Link>
            <div className={isSelected ? styles.highlight_bar_selected : styles.highlight_bar_normal}></div>
        </div>
    )
}