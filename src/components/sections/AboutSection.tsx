'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Users, Lightbulb } from 'lucide-react'

const values = [
  { icon: Target, title: 'Mission', desc: 'Build the social network that connects every Zambian student to the tools, networks, and opportunities they need to thrive.' },
  { icon: Eye, title: 'Vision', desc: 'Start in Zambia. Grow to the world. A platform where every student has access to transformative educational opportunities.' },
  { icon: Users, title: 'Community First', desc: 'We build with students, not just for them. Every feature is shaped by real Zambian student feedback and needs.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We challenge the status quo with creative, tech-driven solutions to age-old educational barriers in Zambia.' },
]

const timeline = [
  { year: '2022', title: 'Founded', desc: 'UNIVO was born from a vision to build a social network for Zambian students.' },
  { year: '2023', title: 'First Community', desc: 'Launched our first student community with 500 members across 5 universities in Lusaka.' },
  { year: '2024', title: 'Platform Launch', desc: 'Full social platform goes live, connecting students to scholarships, peers, and career resources.' },
  { year: '2025', title: 'National Growth', desc: 'Expanded to 20+ universities across Zambia, with 5,000 students connected and growing fast.' },
  { year: '2026', title: 'Innovation Hub', desc: 'Launching the UNIVO Student Innovation Hub for the next generation of Zambian entrepreneurs.' },
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
          className="max-w-2xl mb-20"
        >
          <span className="text-sm font-semibold text-brand-500 dark:text-brand-400 uppercase tracking-wider">About</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 text-navy-900 dark:text-white">
            We exist to unlock potential
          </h2>
          <p className="mt-5 text-lg text-navy-500 dark:text-navy-300 leading-relaxed">
            UNIVO is a social network built for Zambian students, bridging the gap between ambition and opportunity,
            giving every student the community, resources, and guidance to succeed.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="p-8 rounded-xl bg-white dark:bg-white/5 border border-navy-100 dark:border-white/10 card-hover hover:border-brand-500/30"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-5">
                <value.icon className="w-5 h-5 text-brand-500 dark:text-brand-400" />
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
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-12">Our journey</h3>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + 0.1 * i }}
                className="flex gap-6 items-start group"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-brand-500 ring-4 ring-brand-500/10 group-hover:ring-brand-500/20 transition-all" />
                  {i < timeline.length - 1 && <div className="w-px h-full bg-navy-200 dark:bg-white/10 mt-1 min-h-[2.5rem]" />}
                </div>
                <div className="pb-2">
                  <span className="text-sm font-bold text-brand-500 dark:text-brand-400">{item.year}</span>
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
