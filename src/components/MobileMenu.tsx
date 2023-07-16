import React from 'react'
import '../index.css'

function MobileMenu({
  setShowMobileMenu,
  MenuProps,
  links,
}: {
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
  links: string[]
  MenuProps: {
    color: string
    gap?: '1rem' | '2rem' | '3rem' | '0.5rem'
  }
}) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'hsla(0, 0%, 0%, 0.9)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {/* hamburger */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
          }}
          onClick={() => {
            setShowMobileMenu(false)
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384 512'
            style={{
              width: '16px',
              fill: 'white',
              cursor: 'pointer',
            }}
          >
            <path d='M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z' />
          </svg>
        </div>

        {/* links */}

        <div
          className='links'
          style={{
            color: MenuProps.color,
            gap: MenuProps.gap,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          {links.map((link, index) => (
            <div key={link + index}>
              <a
                href={`/${link}`}
                className={`link`}
                style={{
                  color: MenuProps.color,
                  cursor: 'pointer',
                  fontWeight: 'medium',
                  letterSpacing: '12px',
                  textTransform: 'uppercase',
                }}
              >
                {link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
