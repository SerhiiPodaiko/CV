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
    console.log('downloadPdf')
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
