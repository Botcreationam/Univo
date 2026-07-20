'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Handshake, Lightbulb, Plane } from 'lucide-react'

const roadmap = [
  {
    year: '2026',
    title: 'National Growth',
    desc: 'Connect every university in Zambia, from Lusaka to the Copperbelt, with localized content and opportunities for students nationwide.',
    icon: Globe,
    status: 'In Progress',
  },
  {
    year: '2027',
    title: 'Strategic Partnerships',
    desc: 'Partner with 100+ Zambian universities, NGOs, corporations, and government bodies to create a verified pipeline of student opportunities.',
    icon: Handshake,
    status: 'Upcoming',
  },
  {
    year: '2028',
    title: 'Student Innovation Hub',
    desc: 'Launch physical and virtual innovation spaces where Zambian students can build, collaborate, and launch startups together.',
    icon: Lightbulb,
    status: 'Planned',
  },
  {
    year: '2029',
    title: 'International Expansion',
    desc: 'Take UNIVO beyond Zambia, connecting students across Southern Africa and eventually globally with international scholarships and exchange programs.',
    icon: Plane,
    status: 'Vision',
  },
]

const statusStyles: Record<string, string> = {
  'In Progress': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  'Upcoming': 'bg-blue-600/10 text-blue-600 dark:text-blue-400',
  'Planned': 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  'Vision': 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
}

export default function VisionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="vision" className="section-py bg-white dark:bg-navy-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-20"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Vision</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 text-navy-900 dark:text-white">
            From Zambia to the world
          </h2>
          <p className="mt-5 text-lg text-navy-500 dark:text-navy-300">
            Our vision starts in Zambia. We are building the foundation here first, with plans to expand internationally in the years ahead.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roadmap.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="p-8 rounded-xl bg-navy-50 dark:bg-white/5 border border-navy-100 dark:border-white/10 card-hover hover:border-blue-600/30"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </div>
              </div>
              <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-1">{item.year}</div>
              <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-navy-500 dark:text-navy-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
