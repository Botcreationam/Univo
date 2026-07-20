'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Building2, Share2, HeartHandshake } from 'lucide-react'

const stats = [
  { icon: TrendingUp, value: 5000, suffix: '+', label: 'Students connected', desc: 'Active students on the UNIVO social network across Zambia' },
  { icon: Building2, value: 20, suffix: '+', label: 'Zambian universities', desc: 'Partner institutions from Lusaka to the Copperbelt' },
  { icon: Share2, value: 200, suffix: '+', label: 'Opportunities shared', desc: 'Scholarships, internships and programs listed monthly' },
  { icon: HeartHandshake, value: 10000, suffix: '+', label: 'Community members', desc: 'Growing network of ambitious Zambian students and mentors' },
]

function CountUp({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span>{count.toLocaleString()}{suffix}</span>
}

export default function ImpactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="impact" className="section-py bg-navy-50 dark:bg-navy-900/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-brand-500 dark:text-brand-400 uppercase tracking-wider">Impact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 text-navy-900 dark:text-white">
            Numbers that tell our story
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-lg text-navy-500 dark:text-navy-300">
            Every statistic represents a Zambian student whose life we have touched, an opportunity unlocked.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="p-8 rounded-xl bg-white dark:bg-white/5 border border-navy-100 dark:border-white/10 text-center card-hover hover:border-brand-500/30"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mx-auto mb-5">
                <stat.icon className="w-5 h-5 text-brand-500 dark:text-brand-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-sm font-semibold text-navy-700 dark:text-navy-200 mb-2">{stat.label}</div>
              <div className="text-xs text-navy-400 dark:text-navy-500 leading-relaxed">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
