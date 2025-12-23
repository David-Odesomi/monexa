"use client"

import { useEffect, useRef } from "react"

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const { clientX, clientY } = e
      const x = clientX / window.innerWidth
      const y = clientY / window.innerHeight
      
      const els = containerRef.current.querySelectorAll('.parallax-blob')
      els.forEach((el, i) => {
        // Significantly reduced speed for "almost imperceptible" response
        const speed = (i + 1) * 10 
        const xOffset = (x - 0.5) * speed
        const yOffset = (y - 0.5) * speed
        // Utilize translate3d for GPU acceleration
        ;(el as HTMLElement).style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`
      })
    }
    
    // Throttle via requestAnimationFrame if needed, but simple listener is okay for this lightness
    let rafId: number
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => handleMouseMove(e))
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [contain:paint] bg-background">
      {/* 
        Anti-Gravity Ambience:
        - Massive blurs for "light diffusion"
        - Zero sharp edges
        - Extremely subtle coloring matching the orange/primary theme but barely there
      */}
      
      {/* Light diffusion base */}
      <div className="absolute inset-0 bg-background mix-blend-normal opacity-90 z-0" />

      {/* Primary Light Source - Drifting */}
      <div 
        className="parallax-blob absolute top-[-20%] left-[10%] w-[120vw] h-[120vw] rounded-full bg-primary/5 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-subtle-drift" 
        style={{ animationDelay: '0s' }}
      />
      
      {/* Secondary Warmth - Breathing */}
      <div 
        className="parallax-blob absolute top-[20%] right-[-20%] w-[100vw] h-[100vw] rounded-full bg-orange-200/5 blur-[140px] mix-blend-multiply dark:mix-blend-screen animate-breathe" 
        style={{ animationDelay: '-5s' }}
      />
      
      {/* Deep Atmosphere - Pulsing */}
      <div 
        className="parallax-blob absolute bottom-[-40%] left-[20%] w-[130vw] h-[130vw] rounded-full bg-rose-100/10 blur-[160px] mix-blend-multiply dark:mix-blend-screen animate-subtle-pulse" 
        style={{ animationDelay: '-10s' }}
      />

      {/* Optional: Minimal Grain for Air Texture (Extremely low opacity) */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
          transform: 'scale(1)',
        }}
      />
    </div>
  )
}
