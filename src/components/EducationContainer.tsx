import { FunctionComponent } from "react";
import EducationYears from "./EducationYears";
import EducationLocation from "./EducationLocation";
import EducationSkill from "./EducationSkill";
import EducationSchool from "./EducationSchool";
import EmojiContainer from "./EmojiContainer";
import styles from "./EducationContainer.module.css";

const EducationContainer: FunctionComponent = () => {
  return (
    <div className={styles.education}>
      <div className={styles.educationChild} />
      <EducationYears
        prop="2016 - 2018"
        yrGraduatePosition="absolute"
        yrGraduateTop="266px"
        yrGraduateLeft="42px"
      />
      <EducationLocation
        oJT486Hours="Work Immersion (80 hours)"
        collegeBasedNSTPOffice="Chowking Novaliches Bayan"
        groupDivPosition="absolute"
        groupDivTop="228px"
        groupDivLeft="40px"
        groupDivWidth="97.84%"
        groupDivRight="1.08%"
        groupDivLeft1="1.08%"
      />
      <div className={styles.instanceParent}>
        <EducationSkill
          c="Baking"
          frameDivPosition="absolute"
          frameDivTop="0px"
          frameDivLeft="0px"
          cWidth="unset"
          cDisplay="unset"
          cHeight="unset"
        />
        <EducationSkill
          c="Plating"
          frameDivPosition="absolute"
          frameDivTop="0px"
          frameDivLeft="61px"
          cWidth="unset"
          cDisplay="unset"
          cHeight="unset"
        />
        <EducationSkill
          c="Cooking"
          frameDivPosition="absolute"
          frameDivTop="0px"
          frameDivLeft="122px"
          cWidth="unset"
          cDisplay="unset"
          cHeight="unset"
        />
      </div>
      <EducationSchool
        bulacanStateUniversitySC="Bestlink College of the Philippines - Bulacan"
        bachelorOfScienceInInform="Home Economics - Cookery NC II"
        educationSchoolPosition="absolute"
        educationSchoolTop="168px"
        educationSchoolLeft="19px"
        bulacanStateUniversityWidth="unset"
        bulacanStateUniversityDisplay="unset"
        bachelorOfScienceWidth="unset"
        bachelorOfScienceDisplay="unset"
      />
      <EducationYears
        prop="2018 - 2022"
        yrGraduatePosition="absolute"
        yrGraduateTop="141px"
        yrGraduateLeft="42px"
      />
      <EducationLocation
        oJT486Hours="OJT (486 hours)"
        collegeBasedNSTPOffice="College based - NSTP Office"
        groupDivPosition="absolute"
        groupDivTop="103px"
        groupDivLeft="40px"
        groupDivWidth="96.64%"
        groupDivRight="1.68%"
        groupDivLeft1="1.68%"
      />
      <div className={styles.instanceGroup}>
        <div className={styles.cWrapper}>
          <div className={styles.c}>C</div>
        </div>
        <EducationSkill
          c="C#"
          frameDivPosition="absolute"
          frameDivTop="0px"
          frameDivLeft="28px"
          cWidth="unset"
          cDisplay="unset"
          cHeight="unset"
        />
        <EducationSkill
          c="C"
          frameDivPosition="absolute"
          frameDivTop="0px"
          frameDivLeft="0px"
          cWidth="unset"
          cDisplay="unset"
          cHeight="unset"
        />
        <EducationSkill
          c="Java"
          frameDivPosition="absolute"
          frameDivTop="0px"
          frameDivLeft="65px"
          cWidth="unset"
          cDisplay="unset"
          cHeight="unset"
        />
        <EducationSkill
          c="MySQL"
          frameDivPosition="absolute"
          frameDivTop="0px"
          frameDivLeft="110px"
          cWidth="unset"
          cDisplay="unset"
          cHeight="unset"
        />
        <EducationSkill
          c="Photoshop"
          frameDivPosition="absolute"
          frameDivTop="0px"
          frameDivLeft="163px"
          cWidth="unset"
          cDisplay="unset"
          cHeight="unset"
        />
      </div>
      <EducationSchool
        bulacanStateUniversitySC="Bulacan State University - Sarmiento Campus"
        bachelorOfScienceInInform="Bachelor of Science in Information Technology"
        educationSchoolPosition="absolute"
        educationSchoolTop="43px"
        educationSchoolLeft="18px"
        bulacanStateUniversityWidth="unset"
        bulacanStateUniversityDisplay="unset"
        bachelorOfScienceWidth="238.5px"
        bachelorOfScienceDisplay="inline-block"
      />
      <div className={styles.education1}>Education</div>
      <EmojiContainer
        frameDivPosition="absolute"
        frameDivTop="293px"
        frameDivLeft="19px"
      />
    </div>
  );
};

export default EducationContainer;
