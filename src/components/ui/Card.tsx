import { cn } from '@/lib/cn'
import type { ReactNode, ElementType } from 'react'

interface CardProps {
    title: string
    as?: ElementType
    children: ReactNode
    titleClassName?: string
}

export const Card = ({ title, children, as: Component = 'h2', titleClassName }: CardProps) => {
    return (
        <div className='bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border py-6 shadow-sm'>
            <div className='px-6'>
                <Component
                    className={cn('text-lg font-semibold text-card-foreground mb-4', titleClassName)}
                >
                    {title}
                </Component>

                {children}
            </div>
        </div>
    )
}
