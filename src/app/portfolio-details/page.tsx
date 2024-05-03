type Props = {
    title: string
    platforms: string[]
    startDate: string
    endDate?: string
    description: string
    images?: string[]
}

export default async function PortfolioDetails({ title, platforms, startDate, endDate, description, images }: Props) {
    return (
        <div>
            <p>
                {title}
            </p>
            {platforms} / {startDate} / {endDate} / {description} / {images}
        </div>
    )
}