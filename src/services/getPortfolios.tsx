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

type Portfolio = {
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
    deployed_link?: ProjectLink
}

export default async function getPortfolios(): Promise<Portfolio[]> {
    const data = await fetch('https://www.minjeong.xyz/data/portfolios.json')
    return await data.json()
}