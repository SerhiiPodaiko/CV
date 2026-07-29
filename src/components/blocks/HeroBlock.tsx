import type { CvHero } from '@/types/cv'
import { Card } from '@/components/ui/Card'
import { SkillsBlock } from '@/components/blocks/SkillsBlock'

interface HeroBlockProps {
  hero: CvHero
}

export function HeroBlock({ hero }: HeroBlockProps) {
  return (
      <Card
          as={'h1'}
          title={hero?.title}
          titleClassName={'text-2xl font-bold text-card-foreground mb-2'}
      >
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
          <div>
            <div className='flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4'>
              <span>Remote / Hybrid</span>
              <span>•</span>
              <span>{hero.salary}</span>
            </div>
            <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
              <div className='flex items-center'>
                <svg
                    fill='none'
                    width='24'
                    height='24'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    xmlns='http://www.w3.org/2000/svg'
                    className='lucide lucide-building2-icon w-4 h-4 mr-1'
                >
                  <path d='M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z' />
                  <path d='M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2' />
                  <path d='M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2' />
                  <path d='M10 6h4' />
                  <path d='M10 10h4' />
                  <path d='M10 14h4' />
                  <path d='M10 18h4' />
                </svg>
                {'No Company'}
              </div>
              <div className='flex items-center'>
                <svg
                    width='24'
                    fill='none'
                    height='24'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    xmlns='http://www.w3.org/2000/svg'
                    className='lucide lucide-map-pin-icon w-4 h-4 mr-1'
                >
                  <path d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' />
                  <circle cx='12' cy='10' r='3' />
                </svg>
                {hero?.location || 'Ukraine'}
              </div>
            </div>
          </div>

          <div className='md:self-end flex flex-wrap items-center gap-2 pt-2 sm:pt-0 sm:self-center'>
            <SkillsBlock skills={[hero.email]} />
            <a
                href={hero.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='px-3 py-1.5 inline-flex items-center justify-center hover:bg-secondary/80 rounded-md border border-border font-medium text-xs bg-secondary text-secondary-foreground transition-colors'
            >
              Linkedin
            </a>
          </div>
        </div>
      </Card>
  )
}
