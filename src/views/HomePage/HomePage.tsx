import styles from './index.module.scss'

export default function HomePage() {
  return (
    <div className={styles.home_page}>
      <p>this is home page</p>
      <button className={styles.btn}>btn</button>
    </div>
  )
}
