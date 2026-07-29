import { SkillsBlock } from './SkillsBlock'

interface TechStackBlockProps {
    skills: string[]
}

export function TechStackBlock({ skills }: TechStackBlockProps) {
    return (
        <div className='bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border py-6 shadow-sm'>
            <div className='px-6'>
                <h2 className='text-lg font-semibold text-card-foreground mb-4'>Tech Stack</h2>

                <SkillsBlock skills={skills} />
            </div>
        </div>
    )
}
