'use client'
import { useEffect } from 'react'

export function ScaleProvider() {
  useEffect(() => {
    function scaleToFit() {
      const isMobile = window.innerWidth < 768

      if (isMobile) {
        document.body.style.transform = 'none'
        document.body.style.width = '100%'
        document.documentElement.style.height = 'auto'
        document.documentElement.style.overflowX = 'hidden'
        document.documentElement.style.overflowY = 'auto'
        document.documentElement.style.removeProperty('--section-height')
      } else {
        const scale = window.innerWidth / 1600
        const sectionHeight = Math.round(window.innerHeight / scale)
        document.documentElement.style.setProperty('--section-height', `${sectionHeight}px`)
        document.body.style.transform = `scale(${scale})`
        document.body.style.transformOrigin = 'top left'
        document.body.style.width = '1600px'
        document.body.style.height = 'auto'
        document.documentElement.style.height = 'auto'
        const bodyNaturalHeight = document.body.scrollHeight
        document.documentElement.style.height = (bodyNaturalHeight * scale) + 'px'
        document.documentElement.style.overflowX = 'hidden'
        document.documentElement.style.overflowY = 'auto'
      }
    }

    scaleToFit()
    window.addEventListener('resize', scaleToFit)

    const observer = new ResizeObserver(scaleToFit)
    observer.observe(document.body)

    return () => {
      window.removeEventListener('resize', scaleToFit)
      observer.disconnect()
    }
  }, [])
  return null
}
