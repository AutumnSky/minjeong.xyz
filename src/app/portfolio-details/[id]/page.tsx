import getPortfolios from '../../../services/getPortfolios'

export default async function PortfolioDetails({ params }: { params: { id: string } }) {
    const portfolios = await getPortfolios()
    const portfolio = portfolios.find(p => p.id.toString() === params.id)
    if (!portfolio) {
        return (
            <div>not found</div>
        )
    }

    return (
        <div>
            <p>
                {portfolio.name.en}
            </p>
            <p>
                {portfolio.category}
            </p>
            <p>
                {portfolio.type}
            </p>
            <p>
                {portfolio.participation}
            </p>
            <p>
                {portfolio.company}
            </p>
            <p>
                {portfolio.start_date.year} {portfolio.start_date.month}
            </p>
            <p>
                {portfolio.end_date?.year} {portfolio.end_date?.month}
            </p>
            <p>
                {portfolio.platforms}
            </p>
            <p>
                {portfolio.tech_stack}
            </p>
            <p>
                {portfolio.screenshots}
            </p>
            <p>
                {portfolio.deployed_link?.ios}
            </p>
        </div>
    )
}