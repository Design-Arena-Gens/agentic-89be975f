'use client'

import { useState } from 'react'
import Header from './components/Header'
import Inventory from './components/Inventory'
import styles from './page.module.css'

export default function Home() {
  const [luks, setLuks] = useState(1250)

  return (
    <main className={styles.main}>
      <Header luks={luks} />
      <Inventory />
    </main>
  )
}
