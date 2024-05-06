import { FunctionComponent } from "react";
import TrainingContainer from "./TrainingContainer";
import ExperienceContainer from "./ExperienceContainer";
import EducationContainer from "./EducationContainer";
import AboutContainer from "./AboutContainer";
import SkillsTools from "./SkillsTools";
import SocialContainer from "./SocialContainer";
import styles from "./Resume.module.css";

const Resume: FunctionComponent = () => {
  return (
    <div className={styles.resume}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <TrainingContainer />
      <ExperienceContainer />
      <EducationContainer />
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
      <img className={styles.resumeChild} alt="" src="/line-1.svg" />
      <AboutContainer />
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
        <div className={styles.education}>Education</div>
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
      <SocialContainer
        groupGroup35="/social.svg"
        groupIconWidth="111px"
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
