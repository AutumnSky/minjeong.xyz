import PortfoliosCard from '@/components/PortfoliosCard/PortfoliosCard'
import styles from './page.module.scss'

type ProjectName = {
    ko: string
    en: string
}

enum ProjectCategory {
    Personal = "personal",
    External = "external"
}

enum ProjectType {
    Frontend = "frontend",
    Backend = "backend"
}

type ProjectDate = {
    year: number,
    month?: number
}

enum ProjectPlatforms {
    Web = "Web",
    iPhone = "iPhone",
    iPad = "iPad"
}

type ProjectLink = {
    web?: string,
    ios?: string,
    android?: string
}

export type Portfolio = {
    id: number,
    name: ProjectName,
    category: ProjectCategory,
    type: ProjectType,
    participation: number,
    company: string,
    start_date: ProjectDate,
    end_date?: ProjectDate,
    platforms: ProjectPlatforms[],
    tech_stack: string[],
    screenshots: string[],
    deployed_link: ProjectLink
}

export default async function Portfolios() {
    const data = await fetch('https://www.minjeong.xyz/data/portfolios.json')
    const portfolios: Portfolio[] = await data.json()

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