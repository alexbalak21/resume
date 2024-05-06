import { FunctionComponent } from "react";
import Footer from "./Footer";
import ExperienceContainer from "./ExperienceContainer";
import YrGraduate from "./YrGraduate";
import GroupComponent1 from "./GroupComponent1";
import FrameComponent2 from "./FrameComponent2";
import EducationSchool from "./EducationSchool";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent5 from "./FrameComponent5";
import FrameComponent6 from "./FrameComponent6";
import About from "./About";
import SkillsTools from "./SkillsTools";
import Social from "./Social";
import styles from "./Resume.module.css";

const Resume: FunctionComponent = () => {
  return (
    <div className={styles.jeraldOlivasResume}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <Footer />
      <ExperienceContainer />
      <div className={styles.education}>
        <div className={styles.educationChild} />
        <YrGraduate
          prop="2016 - 2018"
          yrGraduatePosition="absolute"
          yrGraduateTop="266px"
          yrGraduateLeft="42px"
        />
        <GroupComponent1
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
          <FrameComponent2
            c="Baking"
            frameDivPosition="absolute"
            frameDivTop="0px"
            frameDivLeft="0px"
            cWidth="unset"
            cDisplay="unset"
            cHeight="unset"
          />
          <FrameComponent2
            c="Plating"
            frameDivPosition="absolute"
            frameDivTop="0px"
            frameDivLeft="61px"
            cWidth="unset"
            cDisplay="unset"
            cHeight="unset"
          />
          <FrameComponent2
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
        <YrGraduate
          prop="2018 - 2022"
          yrGraduatePosition="absolute"
          yrGraduateTop="141px"
          yrGraduateLeft="42px"
        />
        <GroupComponent1
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
          <FrameComponent2
            c="C#"
            frameDivPosition="absolute"
            frameDivTop="0px"
            frameDivLeft="28px"
            cWidth="unset"
            cDisplay="unset"
            cHeight="unset"
          />
          <FrameComponent2
            c="C"
            frameDivPosition="absolute"
            frameDivTop="0px"
            frameDivLeft="0px"
            cWidth="unset"
            cDisplay="unset"
            cHeight="unset"
          />
          <FrameComponent2
            c="Java"
            frameDivPosition="absolute"
            frameDivTop="0px"
            frameDivLeft="65px"
            cWidth="unset"
            cDisplay="unset"
            cHeight="unset"
          />
          <FrameComponent2
            c="MySQL"
            frameDivPosition="absolute"
            frameDivTop="0px"
            frameDivLeft="110px"
            cWidth="unset"
            cDisplay="unset"
            cHeight="unset"
          />
          <FrameComponent2
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
        <FrameComponent1
          frameDivPosition="absolute"
          frameDivTop="293px"
          frameDivLeft="19px"
        />
      </div>
      <div className={styles.whiteBackground} />
      <img className={styles.coverPhotoIcon} alt="" src="/cover-photo@2x.png" />
      <img
        className={styles.profilePhotoIcon}
        alt=""
        src="/profile-photo@2x.png"
      />
      <b className={styles.jeraldOlivas}>Jerald Olivas</b>
      <div className={styles.aVeryWellOrganizedContainer}>
        <p className={styles.aVeryWellOrganized}>
          A very well-organized and hardworking person
        </p>
        <p
          className={styles.aVeryWellOrganized}
        >{`seeking a position of responsibility to obtain actual experience. `}</p>
      </div>
      <img
        className={styles.jeraldOlivasResumeChild}
        alt=""
        src="/line-1.svg"
      />
      <div className={styles.about}>
        <div className={styles.aboutBg} />
        <FrameComponent3
          frameDivPosition="absolute"
          frameDivTop="131px"
          frameDivLeft="18px"
        />
        <FrameComponent4
          frameDivPosition="absolute"
          frameDivTop="111px"
          frameDivLeft="18px"
        />
        <FrameComponent5
          frameDivPosition="absolute"
          frameDivTop="87px"
          frameDivLeft="16px"
        />
        <FrameComponent6
          frameDivPosition="absolute"
          frameDivTop="67px"
          frameDivLeft="18px"
        />
        <About aboutPosition="absolute" aboutTop="43px" aboutLeft="15px" />
        <div className={styles.about1}>About</div>
      </div>
      <div className={styles.titles}>
        <div className={styles.moreParent}>
          <div className={styles.more}>More</div>
          <img
            className={styles.materialSymbolsexpandMoreIcon}
            alt=""
            src="/materialsymbolsexpandmore.svg"
          />
        </div>
        <div className={styles.more}>About</div>
        <div className={styles.education2}>Education</div>
        <div className={styles.skillsTools}>{`Skills  & Tools`}</div>
        <div className={styles.experience}>Experience</div>
        <div className={styles.training}>Training</div>
      </div>
      <SkillsTools />
      <img
        className={styles.icbaselineCloseIcon}
        alt=""
        src="/icbaselineclose.svg"
      />
      <img
        className={styles.icbaselineCloseIcon1}
        alt=""
        src="/icbaselineclose.svg"
      />
      <img
        className={styles.icbaselineCloseIcon2}
        alt=""
        src="/icbaselineclose.svg"
      />
      <Social
        groupIconOverflow="unset"
        groupIconPosition="absolute"
        groupIconTop="119px"
        groupIconLeft="158px"
      />
      <a
        className={styles.git}
        href="https://github.com/jeraldolivas"
        target="_blank"
      >
        Git
      </a>
      <a
        className={styles.fig}
        href="https://www.figma.com/@jeraldolivas"
        target="_blank"
      >
        Fig
      </a>
      <a
        className={styles.inn}
        href="https://www.linkedin.com/in/jerald-olivas-92a307260/"
        target="_blank"
      >
        inn
      </a>
      <a
        className={styles.fbb}
        href="https://www.facebook.com/jerald.olivas"
        target="_blank"
      >
        fbb
      </a>
      <img className={styles.component1Icon} alt="" src="/component-1.svg" />
      <img className={styles.component2Icon} alt="" src="/component-1.svg" />
      <img
        className={styles.mioptionsHorizontalIcon}
        alt=""
        src="/mioptionshorizontal.svg"
      />
    </div>
  );
};

export default Resume;
