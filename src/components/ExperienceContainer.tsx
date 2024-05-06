import { FunctionComponent } from "react";
import Experience from "./Experience";
import FrameComponent from "./FrameComponent";
import FrameComponent1 from "./FrameComponent1";
import styles from "./ExperienceContainer.module.css";

const ExperienceContainer: FunctionComponent = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.experienceChild} />
      <div className={styles.experience1}>Experience</div>
      <Experience
        experiencePosition="absolute"
        experienceHeight="21.13%"
        experienceWidth="50.29%"
        experienceTop="30.28%"
        experienceRight="44.11%"
        experienceBottom="48.59%"
        experienceLeft="5.6%"
      />
      <FrameComponent
        designClientRequirementsB="Design client requirements based on their requirements."
        frameDivPosition="absolute"
        frameDivTop="78px"
        frameDivLeft="41px"
        frameDivHeight="17px"
      />
      <FrameComponent1
        frameDivPosition="absolute"
        frameDivTop="107px"
        frameDivLeft="19px"
      />
    </div>
  );
};

export default ExperienceContainer;
