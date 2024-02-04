'use client'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Layout from './layout.module.css'
import './globals.css'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear("user");
    window.location.reload();
  };

  const renderNavigation = () => (
    <nav className={Layout.hnav}>
      <ul className={Layout.ul}>
        <li className={Layout.li}><Link href='/' className={Layout.link}>Home</Link></li>
        <li className={Layout.li}><Link href='/service' className={Layout.link}>Services</Link></li>
        <li className={Layout.li}><Link href='/terms' className={Layout.link}>Terms&conditions</Link></li>
        {!user && <li className={Layout.li}><Link href='/registeruser' className={Layout.link}>Register</Link></li>}
        {!user ? (
          <>
            <li className={Layout.li}><Link href='/login' className={Layout.link}>Login</Link></li>
          </>
        ) : (
          <>
            <li className={Layout.li}><Link href='/mybooking' className={Layout.link}>My Bookings</Link></li>
            <li className={Layout.li}><Link onClick={handleLogout} href='' id={Layout.logout} className={Layout.link}>Logout</Link></li>
          </>
        )}
        <div className={Layout.burger}>
          <div className={Layout.line}></div>
          <div className={Layout.line}></div>
          <div className={Layout.line}></div>
        </div>
      </ul>
    </nav>
  );

  return (
    <div>
      {pathName !== '/admin' && pathName !== '/adminregister'  && renderNavigation()}
      {children}
    </div>
  )
}
