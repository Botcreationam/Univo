'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Users, Lightbulb } from 'lucide-react'

const values = [
  { icon: Target, title: 'Mission', desc: 'Break barriers and connect every student to the tools, networks, and opportunities they need to thrive.' },
  { icon: Eye, title: 'Vision', desc: 'A world where every student, regardless of background, has access to transformative educational opportunities.' },
  { icon: Users, title: 'Community First', desc: 'We build with students, not just for them. Every feature is shaped by real student feedback and needs.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We challenge the status quo with creative, tech-driven solutions to age-old educational barriers.' },
]

const timeline = [
  { year: '2022', title: 'Founded', desc: 'UNIVO was born from a vision to democratize student opportunity access across Africa.' },
  { year: '2023', title: 'First Community', desc: 'Launched our first student community with 500 members across 5 universities.' },
  { year: '2024', title: 'Platform Launch', desc: 'Full digital platform goes live, connecting students to scholarships and career resources.' },
  { year: '2025', title: 'Regional Expansion', desc: 'Expanded to 10 countries, with 5,000 students supported and 50 university partnerships.' },
  { year: '2026', title: 'Innovation Hub', desc: 'Launching the UNIVO Student Innovation Hub for the next generation of African entrepreneurs.' },
]

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-py bg-navy-50 dark:bg-navy-900/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">About</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 text-navy-900 dark:text-white">
            We exist to unlock potential
          </h2>
          <p className="mt-4 text-lg text-navy-500 dark:text-navy-300 leading-relaxed">
            UNIVO is a student-focused digital platform bridging the gap between ambition and opportunity,
            giving every student the resources, community, and guidance to succeed.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="p-6 rounded-xl bg-white dark:bg-white/5 border border-navy-100 dark:border-white/10 card-hover hover:border-blue-600/30 hover:shadow-lg hover:shadow-blue-600/5"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center mb-4">
                <value.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-navy-900 dark:text-white mb-2">{value.title}</h3>
              <p className="text-sm text-navy-500 dark:text-navy-400 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-10">Our journey</h3>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + 0.1 * i }}
                className="flex gap-6 items-start group"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-600/10 group-hover:ring-blue-600/20 transition-all" />
                  {i < timeline.length - 1 && <div className="w-px h-full bg-navy-200 dark:bg-white/10 mt-1 min-h-[2rem]" />}
                </div>
                <div className="pb-2">
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{item.year}</span>
                  <h4 className="font-semibold text-navy-900 dark:text-white mt-1">{item.title}</h4>
                  <p className="text-sm text-navy-500 dark:text-navy-400 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
