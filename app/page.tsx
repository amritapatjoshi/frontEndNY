import { Metadata } from 'next'
import Image from 'next/image'
import styles from './page.module.scss'
 
export const metadata: Metadata = {
  title: 'Home',
}
 
export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Home Page <br />
          Make changes to <code className={styles.code}>app/page.tsx</code>
        </p>
      </div> 
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/images/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>      
    </main>
  </>
  );
}