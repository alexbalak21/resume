import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import GroupComponent from "./GroupComponent";
import FrameComponent1 from "./FrameComponent1";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.training}>
      <div className={styles.trainingChild} />
      <FrameComponent
        designClientRequirementsB="The objective is to clone their website."
        frameDivPosition="absolute"
        frameDivTop="96px"
        frameDivLeft="40px"
        frameDivHeight="17.8px"
      />
      <GroupComponent
        groupDivPosition="absolute"
        groupDivTop="44px"
        groupDivLeft="18px"
      />
      <div className={styles.training1}>Training</div>
      <FrameComponent1
        frameDivPosition="absolute"
        frameDivTop="125px"
        frameDivLeft="18px"
      />
    </div>
  );
};

export default Footer;
