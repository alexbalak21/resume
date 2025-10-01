import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  /** Style props */
  frameDivPosition?: CSSProperties["position"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
}) => {
  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  return (
    <div
      className={styles.materialSymbolscallOutlineParent}
      style={frameDiv5Style}
    >
      <img
        className={styles.materialSymbolscallOutlineIcon}
        alt=""
        src="/materialsymbolscalloutlinerounded.svg"
      />
      <div className={styles.tnt}>0909-048-8005 TNT</div>
    </div>
  );
};

export default FrameComponent5;
