import styles from './Header.module.css'

interface HeaderProps {
  luks: number
}

export default function Header({ luks }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Bóveda de monedas */}
        <div className={styles.vault}>
          <div className={styles.vaultContent}>
            <div className={styles.vaultBalance}>
              <span className={styles.vaultLabel}>Luks</span>
              <span className={styles.vaultAmount}>{luks.toLocaleString()}</span>
            </div>
            <div className={styles.coinIcon}>
              <svg viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" fill="url(#gold)" stroke="#FFD700" strokeWidth="2"/>
                <text x="20" y="25" fontSize="16" fontWeight="bold" fill="#8B4513" textAnchor="middle">L</text>
                <defs>
                  <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700"/>
                    <stop offset="50%" stopColor="#FFA500"/>
                    <stop offset="100%" stopColor="#FFD700"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Acceso a la Tienda */}
        <div className={styles.storeAccess}>
          <div className={styles.storeContent}>
            <div className={styles.croodeyIcon}>
              <svg viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="23" fill="url(#croody)" stroke="#fff" strokeWidth="2"/>
                <path d="M 18 20 Q 25 15, 32 20" stroke="#fff" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="22" r="2" fill="#fff"/>
                <circle cx="30" cy="22" r="2" fill="#fff"/>
                <path d="M 18 30 Q 25 35, 32 30" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <defs>
                  <linearGradient id="croody" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#667eea"/>
                    <stop offset="100%" stopColor="#764ba2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles.storeText}>
              <span className={styles.storeTitle}>Tienda</span>
              <span className={styles.storeSlogan}>¡Consigue más ítems!</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
