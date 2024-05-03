export default async function PortfolioDetails({ params }: { params: { id: string } }) {
    return (
        <div>
            {params.id}
        </div>
    )
}