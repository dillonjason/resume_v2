export type Experience = {
  company: string
  startDate: Date
  endDate?: Date
  position: string
  experienceDetails: ExperienceDetail[]
}

export type ExperienceDetail = {
  detail: string
}
