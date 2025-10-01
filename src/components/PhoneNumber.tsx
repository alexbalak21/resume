import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PhoneNumber.module.css";

export type PhoneNumberType = {
  /** Style props */
  frameDivPosition?: CSSProperties["position"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
};

const PhoneNumber: FunctionComponent<PhoneNumberType> = ({
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

export default PhoneNumber;
