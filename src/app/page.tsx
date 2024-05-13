import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Minjeong Kim</h1>
      <p className={styles.about}>
        A Software Engineer based in Dublin, Ireland.<br />
        Primary focus lies in frontend skillset and possess proficiency in backend skillset.<br />
        <br />
        On the frontend, accumulated experience across iOS, Android, Unity3D, React, Node.js, HTML, CSS, and Javascript.<br />
        As for the backend, expertise extends to Java, Go, Kubernetes, and AWS.<br />
        Also deeply passionate about Machine learning and AI programming.<br />
        <br />
        Dedicated to continuous learning.<br />
        Active, creative, passionate, honest and reliable.<br />
      </p>
    </div>
  );
}
