'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Handshake, Lightbulb, Plane } from 'lucide-react'

const roadmap = [
  {
    phase: 'Phase 1',
    year: '2026',
    title: 'Regional Expansion',
    desc: 'Scale UNIVO to 20 African countries with localized content and opportunities for students in every major university city.',
    icon: Globe,
    status: 'In Progress',
    color: 'from-electric-600 to-blue-500',
  },
  {
    phase: 'Phase 2',
    year: '2027',
    title: 'Strategic Partnerships',
    desc: 'Partner with 500+ universities, NGOs, corporations, and governments to create a verified pipeline of student opportunities.',
    icon: Handshake,
    status: 'Upcoming',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    phase: 'Phase 3',
    year: '2028',
    title: 'Student Innovation Hub',
    desc: 'Launch physical and virtual innovation spaces where UNIVO students can build, collaborate, and launch startups together.',
    icon: Lightbulb,
    status: 'Planned',
    color: 'from-amber-500 to-orange-500',
  },
  {
    phase: 'Phase 4',
    year: '2029',
    title: 'International Opportunities',
    desc: 'Open global doors — connecting African students with international scholarships, exchange programs, and global employers.',
    icon: Plane,
    status: 'Vision',
    color: 'from-purple-500 to-pink-500',
  },
]

export default function VisionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="vision" className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-electric-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-cyan-400 bg-cyan-500/10 rounded-full mb-4 uppercase tracking-widest">
            Our Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Where we are
            <br />
            <span className="gradient-text">heading next</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Our vision is bold: a world where every African student has equal access to global-class educational opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roadmap.map((item, i) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-8 rounded-2xl glass border border-white/5 hover:border-electric-600/30 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-white/30 text-xs font-medium">{item.phase}</div>
                  <div className="text-white/60 font-bold">{item.year}</div>
                </div>
              </div>
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${
                item.status === 'In Progress'
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : item.status === 'Upcoming'
                  ? 'bg-electric-600/20 text-electric-400'
                  : item.status === 'Planned'
                  ? 'bg-amber-500/20 text-amber-400'
                  : 'bg-purple-500/20 text-purple-400'
              }`}>
                {item.status}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
