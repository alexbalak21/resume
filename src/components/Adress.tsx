import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Adress.module.css";

export type AdressType = {
  /** Style props */
  aboutPosition?: CSSProperties["position"];
  aboutTop?: CSSProperties["top"];
  aboutLeft?: CSSProperties["left"];
};

const Adress: FunctionComponent<AdressType> = ({
  aboutPosition,
  aboutTop,
  aboutLeft,
}) => {
  const aboutStyle: CSSProperties = useMemo(() => {
    return {
      position: aboutPosition,
      top: aboutTop,
      left: aboutLeft,
    };
  }, [aboutPosition, aboutTop, aboutLeft]);

  return (
    <div className={styles.about} style={aboutStyle}>
      <img
        className={styles.mdihouseVariantOutlineIcon}
        alt=""
        src="/mdihousevariantoutline.svg"
      />
      <div className={styles.bigteNorzagarayBulacan}>
        Bigte, Norzagaray, Bulacan
      </div>
    </div>
  );
};

export default Adress;
