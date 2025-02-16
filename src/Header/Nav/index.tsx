'use client'

import React, { useEffect, useState } from 'react'
import { CMSLink } from '@/components/Link'
import type { Header as HeaderType } from '@/payload-types'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = data?.navItems || []

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev)
  }

  useEffect(() => {
    const header = document.querySelector('header')
    if (header) {
      if (isMenuOpen) {
        header.classList.add('open')
      } else {
        header.classList.remove('open')
      }
    }
  }, [isMenuOpen])

  return (
    <nav className="relative flex items-center">
      <button
        className="lg:hidden p-2"
        onClick={handleMenuToggle}
        aria-label="Toggle Navigation"
      >
        {isMenuOpen ? (
          <>
            <span className="block w-6 h-0.5 bg-neutral-100 mb-1 transform rotate-45 absolute"></span>
            <span className="block w-6 h-0.5 bg-neutral-100 mb-1 transform -rotate-45 absolute"></span>
          </>
        ) : (
          <>
            <span className="block w-6 h-0.5 bg-neutral-100 mb-1"></span>
            <span className="block w-6 h-0.5 bg-neutral-100 mb-1"></span>
            <span className="block w-6 h-0.5 bg-neutral-100 mb-1"></span>
          </>
        )}
      </button>

      <div className="hidden lg:flex desktop-navigation">
        {navItems.map(({ link }, i) => (
          <CMSLink key={i} {...link} appearance="link" />
        ))}
      </div>
      
      {isMenuOpen && (
        <div className="mobile-navigation">
            {navItems.map(({ link }, i) => (
              <CMSLink key={i} {...link} appearance="link" />
            ))}
        </div>
      )}
    </nav>
  )
}
