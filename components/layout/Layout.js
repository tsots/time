import React from 'react';
import Link from 'next/link';
import style from './Layout.module.scss';

function Layout() {
  return (
    <div className={style.container}>
      <nav className={style.navigation}>
        <div className={style.log}>
          <Link href='/'>
            <a>Tsots</a>
          </Link>
        </div>
        <ul className={style.links}>
          <li>
            <Link href='#'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Layout;
