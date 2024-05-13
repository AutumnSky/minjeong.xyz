import PortfoliosCard from '@/components/PortfoliosCard/PortfoliosCard'
import styles from './page.module.scss'
import getPortfolios, { Portfolio } from '../../services/getPortfolios'

export default async function Portfolios() {
    const portfolios = await getPortfolios()
    const groupedPortfolios = groupPortfolios(portfolios)

    return (
        <div className={styles.container}>
            <div className={styles.timeline} />
            <div className={styles.card_list}>
                {
                    groupedPortfolios.map(group => {
                        return (
                            <>
                                <div className={styles.year}>{group.year}</div>
                                {
                                    group.portfolios.map((portfolio) => {
                                        return (
                                            <PortfoliosCard key={portfolio.id} portfolio={portfolio} />
                                        )
                                    })
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

interface PortfolioGroupByYear {
    year: number;
    portfolios: Portfolio[];
}

function findPortfolioGroupByYear(year: number, groups: PortfolioGroupByYear[]): PortfolioGroupByYear | null {
    for (const g of groups) {
        if (g.year === year) {
            return g
        }
    }
    return null;
}

function groupPortfolios(portfolios: Portfolio[]): PortfolioGroupByYear[] {
    // descending by year
    portfolios.sort((a, b) => b.start_date.year - a.start_date.year)

    const groups: PortfolioGroupByYear[] = []

    portfolios.forEach(portfolio => {
        const group = findPortfolioGroupByYear(portfolio.start_date.year, groups)
        if (group === null) {
            groups.push({
                year: portfolio.start_date.year,
                portfolios: [portfolio]
            })
        } else {
            group.portfolios.push(portfolio)
        }
    })

    groups.forEach(groups => {
        // descending by month
        groups.portfolios.sort((a, b) => b.start_date.month - a.start_date.month)
    })

    return groups;
}