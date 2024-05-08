import Link from 'next/link'
import styles from './PortfoliosCard.module.scss'
import { Portfolio } from '../../services/getPortfolios'

type Props = {
    portfolio: Portfolio
}

export default function PortfoliosCard({ portfolio }: Props) {
    return (
        <Link href={`/portfolio-details/${portfolio.id}`}>
            <div className={styles.container}>
                <p>
                    {portfolio.name.en}
                </p>
                <p>
                    {portfolio.start_date.year}
                </p>
            </div>
        </Link>
    )
}