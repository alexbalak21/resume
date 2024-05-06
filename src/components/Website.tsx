import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Website.module.css";

export type WebsiteType = {
  /** Style props */
  frameDivPosition?: CSSProperties["position"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
};

const Website: FunctionComponent<WebsiteType> = ({
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

export default Website;
