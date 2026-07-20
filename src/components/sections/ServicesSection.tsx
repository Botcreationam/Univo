'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Briefcase, Award, Rocket, Users, Laptop, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: BookOpen,
    title: 'Academic Support',
    desc: 'Tutoring, study resources, academic mentorship and peer-learning networks to help you excel.',
    gradient: 'from-blue-500/10 to-electric-600/10',
    border: 'hover:border-blue-500/50',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    tag: 'Core',
  },
  {
    icon: Briefcase,
    title: 'Career Development',
    desc: 'Resume building, interview prep, internship placements and direct connections to top employers.',
    gradient: 'from-electric-600/10 to-cyan-500/10',
    border: 'hover:border-electric-600/50',
    iconColor: 'text-electric-400',
    iconBg: 'bg-electric-600/10',
    tag: 'Popular',
  },
  {
    icon: Award,
    title: 'Scholarships',
    desc: 'Curated scholarship database with application guidance and direct submission support.',
    gradient: 'from-amber-500/10 to-orange-500/10',
    border: 'hover:border-amber-500/50',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
    tag: 'High Demand',
  },
  {
    icon: Rocket,
    title: 'Innovation Programs',
    desc: 'Hackathons, startup accelerators, and innovation challenges for student entrepreneurs.',
    gradient: 'from-purple-500/10 to-pink-500/10',
    border: 'hover:border-purple-500/50',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    tag: 'New',
  },
  {
    icon: Users,
    title: 'Student Networking',
    desc: 'Connect with peers, alumni, mentors, and industry professionals across Africa and beyond.',
    gradient: 'from-cyan-500/10 to-teal-500/10',
    border: 'hover:border-cyan-500/50',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    tag: 'Community',
  },
  {
    icon: Laptop,
    title: 'Digital Resources',
    desc: 'E-books, online courses, research tools and digital learning materials — all in one place.',
    gradient: 'from-emerald-500/10 to-green-500/10',
    border: 'hover:border-emerald-500/50',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    tag: 'Essential',
  },
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="section-padding bg-navy-50 dark:bg-navy-950/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-electric-600 dark:text-electric-400 bg-electric-600/10 rounded-full mb-4 uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-navy-950 dark:text-white">Everything a student </span>
            <span className="gradient-text">needs to thrive</span>
          </h2>
          <p className="max-w-xl mx-auto text-navy-900/60 dark:text-white/50 text-lg">
            Six pillars of student success — designed to work together as one unified platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={cn(
                'group relative p-7 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden',
                'bg-white dark:bg-white/[0.02] border-navy-100 dark:border-white/5',
                service.border
              )}
            >
              <div className={cn(
                'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                service.gradient
              )} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold text-navy-900/40 dark:text-white/30 uppercase tracking-wider">{service.tag}</span>
                  <ArrowUpRight className={cn('w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0', service.iconColor)} />
                </div>

                <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-5', service.iconBg)}>
                  <service.icon className={cn('w-6 h-6', service.iconColor)} />
                </div>

                <h3 className="text-lg font-bold text-navy-950 dark:text-white mb-3">{service.title}</h3>
                <p className="text-navy-900/60 dark:text-white/40 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
