'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Amara Diallo',
    role: 'Computer Science, University of Nairobi',
    country: 'Kenya',
    quote: 'UNIVO connected me to a scholarship I never would have found on my own. Now I am completing my masters fully funded. This platform changed my life trajectory completely.',
    stars: 5,
    initials: 'AD',
    gradient: 'from-electric-600 to-cyan-500',
  },
  {
    name: 'Kwame Asante',
    role: 'Engineering Student, KNUST',
    country: 'Ghana',
    quote: 'The career development resources helped me land an internship at a top tech firm after just two months on the platform. The resume review and mock interviews were invaluable.',
    stars: 5,
    initials: 'KA',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Zainab Okonkwo',
    role: 'Business Administration, UI',
    country: 'Nigeria',
    quote: 'The networking opportunities on UNIVO are unlike anything else. I connected with a mentor who helped me launch my first startup while still in school. Incredible community.',
    stars: 5,
    initials: 'ZO',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Tendai Moyo',
    role: 'Medical Student, UZ',
    country: 'Zimbabwe',
    quote: 'As a medical student, finding research opportunities was my biggest challenge. UNIVO surfaced a research internship at a top hospital — something I could never have found alone.',
    stars: 5,
    initials: 'TM',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Fatima Al-Hassan',
    role: 'Data Science, AUST',
    country: 'Nigeria',
    quote: 'The digital resources library alone is worth joining UNIVO. High-quality courses, textbooks and study materials that would cost hundreds of dollars — all in one place.',
    stars: 5,
    initials: 'FA',
    gradient: 'from-rose-500 to-pink-500',
  },
]

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="section-padding bg-navy-50 dark:bg-navy-950/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-electric-600 dark:text-electric-400 bg-electric-600/10 rounded-full mb-4 uppercase tracking-widest">
            Student Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-navy-950 dark:text-white">Real students, </span>
            <span className="gradient-text">real impact</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-dark rounded-3xl p-8 md:p-12 border border-electric-600/20"
            >
              <Quote className="w-10 h-10 text-electric-600/40 mb-6" />
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 font-medium">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${testimonials[current].gradient} flex items-center justify-center text-white font-bold`}>
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonials[current].name}</div>
                    <div className="text-white/40 text-sm">{testimonials[current].role} · {testimonials[current].country}</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-electric-600/50 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? 'bg-electric-500 w-6' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-electric-600/50 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
