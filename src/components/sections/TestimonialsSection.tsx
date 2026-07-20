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
  },
  {
    name: 'Kwame Asante',
    role: 'Engineering Student, KNUST',
    country: 'Ghana',
    quote: 'The career development resources helped me land an internship at a top tech firm after just two months on the platform. The resume review and mock interviews were invaluable.',
    stars: 5,
    initials: 'KA',
  },
  {
    name: 'Zainab Okonkwo',
    role: 'Business Administration, UI',
    country: 'Nigeria',
    quote: 'The networking opportunities on UNIVO are unlike anything else. I connected with a mentor who helped me launch my first startup while still in school. Incredible community.',
    stars: 5,
    initials: 'ZO',
  },
  {
    name: 'Tendai Moyo',
    role: 'Medical Student, UZ',
    country: 'Zimbabwe',
    quote: 'As a medical student, finding research opportunities was my biggest challenge. UNIVO surfaced a research internship at a top hospital, something I could never have found alone.',
    stars: 5,
    initials: 'TM',
  },
]

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="stories" className="section-py bg-navy-50 dark:bg-navy-900/30">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Stories</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 text-navy-900 dark:text-white">
            Real students, real impact
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-10 md:p-12 rounded-2xl bg-white dark:bg-white/5 border border-navy-100 dark:border-white/10"
          >
            <Quote className="w-8 h-8 text-blue-600/30 mb-8" />
            <p className="text-lg md:text-xl text-navy-700 dark:text-navy-200 leading-relaxed mb-10 font-medium">
              {testimonials[current].quote}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonials[current].initials}
                </div>
                <div>
                  <div className="font-semibold text-navy-900 dark:text-white">{testimonials[current].name}</div>
                  <div className="text-sm text-navy-400 dark:text-navy-500">{testimonials[current].role}</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="w-9 h-9 rounded-lg border border-navy-200 dark:border-white/10 flex items-center justify-center text-navy-500 dark:text-navy-400 hover:border-blue-600/50 hover:text-blue-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${i === current ? 'w-6 bg-blue-600' : 'w-1.5 bg-navy-300 dark:bg-white/20'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="w-9 h-9 rounded-lg border border-navy-200 dark:border-white/10 flex items-center justify-center text-navy-500 dark:text-navy-400 hover:border-blue-600/50 hover:text-blue-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
