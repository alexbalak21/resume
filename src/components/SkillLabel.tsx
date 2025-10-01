import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SkillLabel.module.css";

export type SkillLabelType = {
  labelText?: string;

  /** Style props */
  skillLabelPosition?: CSSProperties["position"];
  skillLabelHeight?: CSSProperties["height"];
  skillLabelWidth?: CSSProperties["width"];
  skillLabelTop?: CSSProperties["top"];
  skillLabelRight?: CSSProperties["right"];
  skillLabelBottom?: CSSProperties["bottom"];
  skillLabelLeft?: CSSProperties["left"];
};

const SkillLabel: FunctionComponent<SkillLabelType> = ({
  labelText,
  skillLabelPosition,
  skillLabelHeight,
  skillLabelWidth,
  skillLabelTop,
  skillLabelRight,
  skillLabelBottom,
  skillLabelLeft,
}) => {
  const skillLabel1Style: CSSProperties = useMemo(() => {
    return {
      position: skillLabelPosition,
      height: skillLabelHeight,
      width: skillLabelWidth,
      top: skillLabelTop,
      right: skillLabelRight,
      bottom: skillLabelBottom,
      left: skillLabelLeft,
    };
  }, [
    skillLabelPosition,
    skillLabelHeight,
    skillLabelWidth,
    skillLabelTop,
    skillLabelRight,
    skillLabelBottom,
    skillLabelLeft,
  ]);

  return (
    <div className={styles.skillLabel} style={skillLabel1Style}>
      <div className={styles.labelText}>{labelText}</div>
    </div>
  );
};

export default SkillLabel;
