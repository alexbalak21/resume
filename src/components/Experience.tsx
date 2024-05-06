import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Experience.module.css";

export type ExperienceType = {
  /** Style props */
  experiencePosition?: CSSProperties["position"];
  experienceHeight?: CSSProperties["height"];
  experienceWidth?: CSSProperties["width"];
  experienceTop?: CSSProperties["top"];
  experienceRight?: CSSProperties["right"];
  experienceBottom?: CSSProperties["bottom"];
  experienceLeft?: CSSProperties["left"];
};

const Experience: FunctionComponent<ExperienceType> = ({
  experiencePosition,
  experienceHeight,
  experienceWidth,
  experienceTop,
  experienceRight,
  experienceBottom,
  experienceLeft,
}) => {
  const experienceStyle: CSSProperties = useMemo(() => {
    return {
      position: experiencePosition,
      height: experienceHeight,
      width: experienceWidth,
      top: experienceTop,
      right: experienceRight,
      bottom: experienceBottom,
      left: experienceLeft,
    };
  }, [
    experiencePosition,
    experienceHeight,
    experienceWidth,
    experienceTop,
    experienceRight,
    experienceBottom,
    experienceLeft,
  ]);

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

export default Experience;
