import { useEffect, useState } from 'react'

function Footer() {
  const [online, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    const goOnline = () => setOnline(true)
    const goOffline = () => setOnline(false)
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  return (
    <footer className="footer">
      <span>Bore &amp; Barrel &middot; PPB Kelompok 38</span>
      <span className={online ? 'status on' : 'status off'}>
        {online ? 'Online' : 'Offline'}
      </span>
    </footer>
  )
}

export default Footer
