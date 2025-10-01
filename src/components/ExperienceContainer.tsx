import { FunctionComponent } from "react";
import ExperienceLocation from "./ExperienceLocation";
import ExperianceDescription from "./ExperianceDescription";
import EmojiContainer from "./EmojiContainer";
import styles from "./ExperienceContainer.module.css";

const ExperienceContainer: FunctionComponent = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.experienceChild} />
      <div className={styles.experience1}>Experience</div>
      <ExperienceLocation
        experiencePosition="absolute"
        experienceTop="calc(50% - 28px)"
        experienceLeft="calc(50% - 154.5px)"
      />
      <ExperianceDescription
        designClientRequirementsB="Design client requirements based on their requirements."
        frameDivPosition="absolute"
        frameDivTop="78px"
        frameDivLeft="41px"
        frameDivHeight="17px"
      />
      <EmojiContainer
        frameDivPosition="absolute"
        frameDivTop="107px"
        frameDivLeft="19px"
      />
    </div>
  );
};

export default ExperienceContainer;
