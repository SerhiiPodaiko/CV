import { useCallback, useEffect, useState } from 'react'
import type { CvData } from '@/types/cv'
import { defaultCvData } from '@/data/cv.default'

interface UseCvReturn {
  cv: CvData
  loading: boolean
  downloadPdf: () => Promise<void>
}

export function useCv(): UseCvReturn {
  const [cv, setCv] = useState<CvData>(defaultCvData)
  const [loading, setLoading] = useState(true)

  const downloadPdf = useCallback(async () => {
    const pdfUrl = 'https://docs.google.com/document/d/1470u2ftJGjrfR2dNC-QbHpp-_fcuru8w/export?format=pdf'

    const link = document.createElement('a')
    link.href = pdfUrl
    link.setAttribute('download', 'Serhii_Podaiko_Frontend_Engineer_CV.pdf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 100))

      setCv(defaultCvData)

      setLoading(false)
    }

    loadData()
  }, [])

  return {
    cv,
    loading,
    downloadPdf
  }
}
