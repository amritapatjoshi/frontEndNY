import { Metadata } from 'next'
import styles from './styles.module.scss'
 
export const metadata: Metadata = {
  title: 'Use Environment Variables',
}
 
export default function UseEnv() {
  const appurl = process.env.NEXT_PUBLIC_API_URL;
  
  return (
    <div className={styles.wrapper}>
      <h1>Value from environment variable: {appurl}</h1>
    </div>
  );
}