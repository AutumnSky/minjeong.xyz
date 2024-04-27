import styles from "./header.module.scss"
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
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
        <Link className={styles.menu}
          href="/">About Me</Link>
        <Link className={styles.menu}
          href="/portfolios">Careers & Portfolios</Link>
      </div>
    </header>
  );
}