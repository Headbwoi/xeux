type LogoProps = {
  Url: string
  Alt?: string
  Height: 'auto' | 'full' | '1rem' | '2rem' | '3rem' | '4rem'
  Width: 'auto' | '1rem' | '2rem' | '3rem' | '4rem' | '5rem' | '7rem' | '10rem'
}

export type NavProps = {
  height: 'auto' | '1rem' | '2rem' | '3rem' | '4rem' | '5rem' | '7rem' | '10rem'
  width: 'auto' | 'screen' | 'full' | '5rem' | '10rem' | '20rem' | '30rem'
  bgColor: string
  padding: '0.5rem' | '1rem' | '2rem' | '3rem' | '4rem' | '5rem'
  Logo?: LogoProps
  TextLogo?: {
    fontWeight: 'bold' | 'semibold' | 'medium' | 'light'
    content: string
    color: string
    fontSize: 'xs' | 'sm' | 'md' | 'base' | 'lg' | 'xl' | '2xl' | '3xl'
  }
  hamburger: {
    color: string
    width?: '10px' | '15px' | '20px' | '30px'
    height?: '10px' | '15px' | '20px' | '30px'
  }
  Links: {
    links: string[]
    color: string
    hoverColor?: string
    gap?: '0.5rem' | '1rem' | '2rem' | '3rem'
  }
  cta?: {
    bgColor: string
    color: string
    content: string
    link: string
    py?: '0.5rem' | '1rem' | '2rem' | '3rem' | '4rem' | '5rem'
    px?: '0.5rem' | '1rem' | '2rem' | '3rem' | '4rem' | '5rem'
    borderRedius?: '0.5rem' | '1rem' | '2rem' | '3rem' | '4rem' | 'full' | '99999'
    fontSize: 'xs' | 'sm' | 'md' | 'base' | 'lg' | 'xl'
    width?: '10px' | '15px' | '20px' | '30px'
    height?: '10px' | '15px' | '20px' | '30px'
  }
  mobileMenu: {
    color: string
    gap?: '0.5rem' | '1rem' | '2rem' | '3rem'
  }
}
