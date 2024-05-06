import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SocialContainer.module.css";

export type SocialContainerType = {
  groupGroup35?: string;

  /** Style props */
  groupIconWidth?: CSSProperties["width"];
  groupIconOverflow?: CSSProperties["overflow"];
  groupIconPosition?: CSSProperties["position"];
  groupIconTop?: CSSProperties["top"];
  groupIconLeft?: CSSProperties["left"];
};

const SocialContainer: FunctionComponent<SocialContainerType> = ({
  groupGroup35,
  groupIconWidth,
  groupIconOverflow,
  groupIconPosition,
  groupIconTop,
  groupIconLeft,
}) => {
  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      width: groupIconWidth,
      overflow: groupIconOverflow,
      position: groupIconPosition,
      top: groupIconTop,
      left: groupIconLeft,
    };
  }, [
    groupIconWidth,
    groupIconOverflow,
    groupIconPosition,
    groupIconTop,
    groupIconLeft,
  ]);

  return (
    <img
      className={styles.groupIcon}
      alt=""
      src={groupGroup35}
      style={groupIconStyle}
    />
  );
};

export default SocialContainer;
