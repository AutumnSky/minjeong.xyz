import Link from 'next/link'
import styles from './PortfoliosCard.module.scss'

type Props = {
    title: string
    platforms: string[]
    year: number
    startDate?: string
    endDate?: string
}

export default function PortfoliosCard({ title, platforms, year, startDate, endDate }: Props) {
    return (
        <Link href="/portfolio-details">
            <div className={styles.container}>
                <p>
                    {title}
                </p>
                <p>
                    {year}
                </p>
            </div>
        </Link>
    )
}