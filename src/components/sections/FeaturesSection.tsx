'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const REDIRECT_URL = 'https://studentlife.tech'

const features = [
  {
    badge: 'For Students',
    title: 'Your campus in your pocket',
    desc: 'Connect with fellow students across Zambian universities, join communities, share resources, and build friendships that last beyond graduation.',
    points: [
      'Connect with students from UNZA, CBU, ZCAS, and more',
      'Join communities and study groups by subject',
      'Share notes, resources, and experiences',
      'Build your network before you graduate',
    ],
    reverse: false,
  },
  {
    badge: 'Study Smarter',
    title: 'AI Study Center and study tools',
    desc: 'Access AI-powered study assistance, shared notes, past papers, and collaborative learning tools designed to help you excel academically.',
    points: [
      'AI-powered study assistant and recommendations',
      'Shared notes and past papers library',
      'Collaborative study sessions with peers',
      'Personalized learning paths',
    ],
    reverse: true,
  },
  {
    badge: 'Marketplace',
    title: 'A trusted student marketplace',
    desc: 'Buy and sell textbooks, supplies, and services within a verified student-only community. Safe, local, and built for Zambian campuses.',
    points: [
      'Buy and sell textbooks and supplies',
      'Verified student-only community',
      'Safe local transactions',
      'Services and housing listings',
    ],
    reverse: false,
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="section-py bg-white dark:bg-navy-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <span className="text-sm font-semibold text-brand-500 dark:text-brand-400 uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 text-navy-900 dark:text-white">
            Built for how Zambian students succeed
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
        initial={{ opacity: 0, x: feature.reverse ? 20 : -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={feature.reverse ? 'lg:col-start-2' : ''}
      >
        <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-500 dark:text-brand-400 bg-brand-500/10 rounded-full mb-5">
          {feature.badge}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-white mb-5 tracking-tight">
          {feature.title}
        </h3>
        <p className="text-navy-500 dark:text-navy-300 leading-relaxed mb-8">{feature.desc}</p>
        <ul className="space-y-3 mb-8">
          {feature.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-500 dark:text-brand-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-navy-600 dark:text-navy-300">{point}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => window.open(REDIRECT_URL, '_blank', 'noopener noreferrer')}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-500 dark:text-brand-400 hover:gap-3 transition-all"
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
        <div className="aspect-[4/3] rounded-2xl bg-navy-50 dark:bg-white/5 border border-navy-100 dark:border-white/10 p-8 flex items-center justify-center">
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
        {['UNZA Computer Science', 'CBU Engineering Group', 'ZCAS Study Circle', 'Mulungushi Resources'].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-white/5 border border-navy-100 dark:border-white/10">
            <div className="w-2 h-2 rounded-full bg-brand-500" />
            <span className="text-navy-600 dark:text-navy-300 text-sm">{item}</span>
          </div>
        ))}
      </div>
    )
  }
  if (index === 1) {
    return (
      <div className="w-full grid grid-cols-3 gap-3 h-full">
        {['AI Assistant', 'Past Papers', 'Study Groups', 'Notes', 'Flashcards', 'Quizzes'].map((tag, i) => (
          <div
            key={i}
            className={cn(
              'rounded-lg flex items-center justify-center text-xs font-medium border',
              i === 0
                ? 'bg-brand-500/10 border-brand-500/30 text-brand-500 dark:text-brand-400'
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
    <div className="w-full space-y-3">
      {[
        { title: 'Calculus Textbook', price: 'K150', tag: 'For Sale' },
        { title: 'Scientific Calculator', price: 'K80', tag: 'For Sale' },
        { title: 'Room near UNZA', price: 'K1,200/mo', tag: 'Housing' },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-white/5 border border-navy-100 dark:border-white/10">
          <span className="text-navy-600 dark:text-navy-300 text-sm">{item.title}</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-navy-700 dark:text-navy-200">{item.price}</span>
            <span className="text-xs text-brand-500 dark:text-brand-400">{item.tag}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
