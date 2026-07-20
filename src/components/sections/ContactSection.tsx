'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, Clock } from 'lucide-react'

const REDIRECT_URL = 'https://studentlife.tech'

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', interest: 'Student', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.email.trim()) e.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email'
    if (!form.message.trim()) e.message = 'Please enter a message'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    window.open(REDIRECT_URL, '_blank', 'noopener noreferrer')
  }

  return (
    <section id="contact" className="section-py bg-navy-50 dark:bg-navy-900/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 text-navy-900 dark:text-white">
            Ready to start your UNIVO journey?
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-lg text-navy-500 dark:text-navy-300">
            Whether you are a student ready to join, a university seeking partnership, or an organization wanting to list opportunities, we would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            {[
              { icon: Mail, label: 'Email', value: 'hello@univo.zm' },
              { icon: MapPin, label: 'Location', value: 'Lusaka, Zambia' },
              { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-navy-400 dark:text-navy-500 uppercase tracking-wider">{label}</div>
                  <div className="text-navy-900 dark:text-white font-medium text-sm mt-1">{value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl bg-white dark:bg-white/5 border border-navy-100 dark:border-white/10" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-navy-500 dark:text-navy-400 uppercase tracking-wider mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-navy-50 dark:bg-white/5 border border-navy-200 dark:border-white/10 text-navy-900 dark:text-white placeholder-navy-300 dark:placeholder-navy-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-all text-sm"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-navy-500 dark:text-navy-400 uppercase tracking-wider mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@university.edu.zm"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-navy-50 dark:bg-white/5 border border-navy-200 dark:border-white/10 text-navy-900 dark:text-white placeholder-navy-300 dark:placeholder-navy-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-all text-sm"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="interest" className="block text-xs font-semibold text-navy-500 dark:text-navy-400 uppercase tracking-wider mb-2">I am a</label>
                <select
                  id="interest"
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-navy-50 dark:bg-white/5 border border-navy-200 dark:border-white/10 text-navy-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-all text-sm"
                >
                  <option>Student</option>
                  <option>University Partner</option>
                  <option>Organization</option>
                  <option>Mentor</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-navy-500 dark:text-navy-400 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-navy-50 dark:bg-white/5 border border-navy-200 dark:border-white/10 text-navy-900 dark:text-white placeholder-navy-300 dark:placeholder-navy-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-all text-sm resize-none"
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Get Started
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
