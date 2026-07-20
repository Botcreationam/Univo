'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    badge: 'For Students',
    title: 'Your Personal Academic Command Center',
    desc: 'Everything you need to manage your academic journey — from finding the right scholarships to connecting with mentors who have been exactly where you are.',
    points: [
      'Smart scholarship matching based on your profile',
      'One-click application tracking dashboard',
      'Direct mentorship connections with alumni',
      'Personalized resource recommendations',
    ],
    reverse: false,
  },
  {
    badge: 'Career Ready',
    title: 'Bridge the Gap Between Campus and Career',
    desc: 'Our career development programs connect you with real opportunities — from internships at top companies to full-time roles that match your ambitions.',
    points: [
      'AI-powered resume optimization',
      'Mock interviews with industry professionals',
      '500+ employer partnerships across Africa',
      'Real-time job and internship alerts',
    ],
    reverse: true,
  },
  {
    badge: 'Community',
    title: 'Grow Through Genuine Connections',
    desc: 'The most powerful networks are not built overnight — we make it easy to find your tribe of ambitious students, supportive alumni, and industry leaders.',
    points: [
      'Peer study groups by subject and university',
      'Alumni network with 2,000+ professionals',
      'Industry events and virtual networking sessions',
      'Student-led communities and chapters',
    ],
    reverse: false,
  },
]

function FeatureVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950 border border-white/10 p-4">
        <div className="space-y-3">
          {['Scholarship Match: 94%', 'Applications: 3 Active', 'Mentor Sessions: 2 this week', 'Resources Saved: 12'].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="w-2 h-2 rounded-full bg-electric-400" />
              <span className="text-white/70 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-electric-600/10 to-transparent pointer-events-none" />
      </div>
    )
  }
  if (index === 1) {
    return (
      <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950 border border-white/10 p-4">
        <div className="grid grid-cols-3 gap-2 h-full">
          {['Top Match', 'Internship', 'Full-time', 'Remote', 'On-site', 'Graduate'].map((tag, i) => (
            <div
              key={i}
              className={cn(
                'rounded-xl flex items-center justify-center text-xs font-medium border',
                i === 0 ? 'bg-electric-600/20 border-electric-600/40 text-electric-300' : 'bg-white/5 border-white/5 text-white/40'
              )}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none" />
      </div>
    )
  }
  return (
    <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950 border border-white/10 flex items-center justify-center">
      <div className="relative">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-electric-600 to-cyan-500 border-2 border-navy-950 flex items-center justify-center text-white text-xs font-bold"
            style={{
              left: `${Math.cos((i * 60 * Math.PI) / 180) * 60}px`,
              top: `${Math.sin((i * 60 * Math.PI) / 180) * 60}px`,
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          >
            {String.fromCharCode(65 + i)}
          </motion.div>
        ))}
        <div className="w-14 h-14 rounded-full bg-electric-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-electric-600/50">
          U
        </div>
      </div>
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-white dark:bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-electric-600 dark:text-electric-400 bg-electric-600/10 rounded-full mb-4 uppercase tracking-widest">
            Platform Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-navy-950 dark:text-white">Built for how students</span>
            <br />
            <span className="gradient-text">actually succeed</span>
          </h2>
        </div>

        <div className="space-y-24">
          {features.map((feature, i) => (
            <FeatureBlock key={feature.badge} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureBlock({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={cn(
        'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
        feature.reverse ? 'lg:grid-flow-col-dense' : ''
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: feature.reverse ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={feature.reverse ? 'lg:col-start-2' : ''}
      >
        <span className="inline-block px-3 py-1 text-xs font-semibold text-electric-600 dark:text-electric-400 bg-electric-600/10 rounded-full mb-4">
          {feature.badge}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-navy-950 dark:text-white mb-6 leading-tight">
          {feature.title}
        </h3>
        <p className="text-navy-900/60 dark:text-white/50 text-lg leading-relaxed mb-8">{feature.desc}</p>
        <ul className="space-y-3 mb-8">
          {feature.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-electric-500 flex-shrink-0 mt-0.5" />
              <span className="text-navy-900/70 dark:text-white/60 text-sm">{point}</span>
            </li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-2 text-electric-600 dark:text-electric-400 font-semibold hover:gap-3 transition-all"
        >
          Learn more <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: feature.reverse ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={feature.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}
      >
        <FeatureVisual index={index} />
      </motion.div>
    </motion.div>
  )
}
