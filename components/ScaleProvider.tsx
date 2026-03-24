'use client'
import { useEffect } from 'react'

export function ScaleProvider() {
  useEffect(() => {
    function scaleToFit() {
      const scale = window.innerWidth / 1600
      document.body.style.transform = `scale(${scale})`
      document.body.style.transformOrigin = 'top left'
      document.body.style.height = 'auto'
      document.documentElement.style.height = 'auto'
      const bodyNaturalHeight = document.body.scrollHeight
      document.documentElement.style.height = (bodyNaturalHeight * scale) + 'px'
      document.documentElement.style.overflowX = 'hidden'
      document.documentElement.style.overflowY = 'auto'
    }
    scaleToFit()
    window.addEventListener('resize', scaleToFit)
    return () => window.removeEventListener('resize', scaleToFit)
  }, [])
  return null
}
