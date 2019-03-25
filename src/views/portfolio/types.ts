export type Portfolio = {
  projectName: string
  role: string
  description: string
  portfolioSkills: PortfolioSkill[]
  portfolioImages: PortfolioImage[]
}

export type PortfolioSkill = {
  skill: string
}

export type PortfolioImage = {
  image: Image
}

export type Image = {
  url: string
}
