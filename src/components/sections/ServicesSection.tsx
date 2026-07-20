'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Briefcase, Award, Rocket, Users, Laptop, ArrowUpRight } from 'lucide-react'

const services = [
  { icon: BookOpen, title: 'Academic Support', desc: 'Tutoring, study resources, academic mentorship and peer-learning networks to help you excel.', tag: 'Core' },
  { icon: Briefcase, title: 'Career Development', desc: 'Resume building, interview prep, internship placements and direct connections to employers.', tag: 'Popular' },
  { icon: Award, title: 'Scholarships', desc: 'Curated scholarship database with application guidance and direct submission support.', tag: 'High Demand' },
  { icon: Rocket, title: 'Innovation Programs', desc: 'Hackathons, startup accelerators, and innovation challenges for student entrepreneurs.', tag: 'New' },
  { icon: Users, title: 'Student Networking', desc: 'Connect with peers, alumni, mentors, and industry professionals across Africa and beyond.', tag: 'Community' },
  { icon: Laptop, title: 'Digital Resources', desc: 'E-books, online courses, research tools and digital learning materials all in one place.', tag: 'Essential' },
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="section-py bg-white dark:bg-navy-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-20"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 text-navy-900 dark:text-white">
            Everything a student needs to thrive
          </h2>
          <p className="mt-5 text-lg text-navy-500 dark:text-navy-300">
            Six pillars of student success, designed to work together as one unified platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group p-8 rounded-xl bg-white dark:bg-white/5 border border-navy-100 dark:border-white/10 card-hover hover:border-blue-600/30 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-xs font-medium text-navy-400 dark:text-navy-500 uppercase tracking-wider">{service.tag}</span>
              </div>
              <h3 className="font-semibold text-navy-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-sm text-navy-500 dark:text-navy-400 leading-relaxed">{service.desc}</p>
              <ArrowUpRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
