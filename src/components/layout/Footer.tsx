'use client'

import { GraduationCap, GitBranch, Link, Globe, MessageCircle } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Impact', href: '#impact' },
    { label: 'Stories', href: '#stories' },
  ],
  Resources: [
    { label: 'Campus Community', href: '#services' },
    { label: 'AI Study Center', href: '#services' },
    { label: 'Marketplace', href: '#services' },
    { label: 'Opportunities', href: '#services' },
  ],
  Company: [
    { label: 'Vision', href: '#vision' },
    { label: 'Contact', href: '#contact' },
    { label: 'GitHub', href: 'https://github.com/Botcreationam/Univo' },
  ],
}

const socials = [
  { icon: GitBranch, href: 'https://github.com/Botcreationam/Univo', label: 'GitHub' },
  { icon: Link, href: 'https://www.linkedin.com', label: 'LinkedIn' },
  { icon: Globe, href: 'https://studentlife.tech', label: 'Website' },
  { icon: MessageCircle, href: 'https://wa.me/260978277538', label: 'WhatsApp' },
]

export default function Footer() {
  const handleNav = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.open(href, '_blank', 'noopener noreferrer')
    }
  }

  return (
    <footer className="bg-navy-900 dark:bg-navy-950 border-t border-navy-700/30 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-white">UNIVO</span>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed mb-6 max-w-xs">
              Your campus, connected. The social network for Zambian students, linking campus, communities, study tools, marketplace, and opportunities.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <button
                  key={label}
                  onClick={() => handleNav(href)}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-navy-300 hover:text-brand-400 hover:border-brand-500/50 hover:bg-brand-500/10 transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="text-navy-300 text-sm hover:text-brand-400 transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-400 text-sm">
            © {new Date().getFullYear()} UNIVO. Built in Zambia. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-navy-400">
            <button className="hover:text-white transition-colors">Privacy</button>
            <span>·</span>
            <button className="hover:text-white transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
