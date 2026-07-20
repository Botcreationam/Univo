'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap, Star, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const floatingShapes = [
  { size: 'w-64 h-64', pos: 'top-10 -left-20', color: 'from-electric-600/20 to-cyan-500/10', delay: 0, duration: 8 },
  { size: 'w-48 h-48', pos: 'top-1/3 -right-16', color: 'from-cyan-500/20 to-electric-600/10', delay: 2, duration: 10 },
  { size: 'w-32 h-32', pos: 'bottom-1/4 left-1/4', color: 'from-electric-600/15 to-transparent', delay: 1, duration: 7 },
  { size: 'w-20 h-20', pos: 'top-1/4 left-1/3', color: 'from-cyan-500/25 to-transparent', delay: 3, duration: 9 },
]

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 5,
}))

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const glowX = useTransform(springX, [0, 1], ['-10%', '10%'])
  const glowY = useTransform(springY, [0, 1], ['-10%', '10%'])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX.set(e.clientX / innerWidth)
      mouseY.set(e.clientY / innerHeight)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950"
    >
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.2) 0%, transparent 60%)',
            'radial-gradient(ellipse at 60% 30%, rgba(37,99,235,0.3) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(6,182,212,0.2) 0%, transparent 60%)',
            'radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.2) 0%, transparent 60%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          x: glowX,
          y: glowY,
          background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-electric-600/40"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={cn(
            'absolute rounded-full bg-gradient-to-br blur-3xl',
            shape.size,
            shape.pos,
            shape.color
          )}
          animate={{ y: [0, -20, 0], rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-600/10 border border-electric-600/30 text-electric-400 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>The Future of Student Success</span>
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-white">Empowering</span>
            <br />
            <span className="text-white">Students </span>
            <span className="gradient-text">Beyond</span>
            <br />
            <span className="text-white">The Classroom</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-white/60 leading-relaxed mb-10"
        >
          UNIVO connects students with educational opportunities, career guidance,
          scholarships, and innovation programs — building Africa's next generation of leaders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37,99,235,0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-electric-600 to-cyan-500 text-white font-semibold rounded-2xl shadow-lg shadow-electric-600/30 transition-all"
          >
            Join UNIVO
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-electric-600/50 text-white font-semibold rounded-2xl transition-all"
          >
            <Play className="w-4 h-4 text-electric-400" fill="currentColor" />
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {[
            { value: '5,000+', label: 'Students Supported', icon: Zap },
            { value: '50+', label: 'Universities', icon: Star },
            { value: '200+', label: 'Opportunities', icon: Sparkles },
          ].map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-electric-600/10 border border-electric-600/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-electric-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-xl">{value}</div>
                <div className="text-white/40 text-xs">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}
