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
        <Link href={`/portfolio-details/${portfolio.id}`}>
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
                    Lorem ipsum, dolor sit amet
                    <br />consectetur adipisicing elit. Pariatur
                    <br /> tempore amet corrupti deleniti odio
                    <br />accusamus excepturi? Explicabo dolore
                </div>
            </div>
        </Link>
    )
}