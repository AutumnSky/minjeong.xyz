import Link from 'next/link'
import styles from './PortfoliosCard.module.scss'
import { Portfolio } from '../../services/getPortfolios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

type Props = {
    portfolio: Portfolio
}

export default function PortfoliosCard({ portfolio }: Props) {
    return (
        <Link className={styles.link} href={`/portfolio-details/${portfolio.id}`}>
            <p className={styles.month}>
                {monthToString(portfolio.start_date.month)}
            </p>
            <div className={styles.container}>
                <div>
                    <img className={styles.thumbnail}
                        src={"/imgs/portfolios/" + portfolio.screenshots[0]}
                        alt="portfolio image"
                    />
                </div>
                <div className={styles.details}>
                    <div className={styles.platforms}>
                        <FontAwesomeIcon className={styles.platform_icon} icon={faApple} />
                        <FontAwesomeIcon className={styles.platform_icon} icon={faAndroid} />
                        <FontAwesomeIcon className={styles.platform_icon} icon={faGlobe} />
                    </div>
                    <p className={styles.name}>{portfolio.name.en}</p>
                    <p className={styles.more}>...more</p>
                </div>
            </div>
        </Link>
    )
}

function monthToString(month?: number): string | null {
    if (!month) {
        return null
    }

    switch (month) {
        case 1: return 'Jan'
        case 2: return 'Feb'
        case 3: return 'Mar'
        case 4: return 'Apr'
        case 5: return 'May'
        case 6: return 'June'
        case 7: return 'July'
        case 8: return 'Aug'
        case 9: return 'Sept'
        case 10: return 'Oct'
        case 11: return 'Nov'
        case 12: return 'Dec'
        default: return null
    }
}