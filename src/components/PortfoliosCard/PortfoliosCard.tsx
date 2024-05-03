import Link from 'next/link'
import styles from './PortfoliosCard.module.scss'
import { Portfolio } from '@/app/portfolios/page'

type Props = {
    portfolio: Portfolio
}

export default function PortfoliosCard({ portfolio: { _id, projectName, year } }: Props) {
    return (
        <Link href={`/portfolio-details/${_id}`}>
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