import { useEffect } from 'react'

/**
 * useParallax - Hook that replicates all the animation logic from legacy/js/main.js
 * Handles smooth 60fps flower parallax, mouse tracking, card tilt, and more.
 */
export function useParallax() {
  useEffect(() => {
    // Select DOM Elements
    const flowerLeft = document.querySelector('.flower-bottom-left')
    const flowerRight = document.querySelector('.flower-top-right')
    const petals = document.querySelectorAll('.petal')
    const orbitalContainer = document.querySelector('.orbital-container')
    const heroContent = document.querySelector('.hero-content')
    const scrollIndicator = document.querySelector('.scroll-indicator')
    const navbar = document.querySelector('.navbar')
    const aboutFlower = document.querySelector('.about-flower-wrap')
    const aboutOrbitSvg = document.querySelector('.about-orbit-svg')
    const navItems = document.querySelectorAll('.nav-item')
    const sections = document.querySelectorAll('.hero, section')

    // Animation State
    let targetScrollY = 0
    let currentScrollY = 0
    const ease = 0.09 // LERP smoothing factor

    // Motion Configuration
    const speedMultiplier = 1.0
    const enableRotation = true
    const enableMouse = true

    // Mouse tilt offsets
    let mouseX = 0
    let mouseY = 0
    let currentMouseX = 0
    let currentMouseY = 0

    let animFrameId = null

    // Track scroll position
    const onScroll = () => {
      targetScrollY = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Track mouse for subtle 3D parallax
    const onMouseMove = (e) => {
      if (!enableMouse) return
      const { innerWidth, innerHeight } = window
      mouseX = (e.clientX / innerWidth - 0.5) * 40  // -20 to +20 px
      mouseY = (e.clientY / innerHeight - 0.5) * 40  // -20 to +20 px
    }
    window.addEventListener('mousemove', onMouseMove)

    // Main Animation Loop
    function animate() {
      // Smooth LERP interpolation for scroll
      currentScrollY += (targetScrollY - currentScrollY) * ease

      // Smooth LERP interpolation for mouse
      currentMouseX += (mouseX - currentMouseX) * 0.05
      currentMouseY += (mouseY - currentMouseY) * 0.05

      // 1. Move Bottom-Left Flower
      if (flowerLeft) {
        const moveX = (-currentScrollY * 0.28 * speedMultiplier) + (currentMouseX * 0.6)
        const moveY = (currentScrollY * 0.48 * speedMultiplier) + (currentMouseY * 0.6)
        const rot = enableRotation ? (currentScrollY * 0.045 * speedMultiplier) : 0
        const scale = 1 + (currentScrollY * 0.0003)
        flowerLeft.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(${rot}deg) scale(${scale})`
      }

      // 2. Move Top-Right Flower
      if (flowerRight) {
        const moveX = (currentScrollY * 0.22 * speedMultiplier) - (currentMouseX * 0.4)
        const moveY = (-currentScrollY * 0.42 * speedMultiplier) - (currentMouseY * 0.4)
        const rot = enableRotation ? (-currentScrollY * 0.04 * speedMultiplier) : 0
        const scale = 1 - (currentScrollY * 0.0002)
        flowerRight.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(${rot}deg) scale(${scale})`
      }

      // 3. Move Floating Petals with individual 3D depth layers
      const depthFactors = [0.85, 0.45, 0.70, 1.15, 0.55]
      petals.forEach((petal, index) => {
        const factor = (depthFactors[index % depthFactors.length]) * speedMultiplier
        const moveX = (Math.sin(index + currentScrollY * 0.003) * 30) - (currentMouseX * factor * 0.8)
        const moveY = (currentScrollY * 0.65 * factor) + (currentMouseY * factor * 0.8)
        const rot = enableRotation ? (currentScrollY * 0.12 * (index % 2 === 0 ? 1 : -1)) : 0
        petal.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(${rot}deg)`
      })

      // 4. Move Orbital Rings
      if (orbitalContainer) {
        const rot = currentScrollY * 0.07 * speedMultiplier
        const scale = 1 + (currentScrollY * 0.0002)
        orbitalContainer.style.transform = `translate(-50%, -50%) rotate(${rot}deg) scale(${scale})`
      }

      // 5. Fade and Drift Center Text
      if (heroContent) {
        const textMoveY = currentScrollY * 0.18
        const textOpacity = Math.max(0, 1 - (currentScrollY / 520))
        heroContent.style.transform = `translate3d(0, ${textMoveY}px, 0)`
        heroContent.style.opacity = textOpacity
      }

      // 6. Scroll Indicator fades out quickly
      if (scrollIndicator) {
        const indOpacity = Math.max(0, 1 - (currentScrollY / 120))
        scrollIndicator.style.opacity = indOpacity
        scrollIndicator.style.transform = `translateX(-50%) translateY(${currentScrollY * 0.4}px)`
      }

      // 7. Sobre Mí section parallax (Flower tilt & gentle drift)
      if (aboutFlower) {
        const tiltX = currentMouseX * 0.45
        const tiltY = currentMouseY * 0.45
        const rot = enableRotation ? (currentScrollY * 0.015 * speedMultiplier) : 0
        aboutFlower.style.transform = `translate3d(${tiltX}px, ${tiltY}px, 0) rotate(${rot}deg)`
      }

      // 8. Sobre Mí title orbit gentle tilt
      if (aboutOrbitSvg) {
        const orbitRot = currentMouseX * 0.15
        aboutOrbitSvg.style.transform = `translate(-50%, -50%) rotate(${orbitRot}deg)`
      }

      // 9. Navbar background blur adjustment & dynamic active link (ScrollSpy)
      if (navbar) {
        if (currentScrollY > 60) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      }

      // Dynamic Active Section Link in Navbar
      let activeSectionId = ''
      sections.forEach(sec => {
        const rect = sec.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.15) {
          activeSectionId = sec.getAttribute('id')
        }
      })

      if (activeSectionId) {
        navItems.forEach(item => {
          const link = item.querySelector('a')
          if (link && link.getAttribute('href') === `#${activeSectionId}`) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })
      }

      animFrameId = requestAnimationFrame(animate)
    }

    // Start the render loop
    animFrameId = requestAnimationFrame(animate)

    // Interactive 3D Perspective Tilt & Dynamic Spotlight for cards
    const tiltCards = document.querySelectorAll('.skill-card-box, .project-card-box, .tech-card-box')
    const cardMouseMoveHandlers = []
    const cardMouseLeaveHandlers = []

    tiltCards.forEach(card => {
      const onCardMouseMove = (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -7
        const rotateY = ((x - centerX) / centerX) * 7

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`
        card.style.setProperty('--spotlight-x', `${x.toFixed(1)}px`)
        card.style.setProperty('--spotlight-y', `${y.toFixed(1)}px`)
      }
      const onCardMouseLeave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)'
      }

      card.addEventListener('mousemove', onCardMouseMove)
      card.addEventListener('mouseleave', onCardMouseLeave)
      cardMouseMoveHandlers.push({ card, handler: onCardMouseMove })
      cardMouseLeaveHandlers.push({ card, handler: onCardMouseLeave })
    })

    // Interactive Magnetic Micro-Physics for Contact Buttons
    const contactButtons = document.querySelectorAll('.contact-btn-item')
    const btnMouseMoveHandlers = []
    const btnMouseLeaveHandlers = []

    contactButtons.forEach(btn => {
      const onBtnMouseMove = (e) => {
        const rect = btn.getBoundingClientRect()
        const x = (e.clientX - rect.left) - rect.width / 2
        const y = (e.clientY - rect.top) - rect.height / 2
        btn.style.transform = `translate3d(${x * 0.22}px, ${(y * 0.22) - 6}px, 0) scale(1.05)`
      }
      const onBtnMouseLeave = () => {
        btn.style.transform = ''
      }
      btn.addEventListener('mousemove', onBtnMouseMove)
      btn.addEventListener('mouseleave', onBtnMouseLeave)
      btnMouseMoveHandlers.push({ btn, handler: onBtnMouseMove })
      btnMouseLeaveHandlers.push({ btn, handler: onBtnMouseLeave })
    })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
      if (animFrameId) cancelAnimationFrame(animFrameId)

      cardMouseMoveHandlers.forEach(({ card, handler }) => card.removeEventListener('mousemove', handler))
      cardMouseLeaveHandlers.forEach(({ card, handler }) => card.removeEventListener('mouseleave', handler))
      btnMouseMoveHandlers.forEach(({ btn, handler }) => btn.removeEventListener('mousemove', handler))
      btnMouseLeaveHandlers.forEach(({ btn, handler }) => btn.removeEventListener('mouseleave', handler))
    }
  }, [])
}
