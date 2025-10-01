import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Social.module.css";

export type SocialType = {
  /** Style props */
  groupIconOverflow?: CSSProperties["overflow"];
  groupIconPosition?: CSSProperties["position"];
  groupIconTop?: CSSProperties["top"];
  groupIconLeft?: CSSProperties["left"];
};

const Social: FunctionComponent<SocialType> = ({
  groupIconOverflow,
  groupIconPosition,
  groupIconTop,
  groupIconLeft,
}) => {
  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: groupIconOverflow,
      position: groupIconPosition,
      top: groupIconTop,
      left: groupIconLeft,
    };
  }, [groupIconOverflow, groupIconPosition, groupIconTop, groupIconLeft]);

  return (
    <img
      className={styles.groupIcon}
      alt=""
      src="/group-35.svg"
      style={groupIconStyle}
    />
  );
};

export default Social;
