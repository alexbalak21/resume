import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./EmojiContainer.module.css";

export type EmojiContainerType = {
  /** Style props */
  frameDivPosition?: CSSProperties["position"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
};

const EmojiContainer: FunctionComponent<EmojiContainerType> = ({
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  return (
    <div className={styles.vectorParent} style={frameDiv1Style}>
      <img className={styles.componentChild} alt="" src="/line-3.svg" />
      <div className={styles.reactParent}>
        <img className={styles.reactIcon} alt="" src="/react.svg" />
        <img
          className={styles.materialSymbolscommentOutliIcon}
          alt=""
          src="/materialsymbolscommentoutlinesharp.svg"
        />
      </div>
    </div>
  );
};

export default EmojiContainer;
