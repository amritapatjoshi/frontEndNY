import { Metadata } from 'next'
import styles from './styles.module.scss'
import React from 'react';
 
export const metadata: Metadata = {
  title: 'SCO - Components',
}
 
export default function AllComponents() {
  
  return (
    <div className={styles.wrapper}>
      <h1>Component List</h1>
      <div className={styles.atoms}>
        <h2>Atoms</h2>
        
      </div>
      <div className={styles.molecules}>
        <h2>Molecules</h2>
      </div>
    </div>
  );
}