import { Link } from 'react-router-dom';

export default function Header({ cartCount, likedCount, scrolled }) {
  return (
    <header>
      <div className="top-bar">
        <div className="top-bar-left">
          <button className="top-bar-btn" type="button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <span>Пошук</span>
          </button>
        </div>
        <div className="top-bar-center">
          <div className="top-bar-tagline">GET LOST IN THIS WORLD</div>
        </div>
        <div className="top-bar-right">
          {/* Пусто */}
        </div>
      </div>

      <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-left">
          <Link to="/shop" className="nav-link">Shop</Link>
          <a href="#care" className="nav-link">Customer Care</a>
          <a href="#stores" className="nav-link">Stores</a>
        </div>
        <div className="nav-logo">
          <Link to="/" className="logo-text">LOST</Link>
        </div>
        <div className="nav-right">
          <button className="icon-btn" type="button" title="Вподобання">
            <svg width="20" height="20" viewBox="0 0 24 24" fill={likedCount > 0 ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {likedCount > 0 && <span className="badge">{likedCount}</span>}
          </button>
          <Link to="/cart" className="icon-btn" title="Кошик">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
        </div>
      </nav>
    </header>
  );
}
