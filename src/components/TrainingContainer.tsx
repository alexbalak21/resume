import { FunctionComponent } from "react";
import ExperianceDescription from "./ExperianceDescription";
import TrainingItem from "./TrainingItem";
import EmojiContainer from "./EmojiContainer";
import styles from "./TrainingContainer.module.css";

const TrainingContainer: FunctionComponent = () => {
  return (
    <div className={styles.training}>
      <div className={styles.trainingChild} />
      <ExperianceDescription
        designClientRequirementsB="The objective is to clone their website."
        frameDivPosition="absolute"
        frameDivTop="96px"
        frameDivLeft="40px"
        frameDivHeight="17.8px"
      />
      <TrainingItem
        groupDivPosition="absolute"
        groupDivTop="44px"
        groupDivLeft="18px"
      />
      <div className={styles.training1}>Training</div>
      <EmojiContainer
        frameDivPosition="absolute"
        frameDivTop="125px"
        frameDivLeft="18px"
      />
    </div>
  );
};

export default TrainingContainer;
