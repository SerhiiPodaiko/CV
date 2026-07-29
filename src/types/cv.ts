export interface CvHero {
  name: string
  title: string
  location: string
  email: string
  phone: string
  linkedin: string
  github: string
  telegram: string
  employment_type: string
  work_mode: string
  salary: string
}

export interface CvExperience {
  id: string
  company: string
  role: string
  period: string
  location: string
  employment_type: string
  descriptions: string[]
  tags: string[]
}

export interface CvEducation {
  id: string
  institution: string
  degree: string
  period: string
}

export interface CvData {
  hero: CvHero
  about: string
  skills: string[]
  education: CvEducation[]
  experience: CvExperience[]
}
