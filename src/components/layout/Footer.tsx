'use client'

import { motion } from 'framer-motion'
import { GraduationCap, GitBranch, Link, Globe, Mail } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'About UNIVO', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Impact', href: '#impact' },
    { label: 'Community', href: '#testimonials' },
  ],
  Resources: [
    { label: 'Scholarships', href: '#services' },
    { label: 'Career Guidance', href: '#services' },
    { label: 'Innovation Programs', href: '#services' },
    { label: 'Digital Resources', href: '#services' },
  ],
  Company: [
    { label: 'Vision', href: '#vision' },
    { label: 'Partners', href: '#vision' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Join Community', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 dark:bg-navy-950 border-t border-electric-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-600 to-cyan-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="gradient-text">UNI</span>
                <span className="text-white">VO</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering students beyond the classroom. Connecting talent with opportunity across Africa and beyond.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: GitBranch, href: 'https://github.com/Botcreationam/Univo', label: 'GitHub' },
                { icon: Link, href: '#', label: 'LinkedIn' },
                { icon: Globe, href: '#', label: 'Website' },
                { icon: Mail, href: '#contact', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-electric-400 hover:border-electric-600/50 hover:bg-electric-600/10 transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-electric-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} UNIVO. All rights reserved. Built with ❤️ for students.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
