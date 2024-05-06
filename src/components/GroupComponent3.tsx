import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent3.module.css";

export type GroupComponent3Type = {
  labelText?: string;

  /** Style props */
  groupDivPosition?: CSSProperties["position"];
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
  groupDivWidth?: CSSProperties["width"];
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivRight?: CSSProperties["right"];
  skillLabelHeight?: CSSProperties["height"];
  skillLabelBottom?: CSSProperties["bottom"];
  skillLabelWidth?: CSSProperties["width"];
  skillLabelRight?: CSSProperties["right"];
  skillLabelLeft?: CSSProperties["left"];
};

const GroupComponent3: FunctionComponent<GroupComponent3Type> = ({
  labelText,
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
  groupDivWidth,
  rectangleDivWidth,
  rectangleDivRight,
  skillLabelHeight,
  skillLabelBottom,
  skillLabelWidth,
  skillLabelRight,
  skillLabelLeft,
}) => {
  const groupDiv4Style: CSSProperties = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
      width: groupDivWidth,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft, groupDivWidth]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: rectangleDivWidth,
      right: rectangleDivRight,
    };
  }, [rectangleDivWidth, rectangleDivRight]);

  const skillLabelStyle: CSSProperties = useMemo(() => {
    return {
      height: skillLabelHeight,
      bottom: skillLabelBottom,
      width: skillLabelWidth,
      right: skillLabelRight,
      left: skillLabelLeft,
    };
  }, [
    skillLabelHeight,
    skillLabelBottom,
    skillLabelWidth,
    skillLabelRight,
    skillLabelLeft,
  ]);

  return (
    <div className={styles.rectangleParent} style={groupDiv4Style}>
      <div className={styles.componentChild} style={rectangleDivStyle} />
      <div className={styles.skillLabel} style={skillLabelStyle}>
        <div className={styles.labelText}>{labelText}</div>
      </div>
    </div>
  );
};

export default GroupComponent3;
