import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo">
          {/* SVG محلي عشان منعتمدش على أي CDN */}
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 8a2 2 0 0 1 2-2h2.5l1.5-2h6l1.5 2H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <circle cx="12" cy="12.5" r="3.5" />
          </svg>
          <span>عدسة</span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end>الرئيسية</NavLink>
          <NavLink to="/blog">المدونة</NavLink>
        </nav>
      </div>
    </header>
  )
}
