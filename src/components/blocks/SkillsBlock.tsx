import { cn } from '@/lib/cn'

interface SkillsBlockProps {
  skills: string[]
  className?: string
}

export function SkillsBlock({ skills, className }: SkillsBlockProps) {
  return (
      <div className='flex flex-wrap gap-2'>
        {
          skills.map((skill, index) =>
              <span
                  key={index}
                  className={cn('inline-flex items-center justify-center hover:hover:bg-blue-700 rounded-md border border-slate-700 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs px-2 py-0.5', className)}
              >
              {skill}
            </span>
          )
        }
      </div>
  )
}
