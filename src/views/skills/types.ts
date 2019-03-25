export type Skill = {
  type: string
  skillDetails: SkillDetail[]
}

export type SkillDetail = {
  description: string
  image: Image
}

export type Image = {
  url: string
}
