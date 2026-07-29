import { cn } from '@/lib/cn'
import { useState } from 'react'
import { Download, Loader2 } from 'lucide-react'

interface ToolbarProps {
  name: string
  onDownload: () => Promise<void>
}

export function Toolbar({ name, onDownload }: ToolbarProps) {
  const [downloading, setDownloading] = useState(false)

  const handleDownload = async () => {
    setDownloading(true)
    try {
      await Promise.all([
        onDownload(),
        new Promise(resolve => setTimeout(resolve, 1000))
      ])
    } finally {
      setDownloading(false)
    }
  }

  return (
      <header className='sticky top-0 border-b border-border h-[4.5rem] flex items-center z-20 bg-background'>
        <div className='mx-auto flex max-w-6xl w-full items-center justify-between gap-4 px-4 py-3 md:px-6'>
          <h2 className='font-medium text-white'>
            {name}
          </h2>

          <div className='flex items-center gap-2'>
            <button
                type='button'
                disabled={downloading}
                onClick={handleDownload}
                className={cn(
                    'cursor-pointer bg-background inline-flex items-center gap-2 md:rounded-md rounded lg:rounded-lg px-2 lg:px-4 py-1 lg:py-2',
                    'lg:text-sm text-xs font-medium text-white transition-colors',
                    'bg-blue-700 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed',
                )}
            >
              {downloading ? (
                  <Loader2 className='h-4 w-4 animate-spin' />
              ) : (
                  <Download className='h-4 w-4' />
              )}
              <span className='hidden md:inline'>Download CV</span>
            </button>
          </div>
        </div>
      </header>
  )
}
