'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    badge: 'For Students',
    title: 'Your personal academic command center',
    desc: 'Everything you need to manage your academic journey, from finding the right scholarships to connecting with mentors who have been exactly where you are.',
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
    title: 'Bridge the gap between campus and career',
    desc: 'Our career development programs connect you with real opportunities, from internships at top companies to full-time roles that match your ambitions.',
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
    title: 'Grow through genuine connections',
    desc: 'The most powerful networks are not built overnight. We make it easy to find your tribe of ambitious students, supportive alumni, and industry leaders.',
    points: [
      'Peer study groups by subject and university',
      'Alumni network with 2,000+ professionals',
      'Industry events and virtual networking sessions',
      'Student-led communities and chapters',
    ],
    reverse: false,
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="section-py bg-white dark:bg-navy-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 text-navy-900 dark:text-white">
            Built for how students actually succeed
          </h2>
        </div>

        <div className="space-y-20">
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
        'grid grid-cols-1 lg:grid-cols-2 gap-10 items-center',
        feature.reverse ? 'lg:grid-flow-col-dense' : ''
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: feature.reverse ? 20 : -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={feature.reverse ? 'lg:col-start-2' : ''}
      >
        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-600/10 rounded-full mb-4">
          {feature.badge}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-white mb-4 tracking-tight">
          {feature.title}
        </h3>
        <p className="text-navy-500 dark:text-navy-300 leading-relaxed mb-6">{feature.desc}</p>
        <ul className="space-y-3 mb-6">
          {feature.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-navy-600 dark:text-navy-300">{point}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
        >
          Learn more
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, x: feature.reverse ? -20 : 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={feature.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}
      >
        <div className="aspect-[4/3] rounded-2xl bg-navy-50 dark:bg-white/5 border border-navy-100 dark:border-white/10 p-6 flex items-center justify-center">
          <FeatureVisual index={index} />
        </div>
      </motion.div>
    </motion.div>
  )
}

function FeatureVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="w-full space-y-3">
        {['Scholarship Match: 94%', 'Applications: 3 Active', 'Mentor Sessions: 2 this week', 'Resources Saved: 12'].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-white/5 border border-navy-100 dark:border-white/10">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-navy-600 dark:text-navy-300 text-sm">{item}</span>
          </div>
        ))}
      </div>
    )
  }
  if (index === 1) {
    return (
      <div className="w-full grid grid-cols-3 gap-2 h-full">
        {['Top Match', 'Internship', 'Full-time', 'Remote', 'On-site', 'Graduate'].map((tag, i) => (
          <div
            key={i}
            className={cn(
              'rounded-lg flex items-center justify-center text-xs font-medium border',
              i === 0
                ? 'bg-blue-600/10 border-blue-600/30 text-blue-600 dark:text-blue-400'
                : 'bg-white dark:bg-white/5 border-navy-100 dark:border-white/10 text-navy-500 dark:text-navy-400'
            )}
          >
            {tag}
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="w-full flex items-center justify-center h-full">
      <div className="relative">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute w-10 h-10 rounded-full bg-blue-600 border-2 border-navy-50 dark:border-navy-950 flex items-center justify-center text-white text-xs font-bold"
            style={{
              left: `${Math.cos((i * 60 * Math.PI) / 180) * 50}px`,
              top: `${Math.sin((i * 60 * Math.PI) / 180) * 50}px`,
            }}
          >
            {String.fromCharCode(65 + i)}
          </div>
        ))}
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/30">
          U
        </div>
      </div>
    </div>
  )
}
