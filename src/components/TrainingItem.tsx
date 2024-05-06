import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TrainingItem.module.css";

export type TrainingItemType = {
  /** Style props */
  groupDivPosition?: CSSProperties["position"];
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
};

const TrainingItem: FunctionComponent<TrainingItemType> = ({
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft]);

  return (
    <div className={styles.frameParent} style={groupDivStyle}>
      <div className={styles.bayanAcademyParent}>
        <b className={styles.bayanAcademy}>Bayan Academy</b>
        <div className={styles.intermediateFrontEndWeb}>
          Intermediate Front-End Web Development
        </div>
        <div className={styles.certificateOfCompletion}>
          Certificate of Completion / March 2022
        </div>
      </div>
      <img
        className={styles.healthiconsiTrainingClassO}
        alt=""
        src="/healthiconsitrainingclassoutline.svg"
      />
    </div>
  );
};

export default TrainingItem;
