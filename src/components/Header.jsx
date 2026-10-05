const TABS = ['Catalog', 'About', 'Contact']

function Header({ tab, onTab }) {
  return (
    <header className="header">
      <span className="brand">Bore &amp; Barrel</span>
      <nav className="nav" aria-label="Main">
        {TABS.map((t) => (
          <button
            key={t}
            className={t === tab ? 'nav-link active' : 'nav-link'}
            onClick={() => onTab(t)}
          >
            {t}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
