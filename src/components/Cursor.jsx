import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    document.body.classList.add('no-cursor')

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    let raf
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }
      raf = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (!ringRef.current) return
      ringRef.current.style.width = '52px'
      ringRef.current.style.height = '52px'
      ringRef.current.style.margin = '-26px 0 0 -26px'
      ringRef.current.style.borderColor = 'rgba(0,212,255,0.9)'
    }

    const onLeave = () => {
      if (!ringRef.current) return
      ringRef.current.style.width = '34px'
      ringRef.current.style.height = '34px'
      ringRef.current.style.margin = '-17px 0 0 -17px'
      ringRef.current.style.borderColor = 'rgba(0,212,255,0.55)'
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    const attachListeners = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attachListeners()

    return () => {
      document.body.classList.remove('no-cursor')
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}
