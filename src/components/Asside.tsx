import styles from './Asside.module.css';



export default function Asside() {
  return (
    <aside className={styles.content}>
        <div className={styles.image}></div>
        <div className={styles.header}>
            <div className={styles.name}>Alex Balak</div>
            <div className={styles.role}>Frontend Developer</div>
        </div>
    
    </aside>
  );
}



