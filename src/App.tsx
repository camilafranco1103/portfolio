import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import Projects from './components/Projects'
import About from './components/About'
import FoodStoreDetails from './components/FoodStoreDetails'
import TechnologyMarquee from './components/TechnologyMarquee'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-reveal-on-scroll]')
    if (!sections.length || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.remove('reveal-pending')
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    )

    sections.forEach((section) => {
      const { top, bottom } = section.getBoundingClientRect()
      const alreadyVisible = bottom > 0 && top < window.innerHeight

      if (alreadyVisible) {
        section.classList.add('is-revealed')
      } else {
        section.classList.add('reveal-pending')
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const root = document.documentElement
    const body = document.body
    let isListening = false
    let hasInitialPosition = false
    let animationFrame = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    function writePosition() {
      root.style.setProperty('--cursor-x', `${currentX}px`)
      root.style.setProperty('--cursor-y', `${currentY}px`)
    }

    function animatePosition() {
      currentX += (targetX - currentX) * 0.2
      currentY += (targetY - currentY) * 0.2
      writePosition()

      if (Math.abs(targetX - currentX) < 0.5 && Math.abs(targetY - currentY) < 0.5) {
        currentX = targetX
        currentY = targetY
        writePosition()
        animationFrame = 0
        return
      }

      animationFrame = window.requestAnimationFrame(animatePosition)
    }

    function hideGlow() {
      body.classList.remove('has-cursor-glow')
      hasInitialPosition = false
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
      animationFrame = 0
    }

    function handlePointerMove(event: PointerEvent) {
      if (event.pointerType !== 'mouse') return

      targetX = event.clientX
      targetY = event.clientY
      body.classList.add('has-cursor-glow')

      if (!hasInitialPosition) {
        currentX = targetX
        currentY = targetY
        hasInitialPosition = true
        writePosition()
        return
      }

      if (!animationFrame) animationFrame = window.requestAnimationFrame(animatePosition)
    }

    function handlePointerOut(event: PointerEvent) {
      if (event.relatedTarget === null) hideGlow()
    }

    function syncPointerSupport() {
      const shouldListen = finePointer.matches && !reducedMotion.matches
      if (shouldListen === isListening) return

      isListening = shouldListen
      if (shouldListen) {
        document.addEventListener('pointermove', handlePointerMove, { passive: true })
        document.addEventListener('pointerout', handlePointerOut, { passive: true })
        window.addEventListener('blur', hideGlow)
      } else {
        document.removeEventListener('pointermove', handlePointerMove)
        document.removeEventListener('pointerout', handlePointerOut)
        window.removeEventListener('blur', hideGlow)
        hideGlow()
      }
    }

    finePointer.addEventListener('change', syncPointerSupport)
    reducedMotion.addEventListener('change', syncPointerSupport)
    syncPointerSupport()

    return () => {
      finePointer.removeEventListener('change', syncPointerSupport)
      reducedMotion.removeEventListener('change', syncPointerSupport)
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerout', handlePointerOut)
      window.removeEventListener('blur', hideGlow)
      hideGlow()
      root.style.removeProperty('--cursor-x')
      root.style.removeProperty('--cursor-y')
    }
  }, [])

  if (window.location.pathname === '/proyectos/food-store') {
    return <FoodStoreDetails />
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <TechnologyMarquee />
      <About />
      <Contact />

      <WhatsAppButton />
    </>
  )
}

export default App
