import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ExperienceLocation.module.css";

export type ExperienceLocationType = {
  /** Style props */
  experiencePosition?: CSSProperties["position"];
  experienceTop?: CSSProperties["top"];
  experienceLeft?: CSSProperties["left"];
};

const ExperienceLocation: FunctionComponent<ExperienceLocationType> = ({
  experiencePosition,
  experienceTop,
  experienceLeft,
}) => {
  const experienceStyle: CSSProperties = useMemo(() => {
    return {
      position: experiencePosition,
      top: experienceTop,
      left: experienceLeft,
    };
  }, [experiencePosition, experienceTop, experienceLeft]);

  return (
    <div className={styles.experience} style={experienceStyle}>
      <img
        className={styles.icoutlineWorkOutlineIcon}
        alt=""
        src="/icoutlineworkoutline.svg"
      />
      <div className={styles.artistFreelanceParent}>
        <div className={styles.artistFreelance}>Artist (Freelance)</div>
        <div className={styles.selfEmployed2018}>
          Self-Employed / 2018 - Present
        </div>
      </div>
    </div>
  );
};

export default ExperienceLocation;
