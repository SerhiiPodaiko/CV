import { Card } from '@/components/ui/Card'

interface AboutBlockProps {
    about: string
}

export function AboutBlock({ about }: AboutBlockProps) {
    return (
        <Card
            title={'About'}
        >
              <span className='text-sm whitespace-pre-wrap leading-relaxed'>
                  {about || 'Write a short summary about yourself...'}
              </span>
        </Card>
    )
}
