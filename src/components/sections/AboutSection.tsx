'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Eye, Heart, Lightbulb } from 'lucide-react'

const timeline = [
  { year: '2022', title: 'Founded', desc: 'UNIVO was born from a vision to democratize student opportunity access across Africa.' },
  { year: '2023', title: 'First Community', desc: 'Launched our first student community with 500+ members across 5 universities.' },
  { year: '2024', title: 'Platform Launch', desc: 'Full digital platform goes live, connecting students to scholarships and career resources.' },
  { year: '2025', title: 'Regional Expansion', desc: 'Expanded to 10 countries, with 5,000+ students supported and 50+ university partnerships.' },
  { year: '2026', title: 'Innovation Hub', desc: 'Launching the UNIVO Student Innovation Hub — empowering the next generation of African entrepreneurs.' },
]

const values = [
  { icon: Target, title: 'Mission', desc: 'To break barriers and connect every student to the tools, networks, and opportunities they need to thrive.', color: 'text-electric-400' },
  { icon: Eye, title: 'Vision', desc: 'A world where every student, regardless of background, has access to transformative educational opportunities.', color: 'text-cyan-500' },
  { icon: Heart, title: 'Community First', desc: 'We build with students, not just for them — every feature is shaped by real student feedback and needs.', color: 'text-emerald-400' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We challenge the status quo with creative, tech-driven solutions to age-old educational barriers.', color: 'text-orange-400' },
]

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-white dark:bg-navy-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-l from-electric-600/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-electric-600 dark:text-electric-400 bg-electric-600/10 rounded-full mb-4 uppercase tracking-widest">
            About UNIVO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-navy-950 dark:text-white">We exist to</span>
            <br />
            <span className="gradient-text">unlock potential</span>
          </h2>
          <p className="max-w-2xl mx-auto text-navy-900/60 dark:text-white/50 text-lg leading-relaxed">
            UNIVO is a student-focused digital platform bridging the gap between ambition and opportunity —
            giving every student the resources, community, and guidance to succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl bg-navy-50 dark:bg-white/[0.03] border border-navy-100 dark:border-white/5 hover:border-electric-600/30 hover:bg-electric-600/5 dark:hover:bg-electric-600/5 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl bg-current/10 flex items-center justify-center mb-4 ${value.color}`}>
                <value.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-navy-950 dark:text-white mb-2">{value.title}</h3>
              <p className="text-navy-900/60 dark:text-white/40 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy-950 dark:text-white">Our Journey</h3>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-electric-600/50 to-transparent hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + 0.1 * i }}
                  className={`flex items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <div className="p-6 rounded-2xl bg-navy-50 dark:bg-white/[0.03] border border-navy-100 dark:border-white/5 hover:border-electric-600/30 transition-all inline-block text-left md:text-inherit w-full">
                      <span className="text-electric-600 dark:text-electric-400 font-bold text-sm">{item.year}</span>
                      <h4 className="font-bold text-navy-950 dark:text-white mt-1 mb-2">{item.title}</h4>
                      <p className="text-navy-900/60 dark:text-white/40 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-electric-600 border-4 border-navy-950 shadow-lg shadow-electric-600/50 flex-shrink-0 relative z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
