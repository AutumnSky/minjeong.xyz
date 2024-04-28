import styles from "./Footer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/autumnsky">
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
        </a>
        <a href="https://youtube.com/@five-am">
          <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
        </a>
        <a href="mailto: minjeong.connect@proton.me">
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
        </a>
      </div>
      <p className={styles.copyright}>© 2024 Minjeong Kim</p>
    </footer>
  );
}