import Link from 'next/link'
import styles from './PortfoliosCard.module.scss'
import { Portfolio } from '@/app/portfolios/page'

type Props = {
    portfolio: Portfolio
}

export default function PortfoliosCard({ portfolio: { projectName, year } }: Props) {
    return (
        <Link href="/portfolio-details">
            <div className={styles.container}>
                <p>
                    {projectName.en}
                </p>
                <p>
                    {year}
                </p>
            </div>
        </Link>
    )
}