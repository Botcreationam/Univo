'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '5,000+', label: 'Students supported' },
  { value: '50+', label: 'University partners' },
  { value: '200+', label: 'Opportunities listed' },
]

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-navy-950"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-100" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />

      {/* Radial gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
          The future of student success
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-navy-900 dark:text-white"
        >
          Empowering students
          <br />
          <span className="text-gradient">beyond the classroom</span>
        </motion.h1>

        {/* Value proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto mt-6 text-lg text-navy-500 dark:text-navy-300 leading-relaxed"
        >
          UNIVO connects students with educational opportunities, career guidance,
          scholarships, and innovation programs across Africa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors w-full sm:w-auto justify-center"
          >
            Join UNIVO
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-navy-700 dark:text-navy-200 bg-navy-100 dark:bg-white/5 hover:bg-navy-200 dark:hover:bg-white/10 border border-navy-200 dark:border-white/10 rounded-xl transition-colors w-full sm:w-auto justify-center"
          >
            Learn more
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-8 md:gap-16 mt-16 pt-10 border-t border-navy-100 dark:border-white/10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-left">
              <div className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-navy-400 dark:text-navy-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
