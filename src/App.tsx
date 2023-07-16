import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Navbar } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar
        height='5rem'
        width={'screen'}
        bgColor={'#111'}
        padding={'1rem'}
        hamburger={{
          color: '#fff',
          width: '20px',
          height: '20px',
        }}
        Links={{
          links: ['home', 'about', 'contact'],
          color: '#ffff77',
          hoverColor: '#444',
          gap: '1rem',
        }}
        mobileMenu={{
          color: '#fff',
          gap: '1rem',
        }}
        Logo={{
          Url: '/vite.svg',
          Height: '1rem',
          Width: '1rem',
          Alt: 'icon',
        }}
        cta={{
          bgColor: '#fff',
          color: '#111',
          content: 'login',
          fontSize: 'md',
          link: '/login',
          borderRedius: '2rem',
          px: '1rem',
          py: '0.5rem',
        }}
      />
    </div>
  )
}

export default App
