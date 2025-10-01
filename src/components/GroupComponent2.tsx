import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent2.module.css";

export type GroupComponent2Type = {
  labelText?: string;

  /** Style props */
  groupDivPosition?: CSSProperties["position"];
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
  groupDivHeight?: CSSProperties["height"];
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  labelText,
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
  groupDivHeight,
}) => {
  const groupDiv3Style: CSSProperties = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
      height: groupDivHeight,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft, groupDivHeight]);

  return (
    <div className={styles.skillLabelParent} style={groupDiv3Style}>
      <div className={styles.skillLabel}>
        <div className={styles.labelText}>{labelText}</div>
      </div>
    </div>
  );
};

export default GroupComponent2;
