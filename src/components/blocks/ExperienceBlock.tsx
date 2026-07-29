import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import type { CvExperience } from '@/types/cv'
import { SkillsBlock } from '@/components/blocks/SkillsBlock'

interface ExperienceBlockProps {
    experience: CvExperience[]
}

export function ExperienceBlock({ experience }: ExperienceBlockProps) {
    const [show, setShow] = useState<boolean>(false)

    return (
        <Card title={'Experience'}>
            <div className='relative'>
                <button
                    onClick={() => setShow(prevShow => !prevShow)}
                    className={`absolute right-2 text-sm text-muted-foreground hover:text-foreground  rounded-md hover:bg-blue-700 cursor-pointer transition-colors ${show ? '-top-10' : '-top-5'}`}
                >
                    <ChevronDown className={`transition duration-300 ${show ? '-rotate-180' : 'rotate-0'}`} />
                </button>

                {/* Головний контейнер з анімацією висоти через grid */}
                <div
                    className={`grid transition-all duration-300 ease-in-out ${
                        show ? 'grid-rows-[1fr] opacity-100 mt-0' : 'grid-rows-[0fr] opacity-0 -mt-6'
                    }`}
                >
                    <div className='overflow-hidden'>
                        <div className='space-y-8 pt-2'>
                            {experience.map((item) => (
                                <article
                                    key={item.id}
                                    className='relative border-l-2 border-blue-100 pl-6'
                                >
                                    <div className='flex flex-wrap items-baseline gap-x-2'>
                                        <span className='font-semibold text-foreground'>{item.role || 'Role'}</span>
                                        <span className='text-muted-foreground'>at</span>
                                        <span className='font-medium text-foreground'>{item.company || 'Company'}</span>
                                    </div>

                                    <div className='mb-3 flex flex-wrap items-center gap-x-3 text-sm text-muted-foreground'>
                                        <span className='text-xs'>{item.period || 'Period'}</span>
                                        <span>•</span>
                                        <span className='text-xs'>{item.location || 'Location'}</span>
                                        <span>•</span>
                                        <span className='text-xs'>{item.employment_type || 'Type'}</span>
                                    </div>

                                    <ul className='space-y-2 text-xs whitespace-pre-wrap leading-relaxed'>
                                        {item.descriptions.map((description, index) => <li key={index}>- {description}</li>)}
                                    </ul>

                                    <div className='mt-3'>
                                        <SkillsBlock skills={item.tags}/>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
