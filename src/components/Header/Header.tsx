'use client'

import styles from "./Header.module.scss"
import Image from 'next/image'
import Menu from "./Menu"
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logos}>
          <Image
            className={styles.logos_profile}
            src={`/imgs/me.jpeg`}
            width="60"
            height="60"
            alt="me" />
          <p className={styles.logos_name}>Minjeong Kim</p>
        </div>
        <div className={styles.menus}>
          <Menu link="/" title="About Me" isSelected={pathname === '/'} />
          <Menu link="/portfolios" title="Careers & Portfolios" isSelected={pathname.includes('/portfolios')} />
        </div>
      </div>
    </header>
  );
}