import { InfoIcon } from 'lucide-react'
import type { CvData } from '@/types/cv'

interface CvShortInfoProps {
    cv: CvData
}

export const CvShortInfo = ({ cv }: CvShortInfoProps) => {
    return (
        <div className='bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm lg:sticky lg:top-8'>
            <div className='px-6'>
                <div className='flex items-start justify-between'><h3
                    className='text-lg font-medium text-card-foreground mb-4'>Other Details</h3>
                    <button
                        type='button'
                        aria-label='Short info'
                        className='shrink-0 p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer  text-muted-foreground'
                    >
                        <InfoIcon />
                    </button>
                </div>
                <div className='space-y-4'>
                    <div>
                        <dt className='text-sm font-medium text-muted-foreground'>Company name:</dt>
                        <dd className='text-sm text-card-foreground mt-1'>
                            <a href='#' className='text-primary hover:text-primary/80 hover:underline transition-colors'>
                                No Company (In searching...)
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt className='text-sm font-medium text-muted-foreground'>Salary:</dt>
                        <dd className='text-sm text-card-foreground mt-1'>{cv.hero.salary}</dd>
                    </div>
                    <div>
                        <dt className='text-sm font-medium text-muted-foreground'>Location:</dt>
                        <dd className='text-sm text-card-foreground mt-1'>{cv?.hero?.location || 'Ukraine'}</dd>
                    </div>
                    <div>
                        <dt className='text-sm font-medium text-muted-foreground'>Employment Type:</dt>
                        <dd className='text-sm text-card-foreground mt-1'>{cv?.hero?.employment_type || 'Full-time'}</dd>
                    </div>
                    <div>
                        <dt className='text-sm font-medium text-muted-foreground'>Work Mode:</dt>
                        <dd className='text-sm text-card-foreground mt-1'>{cv?.hero?.work_mode || 'Remote'}</dd>
                    </div>
                    <div>
                        <dt className='text-sm font-medium text-muted-foreground'>Language:</dt>
                        <dd className='text-sm text-card-foreground mt-1'>Ukrainian: Native / English: Conversational</dd>
                    </div>
                </div>
            </div>
        </div>
    )
}
