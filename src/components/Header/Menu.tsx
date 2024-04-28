import styles from "./Menu.module.scss"
import Link from 'next/link'

type Props = {
    link: string
    title: string
}

export default function Menu({ link, title }: Props) {
    return (
        <Link className={styles.menu}
            href={link}>{title}</Link>
    )
}