type ProjectName = {
    ko: string
    en: string
}

type ReleaseLink = {
    web?: string
    iOS?: string
    Andriod?: string
}

type Portfolio = {
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
        <>
            <div>Portfolios</div>
            {portfolios.map((portfolio) => {
                return (
                    <div key={portfolio._id}>{portfolio.year} - {portfolio.projectName.en}</div>
                )
            })}
        </>
    )
}