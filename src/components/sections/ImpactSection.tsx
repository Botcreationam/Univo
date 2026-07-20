'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Building2, Share2, HeartHandshake } from 'lucide-react'

const stats = [
  { icon: TrendingUp, value: 5000, suffix: '+', label: 'Students Supported', desc: 'Active students benefiting from UNIVO programs and resources', color: 'text-electric-400', bgColor: 'bg-electric-600/10' },
  { icon: Building2, value: 50, suffix: '+', label: 'Universities Connected', desc: 'Partner institutions across Africa and beyond', color: 'text-cyan-400', bgColor: 'bg-cyan-500/10' },
  { icon: Share2, value: 200, suffix: '+', label: 'Opportunities Shared', desc: 'Scholarships, internships and programs listed monthly', color: 'text-emerald-400', bgColor: 'bg-emerald-500/10' },
  { icon: HeartHandshake, value: 10000, suffix: '+', label: 'Community Members', desc: 'Growing network of ambitious students and mentors', color: 'text-purple-400', bgColor: 'bg-purple-500/10' },
]

function CountUp({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
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
    <section id="impact" className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-electric-600/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full border border-cyan-500/10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-600/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-cyan-400 bg-cyan-500/10 rounded-full mb-4 uppercase tracking-widest">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Numbers that tell
            <br />
            <span className="gradient-text">our story</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Every statistic represents a student whose life we've touched, an opportunity unlocked.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-8 rounded-2xl glass border border-white/5 hover:border-electric-600/30 transition-all text-center"
            >
              <div className={`w-14 h-14 rounded-2xl ${stat.bgColor} flex items-center justify-center mx-auto mb-5`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-white font-semibold mb-2">{stat.label}</div>
              <div className="text-white/40 text-sm leading-relaxed">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
