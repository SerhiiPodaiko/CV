import type { CvEducation } from '@/types/cv'
import { Card } from '@/components/ui/Card'

interface EducationBlockProps {
    education: CvEducation[]
}

export function EducationBlock({education}: EducationBlockProps) {
    return (
        <Card
            title={'Education'}
        >
            <div className='space-y-5'>
                {education.map((item) => (
                    <div key={item.id} className='relative flex gap-4'>
                        <div className='space-y-1 space-x-1 pl-4'>
                            <span className='whitespace-pre-wrap font-medium'>{item.degree || 'Degree'},</span>
                            <span className='whitespace-pre-wrap text-sm'>{item.institution || 'Institution'},</span>
                            <span className='whitespace-pre-wrap text-sm text-slate-500'>{item.period || 'Period'}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}
