'use client'

import { useState } from 'react'
import styles from './Inventory.module.css'

type ItemRarity = 'common' | 'rare' | 'epic' | 'legendary'
type ItemType = 'box' | 'envelope' | 'chest'
type SortType = 'recent' | 'rarity'

interface Item {
  id: string
  name: string
  type: ItemType
  rarity: ItemRarity
  count: number
  image: string
  date: Date
}

const mockItems: Item[] = [
  { id: '1', name: 'Cofre Legendario', type: 'chest', rarity: 'legendary', count: 2, image: '🎁', date: new Date('2024-01-15') },
  { id: '2', name: 'Caja Épica', type: 'box', rarity: 'epic', count: 5, image: '📦', date: new Date('2024-01-20') },
  { id: '3', name: 'Sobre Raro', type: 'envelope', rarity: 'rare', count: 12, image: '✉️', date: new Date('2024-01-22') },
  { id: '4', name: 'Caja Común', type: 'box', rarity: 'common', count: 25, image: '📦', date: new Date('2024-01-23') },
  { id: '5', name: 'Cofre Épico', type: 'chest', rarity: 'epic', count: 3, image: '🎁', date: new Date('2024-01-24') },
  { id: '6', name: 'Sobre Legendario', type: 'envelope', rarity: 'legendary', count: 1, image: '✉️', date: new Date('2024-01-25') },
  { id: '7', name: 'Caja Rara', type: 'box', rarity: 'rare', count: 8, image: '📦', date: new Date('2024-01-26') },
  { id: '8', name: 'Cofre Común', type: 'chest', rarity: 'common', count: 15, image: '🎁', date: new Date('2024-01-27') },
]

export default function Inventory() {
  const [items, setItems] = useState<Item[]>(mockItems)
  const [filterType, setFilterType] = useState<ItemType | 'all'>('all')
  const [filterRarity, setFilterRarity] = useState<ItemRarity | 'all'>('all')
  const [sortBy, setSortBy] = useState<SortType>('recent')

  const rarityOrder = { legendary: 4, epic: 3, rare: 2, common: 1 }

  const filteredAndSortedItems = items
    .filter(item => filterType === 'all' || item.type === filterType)
    .filter(item => filterRarity === 'all' || item.rarity === filterRarity)
    .sort((a, b) => {
      if (sortBy === 'recent') {
        return b.date.getTime() - a.date.getTime()
      } else {
        return rarityOrder[b.rarity] - rarityOrder[a.rarity]
      }
    })

  const getRarityColor = (rarity: ItemRarity) => {
    switch (rarity) {
      case 'legendary': return '#f39c12'
      case 'epic': return '#e74c3c'
      case 'rare': return '#9b59b6'
      case 'common': return '#95a5a6'
    }
  }

  return (
    <div className={styles.inventory}>
      <div className={styles.header}>
        <h1 className={styles.title}>📚 Inventario</h1>
        <p className={styles.subtitle}>Tu colección de ítems y recompensas</p>
      </div>

      {/* Filtros */}
      <div className={styles.filters}>
        <div className={styles.filterSection}>
          <label className={styles.filterLabel}>Tipo</label>
          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterBtn} ${filterType === 'all' ? styles.active : ''}`}
              onClick={() => setFilterType('all')}
            >
              Todos
            </button>
            <button
              className={`${styles.filterBtn} ${filterType === 'box' ? styles.active : ''}`}
              onClick={() => setFilterType('box')}
            >
              📦 Cajas
            </button>
            <button
              className={`${styles.filterBtn} ${filterType === 'envelope' ? styles.active : ''}`}
              onClick={() => setFilterType('envelope')}
            >
              ✉️ Sobres
            </button>
            <button
              className={`${styles.filterBtn} ${filterType === 'chest' ? styles.active : ''}`}
              onClick={() => setFilterType('chest')}
            >
              🎁 Cofres
            </button>
          </div>
        </div>

        <div className={styles.filterSection}>
          <label className={styles.filterLabel}>Rareza</label>
          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterBtn} ${filterRarity === 'all' ? styles.active : ''}`}
              onClick={() => setFilterRarity('all')}
            >
              Todas
            </button>
            <button
              className={`${styles.filterBtn} ${styles.legendary} ${filterRarity === 'legendary' ? styles.active : ''}`}
              onClick={() => setFilterRarity('legendary')}
            >
              Legendaria
            </button>
            <button
              className={`${styles.filterBtn} ${styles.epic} ${filterRarity === 'epic' ? styles.active : ''}`}
              onClick={() => setFilterRarity('epic')}
            >
              Épica
            </button>
            <button
              className={`${styles.filterBtn} ${styles.rare} ${filterRarity === 'rare' ? styles.active : ''}`}
              onClick={() => setFilterRarity('rare')}
            >
              Rara
            </button>
            <button
              className={`${styles.filterBtn} ${styles.common} ${filterRarity === 'common' ? styles.active : ''}`}
              onClick={() => setFilterRarity('common')}
            >
              Común
            </button>
          </div>
        </div>

        <div className={styles.filterSection}>
          <label className={styles.filterLabel}>Ordenar por</label>
          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterBtn} ${sortBy === 'recent' ? styles.active : ''}`}
              onClick={() => setSortBy('recent')}
            >
              🕐 Recientes
            </button>
            <button
              className={`${styles.filterBtn} ${sortBy === 'rarity' ? styles.active : ''}`}
              onClick={() => setSortBy('rarity')}
            >
              ⭐ Rareza
            </button>
          </div>
        </div>
      </div>

      {/* Grid de ítems */}
      <div className={styles.grid}>
        {filteredAndSortedItems.map(item => (
          <div
            key={item.id}
            className={styles.card}
            style={{
              borderColor: getRarityColor(item.rarity),
              boxShadow: `0 4px 20px ${getRarityColor(item.rarity)}40`
            }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.itemIcon}>{item.image}</span>
              <span
                className={styles.rarityBadge}
                style={{ backgroundColor: getRarityColor(item.rarity) }}
              >
                {item.rarity}
              </span>
            </div>
            <h3 className={styles.itemName}>{item.name}</h3>
            <div className={styles.itemCount}>
              <span>Cantidad: </span>
              <strong>{item.count}</strong>
            </div>
            <button className={styles.useBtn}>
              Abrir
            </button>
          </div>
        ))}
      </div>

      {filteredAndSortedItems.length === 0 && (
        <div className={styles.empty}>
          <p>😔 No hay ítems con estos filtros</p>
        </div>
      )}
    </div>
  )
}
