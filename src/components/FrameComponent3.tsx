import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  /** Style props */
  frameDivPosition?: CSSProperties["position"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  return (
    <div className={styles.phlinkedinLogoParent} style={frameDiv3Style}>
      <img
        className={styles.phlinkedinLogoIcon}
        alt=""
        src="/phlinkedinlogo.svg"
      />
      <div className={styles.jeraldolivas}>/jeraldolivas</div>
    </div>
  );
};

export default FrameComponent3;
