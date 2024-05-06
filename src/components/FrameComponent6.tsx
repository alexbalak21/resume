import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  /** Style props */
  frameDivPosition?: CSSProperties["position"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
}) => {
  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  return (
    <div className={styles.icoutlineEmailParent} style={frameDiv6Style}>
      <img
        className={styles.icoutlineEmailIcon}
        alt=""
        src="/icoutlineemail.svg"
      />
      <div className={styles.olivasjeraldjao15gmailcom}>
        olivasjeraldjao15@gmail.com
      </div>
    </div>
  );
};

export default FrameComponent6;
