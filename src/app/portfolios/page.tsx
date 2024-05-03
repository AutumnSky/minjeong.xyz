import PortfoliosCard from '@/components/PortfoliosCard/PortfoliosCard'
import styles from './page.module.scss'

type ProjectName = {
    ko: string
    en: string
}

type ReleaseLink = {
    web?: string
    iOS?: string
    Andriod?: string
}

export type Portfolio = {
    role: string[]
    using: string[]
    screenshot: string[]
    _id: string
    projectName: ProjectName
    year: number
    from: string
    to: string
    tag: string[]
    participation: number
}

export default async function Portfolios() {
    const data = await fetch('https://www.minjeong.xyz/data.json')
    const portfolios: Portfolio[] = await data.json()

    return (
        <div className={styles.portfolios_container}>
            {
                portfolios.map((portfolio) => {
                    return (
                        <PortfoliosCard key={portfolio._id} portfolio={portfolio} />
                    )
                })
            }
        </div>
    )
}