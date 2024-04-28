import styles from "./Header.module.scss"
import Image from 'next/image'
import Menu from "./Menu"

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
        <Menu link="/" title="About Me" />
        <Menu link="/portfolios" title="Careers & Portfolios" />
      </div>
    </header>
  );
}