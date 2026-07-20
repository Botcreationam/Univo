'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, MessageSquare } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-white dark:bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-electric-600 dark:text-electric-400 bg-electric-600/10 rounded-full mb-4 uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-navy-950 dark:text-white">Ready to start your</span>
            <br />
            <span className="gradient-text">UNIVO journey?</span>
          </h2>
          <p className="max-w-xl mx-auto text-navy-900/60 dark:text-white/50 text-lg">
            Whether you are a student ready to join, a university seeking partnership, or an organisation wanting to list opportunities — we would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-4">Start a conversation</h3>
              <p className="text-navy-900/60 dark:text-white/40 text-sm leading-relaxed">
                Our team is always available to answer your questions and help you make the most of UNIVO.
              </p>
            </div>
            {[
              { icon: Mail, label: 'Email', value: 'hello@univo.africa' },
              { icon: MapPin, label: 'Location', value: 'Lusaka, Zambia · Pan-African' },
              { icon: MessageSquare, label: 'Response Time', value: 'Within 24 hours' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-electric-600/10 border border-electric-600/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-electric-500 dark:text-electric-400" />
                </div>
                <div>
                  <div className="text-xs text-navy-900/40 dark:text-white/30 font-medium uppercase tracking-wider">{label}</div>
                  <div className="text-navy-950 dark:text-white font-medium text-sm">{value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl bg-navy-50 dark:bg-white/[0.02] border border-navy-100 dark:border-white/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-3">Message Sent!</h3>
                <p className="text-navy-900/60 dark:text-white/40">We will be in touch within 24 hours. Welcome to the UNIVO community!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl bg-navy-50 dark:bg-white/[0.02] border border-navy-100 dark:border-white/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-navy-900/60 dark:text-white/40 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-navy-200 dark:border-white/10 text-navy-950 dark:text-white placeholder-navy-900/30 dark:placeholder-white/20 focus:outline-none focus:border-electric-600 focus:ring-1 focus:ring-electric-600/30 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy-900/60 dark:text-white/40 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@university.edu"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-navy-200 dark:border-white/10 text-navy-950 dark:text-white placeholder-navy-900/30 dark:placeholder-white/20 focus:outline-none focus:border-electric-600 focus:ring-1 focus:ring-electric-600/30 transition-all text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-900/60 dark:text-white/40 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-navy-200 dark:border-white/10 text-navy-950 dark:text-white placeholder-navy-900/30 dark:placeholder-white/20 focus:outline-none focus:border-electric-600 focus:ring-1 focus:ring-electric-600/30 transition-all text-sm resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-electric-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-electric-600/25 hover:shadow-electric-600/40 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
