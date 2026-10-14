import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaCode, FaCertificate, FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (to) => {
    if (to === '/') {
      return location.pathname === '/' || location.pathname === '';
    }
    return location.pathname.toLowerCase() === to.toLowerCase();
  };

  const navLinks = [
    { to: '/',             icon: <FaHome size={18} />,        label: 'Home'         },
    { to: '/About',        icon: <FaInfoCircle size={18} />,   label: 'About'        },
    { to: '/Projects',     icon: <FaCode size={18} />,         label: 'Projects'     },
    { to: '/Certificates', icon: <FaCertificate size={18} />,  label: 'Certificates' },
  ];

  return (
    <>
      <nav className="navbar">
        {/*
          ★ IMPORTANT: hamburger comes FIRST in DOM order.
          On mobile the desktop ul is display:none, so the hamburger
          is the ONLY flex child. With justify-content:flex-start it
          lands at the far left, no absolute / fixed tricks needed.
        */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Desktop: centred links (hidden on mobile) */}
        <ul className="nav-desktop">
          {navLinks.map(({ to, icon, label }) => (
            <li key={to}>
              <Link to={to} className={isActive(to) ? 'active' : ''}>
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Side Drawer (mobile only) ─────────────────────── */}
      <div
        className={`nav-backdrop ${menuOpen ? 'nav-backdrop--open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside className={`nav-drawer ${menuOpen ? 'nav-drawer--open' : ''}`}>
        <div className="nav-drawer-header">
          <span className="nav-drawer-brand">Menu</span>
          <button className="nav-drawer-close" onClick={closeMenu} aria-label="Close menu">
            <FaTimes size={20} />
          </button>
        </div>

        <ul className="nav-drawer-list">
          {navLinks.map(({ to, icon, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={closeMenu}
                className={isActive(to) ? 'active' : ''}
              >
                <span className="nav-drawer-icon">{icon}</span>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
