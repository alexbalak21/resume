import styles from './Asside.module.css';



export default function Asside() {
  return (
    <aside className={styles.content}>
        <div className={styles.image}></div>
        <div className={styles.header}>
            <h5 className={styles.name}>Alex Balak</h5>
            <h6 className={styles.role} >Frontend Developer</h6>
            <h6 className="mx-4 mt-3">Design isn't finished until someone is using it</h6>
        </div>
    </aside>
  );
}



