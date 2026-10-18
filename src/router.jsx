import { useEffect, useState } from 'react'

// Tiny hash router: works on any static host, no server config and no extra dependency.
// Routes: #/  #/books  #/books/<slug>  #/groups  #/contact

function currentPath() {
  const hash = window.location.hash.replace(/^#/, '')
  return hash.startsWith('/') ? hash : '/'
}

export function useRoute() {
  const [path, setPath] = useState(currentPath)

  useEffect(() => {
    const onChange = () => {
      setPath(currentPath())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return path
}

export function Link({ to, children, ...rest }) {
  return (
    <a href={`#${to}`} {...rest}>
      {children}
    </a>
  )
}
