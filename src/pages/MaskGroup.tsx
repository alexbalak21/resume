import { FunctionComponent } from "react";
import Resume from "../components/Resume";
import styles from "./MaskGroup.module.css";

const MaskGroup: FunctionComponent = () => {
  return (
    <div className={styles.maskGroup}>
      <Resume />
    </div>
  );
};

export default MaskGroup;
