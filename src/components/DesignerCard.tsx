import styles from './DesignerCard.module.css';

const DesignerCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.name}>Chiara Bianchi</div>
        <div className={styles.role}>Product Designer</div>
      </div>

      <div className={styles.quote}>
        “Design isn’t finished until somebody is using it.”
      </div>

      <div className={styles.author}>
        — Brenda Laurel
      </div>
    </div>
  );
};

export default DesignerCard;
