'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Briefcase, Award, Rocket, Users, ShoppingBag, Brain, ArrowUpRight } from 'lucide-react'

const services = [
  { icon: Users, title: 'Campus Community', desc: 'Connect with peers across Zambian universities, join communities, share experiences, and build your network.', tag: 'Core' },
  { icon: Brain, title: 'AI Study Center', desc: 'AI-powered study tools, personalized learning paths, and smart recommendations to help you excel academically.', tag: 'New' },
  { icon: ShoppingBag, title: 'Marketplace', desc: 'Buy and sell textbooks, supplies, and services within a trusted student-only marketplace across Zambia.', tag: 'Popular' },
  { icon: BookOpen, title: 'Study Tools', desc: 'Access shared notes, past papers, study guides, and collaborative learning resources all in one place.', tag: 'Essential' },
  { icon: Briefcase, title: 'Opportunities', desc: 'Discover scholarships, internships, jobs, and programs curated for Zambian students and graduates.', tag: 'High Demand' },
  { icon: Award, title: 'Innovation Programs', desc: 'Hackathons, startup accelerators, and innovation challenges for student entrepreneurs in Zambia.', tag: 'Community' },
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
          <span className="text-sm font-semibold text-brand-500 dark:text-brand-400 uppercase tracking-wider">Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 text-navy-900 dark:text-white">
            Everything a Zambian student needs
          </h2>
          <p className="mt-5 text-lg text-navy-500 dark:text-navy-300">
            Campus, communities, study tools, marketplace, and opportunities. All in one platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group p-8 rounded-xl bg-white dark:bg-white/5 border border-navy-100 dark:border-white/10 card-hover hover:border-brand-500/30 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-brand-500 dark:text-brand-400" />
                </div>
                <span className="text-xs font-medium text-navy-400 dark:text-navy-500 uppercase tracking-wider">{service.tag}</span>
              </div>
              <h3 className="font-semibold text-navy-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-sm text-navy-500 dark:text-navy-400 leading-relaxed">{service.desc}</p>
              <ArrowUpRight className="w-4 h-4 text-brand-500 dark:text-brand-400 mt-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
