import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  /** Style props */
  frameDivPosition?: CSSProperties["position"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
}) => {
  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  return (
    <div className={styles.mdiworldWideWebParent} style={frameDiv4Style}>
      <img
        className={styles.mdiworldWideWebIcon}
        alt=""
        src="/mdiworldwideweb.svg"
      />
      <div className={styles.jeraldolivascom}>jeraldolivas.com</div>
    </div>
  );
};

export default FrameComponent4;
