import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./EducationSchool.module.css";

export type EducationSchoolType = {
  bulacanStateUniversitySC?: string;
  bachelorOfScienceInInform?: string;

  /** Style props */
  educationSchoolPosition?: CSSProperties["position"];
  educationSchoolTop?: CSSProperties["top"];
  educationSchoolLeft?: CSSProperties["left"];
  bulacanStateUniversityWidth?: CSSProperties["width"];
  bulacanStateUniversityDisplay?: CSSProperties["display"];
  bachelorOfScienceWidth?: CSSProperties["width"];
  bachelorOfScienceDisplay?: CSSProperties["display"];
};

const EducationSchool: FunctionComponent<EducationSchoolType> = ({
  bulacanStateUniversitySC,
  bachelorOfScienceInInform,
  educationSchoolPosition,
  educationSchoolTop,
  educationSchoolLeft,
  bulacanStateUniversityWidth,
  bulacanStateUniversityDisplay,
  bachelorOfScienceWidth,
  bachelorOfScienceDisplay,
}) => {
  const educationSchoolStyle: CSSProperties = useMemo(() => {
    return {
      position: educationSchoolPosition,
      top: educationSchoolTop,
      left: educationSchoolLeft,
    };
  }, [educationSchoolPosition, educationSchoolTop, educationSchoolLeft]);

  const bulacanStateUniversityStyle: CSSProperties = useMemo(() => {
    return {
      width: bulacanStateUniversityWidth,
      display: bulacanStateUniversityDisplay,
    };
  }, [bulacanStateUniversityWidth, bulacanStateUniversityDisplay]);

  const bachelorOfScienceStyle: CSSProperties = useMemo(() => {
    return {
      width: bachelorOfScienceWidth,
      display: bachelorOfScienceDisplay,
    };
  }, [bachelorOfScienceWidth, bachelorOfScienceDisplay]);

  return (
    <div className={styles.educationSchool} style={educationSchoolStyle}>
      <div className={styles.cileducationParent}>
        <img
          className={styles.cileducationIcon}
          alt=""
          src="/cileducation.svg"
        />
        <div className={styles.bulacanStateUniversityScParent}>
          <div
            className={styles.bulacanStateUniversity}
            style={bulacanStateUniversityStyle}
          >
            {bulacanStateUniversitySC}
          </div>
          <div
            className={styles.bachelorOfScience}
            style={bachelorOfScienceStyle}
          >
            {bachelorOfScienceInInform}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSchool;
