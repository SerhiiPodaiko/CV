import { Loader2 } from 'lucide-react'

import { useCv } from '@/hooks/useCv'
import { Footer } from '@/components/layout/Footer'
import { Toolbar } from '@/components/layout/Toolbar'
import { HeroBlock } from '@/components/blocks/HeroBlock'
import { AboutBlock } from '@/components/blocks/AboutBlock'
import { CvShortInfo } from '@/components/blocks/CvShortInfo'
import { EducationBlock } from '@/components/blocks/EducationBlock'
import { TechStackBlock } from '@/components/blocks/TechStackBlock'
import { ExperienceBlock } from '@/components/blocks/ExperienceBlock'

export function App() {
  const { cv, loading, downloadPdf } = useCv()

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <Loader2 className='h-8 w-8 animate-spin text-blue-600' />
      </div>
    )
  }

  return (
      <div className='min-h-dvh bg-background flex flex-col'>
          {/* HEADER */}
          <Toolbar
              onDownload={downloadPdf}
              name={cv?.hero?.name || 'Unknown'}
          />

          {/* CONTENT */}
          <main className='flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full'>
              <div className='max-w-7xl mx-auto'>
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                      <article className='lg:col-span-2 space-y-6'>
                          <HeroBlock
                              hero={cv.hero}
                          />

                          <TechStackBlock
                              skills={cv.skills}
                          />

                          <AboutBlock
                              about={cv.about}
                          />

                          <ExperienceBlock
                              experience={cv.experience}
                          />

                          <EducationBlock
                              education={cv.education}
                          />
                      </article>

                      <div className='space-y-6'>
                          <CvShortInfo cv={cv} />
                      </div>
                  </div>
              </div>
          </main>

          {/* FOOTER */}
          <Footer cv={cv} />
      </div>
  )
}
