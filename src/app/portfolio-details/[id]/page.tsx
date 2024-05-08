import getPortfolios, { Portfolio } from '../../../services/getPortfolios'
import styles from './page.module.scss'

export default async function PortfolioDetails({ params }: { params: { id: string } }) {
    const portfolios = await getPortfolios()
    const portfolio = portfolios.find(p => p.id.toString() === params.id)
    if (!portfolio) {
        return (
            <div>not found</div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1 className={styles.name}>{portfolio.name.en}</h1>
                <span className={styles.project_type}>{portfolio.type}</span>
            </div>
            <p>
                Participation: {portfolio.participation}%
            </p>
            <p>
                {
                    portfolio.company ? (
                        portfolio.company === "freelancer" ? (<span>Freelance Job</span>) :
                            <span>Worked for {portfolio.company}</span>
                    ) :
                        (<span>Personal Project</span>)
                }
            </p>
            <p>
                Period: {portfolio.start_date.year}.{portfolio.start_date.month}
                {
                    portfolio.end_date ? (
                        <>
                            &nbsp; ~ {portfolio.end_date?.year}.{portfolio.end_date?.month}
                        </>
                    ) :
                        null
                }
            </p>
            <p>
                Platforms: {portfolio.platforms.join(', ')}
            </p>
            {
                portfolio.tech_stack.length != 0 ?
                    (<p>Tech Stack: {portfolio.tech_stack.join(', ')}</p>)
                    : null
            }
            {
                (portfolio.deployed_link?.ios || portfolio.deployed_link?.android || portfolio.deployed_link?.web) ?
                    (
                        <div className={styles.download_links}>
                            Download Links:
                            {
                                portfolio.deployed_link?.ios ? (
                                    <a href={portfolio.deployed_link?.ios}>App Store (iOS)</a>
                                ) : null
                            }
                            {
                                portfolio.deployed_link?.android ? (
                                    <a href={portfolio.deployed_link?.android}>Google Play Store</a>
                                ) : null
                            }
                            {
                                portfolio.deployed_link?.web ? (
                                    <a href={portfolio.deployed_link?.web}>Website</a>
                                ) : null
                            }
                        </div>
                    )
                    : null
            }
            {
                portfolio.screenshots.length != 0 ?
                    (
                        <div className={styles.screenshots}>
                            {
                                portfolio.screenshots.map((screenshot, index) => (
                                    <img
                                        key={index}
                                        src={"/imgs/portfolios/" + screenshot}
                                        width={200}
                                        alt="portfolio image"
                                    />
                                ))
                            }
                        </div>
                    ) :
                    null
            }
        </div>
    )
}