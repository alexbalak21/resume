import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  oJT486Hours?: string;
  collegeBasedNSTPOffice?: string;

  /** Style props */
  groupDivPosition?: CSSProperties["position"];
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
  groupDivWidth?: CSSProperties["width"];
  groupDivRight?: CSSProperties["right"];
  groupDivLeft1?: CSSProperties["left"];
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  oJT486Hours,
  collegeBasedNSTPOffice,
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
  groupDivWidth,
  groupDivRight,
  groupDivLeft1,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft]);

  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: groupDivWidth,
      right: groupDivRight,
      left: groupDivLeft1,
    };
  }, [groupDivWidth, groupDivRight, groupDivLeft1]);

  return (
    <div className={styles.groupParent} style={groupDiv1Style}>
      <div className={styles.frameWrapper} style={groupDiv2Style}>
        <div className={styles.icoutlineWorkOutlineParent}>
          <img
            className={styles.icoutlineWorkOutlineIcon}
            alt=""
            src="/icoutlineworkoutline1.svg"
          />
          <div className={styles.ojt486HoursParent}>
            <div className={styles.ojt486Hours}>{oJT486Hours}</div>
            <div className={styles.collegeBased}>{collegeBasedNSTPOffice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
