import React, { useState } from 'react'
import { NavProps } from '../../types'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { evalFontSize } from '../../helpers/font'
import MobileMenu from '../MobileMenu'
import './Navbar.css'

function Navbar({ height, width, bgColor, padding, Logo, TextLogo, hamburger, Links, cta, mobileMenu }: NavProps) {
  const matches = useMediaQuery('(min-width: 768px)')
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const header = {
    backgroundColor: bgColor,
    height: height,
    width: width == 'screen' ? '100vw' : width,
    padding,
  }

  const LogoStyle = {
    logoText: {
      fontSize: evalFontSize(TextLogo?.fontSize as string),
      fontWeight: TextLogo?.fontWeight,
      color: TextLogo?.color,
      content: TextLogo?.content,
    },
    gap: '20px',
  }

  const hamburgerStyle = {
    wrapper: '',
    svg: {
      height: hamburger.height ? hamburger.height : '20px',
      width: hamburger.width ? hamburger.width : '20px',
      fill: hamburger.color,
      cursor: 'pointer',
    },
  }
  return (
    <header style={header} className='fixed top-0 left-0'>
      <nav className='nav container mx-auto'>
        {/* logo section */}

        <div className={'flex'}>
          <img src={Logo?.Url} alt={Logo?.Alt} className='logo' />
          <div aria-label='logo' style={LogoStyle.logoText}>
            {TextLogo?.content}
          </div>
        </div>

        {/* links section */}

        {matches && (
          <div
            className='flex'
            style={{
              color: Links.color,
              gap: Links.gap,
            }}
          >
            {Links.links.map((link, index) => (
              <div key={link + index}>
                <a
                  href={`/${link}`}
                  className={`links-desktop`}
                  style={{
                    color: Links.color,
                  }}
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        )}

        {/* btn */}

        {cta && matches && (
          <div className='flex'>
            <button
              className={`cta`}
              style={{
                backgroundColor: cta.bgColor,
                color: cta.bgColor,
                height: cta.height,
                width: cta.width,
                borderRadius: cta.borderRedius ? cta.borderRedius : 'full',
              }}
            >
              <a
                href={`/${cta.link}`}
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  color: cta.color,
                  paddingBlock: cta.py ? cta.py : '1rem',
                  paddingInline: cta.px ? cta.px : '1rem',
                  fontSize: evalFontSize(cta.fontSize),
                  fontWeight: '500',
                }}
              >
                {cta?.content}
              </a>
            </button>
          </div>
        )}

        {/* hamburger menu */}
        {!matches && (
          <>
            <div style={{}} onClick={() => setShowMobileMenu(true)}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' style={hamburgerStyle.svg}>
                <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
              </svg>
            </div>
          </>
        )}

        {!matches && showMobileMenu && (
          <MobileMenu setShowMobileMenu={setShowMobileMenu} MenuProps={mobileMenu} links={Links.links} />
        )}
      </nav>
    </header>
  )
}

export default Navbar
