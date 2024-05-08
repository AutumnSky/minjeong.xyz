import PortfoliosCard from '@/components/PortfoliosCard/PortfoliosCard'
import styles from './page.module.scss'
import getPortfolios from '../../services/getPortfolios'

export default async function Portfolios() {
    const portfolios = await getPortfolios()

    return (
        <div className={styles.portfolios_container}>
            {
                portfolios.map((portfolio) => {
                    return (
                        <PortfoliosCard key={portfolio.id} portfolio={portfolio} />
                    )
                })
            }
        </div>
    )
}