import styles from "./footer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
        <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
        <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
      </div>
      <p className={styles.copyright}>© 2024 Minjeong Kim</p>
    </footer>
  );
}