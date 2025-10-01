import { FunctionComponent } from "react";
import LinkedInUser from "./LinkedInUser";
import Website from "./Website";
import PhoneNumber from "./PhoneNumber";
import Email from "./Email";
import Adress from "./Adress";
import styles from "./AboutContainer.module.css";

const AboutContainer: FunctionComponent = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutBg} />
      <LinkedInUser
        frameDivPosition="absolute"
        frameDivTop="131px"
        frameDivLeft="18px"
      />
      <Website
        frameDivPosition="absolute"
        frameDivTop="111px"
        frameDivLeft="18px"
      />
      <PhoneNumber
        frameDivPosition="absolute"
        frameDivTop="87px"
        frameDivLeft="16px"
      />
      <Email
        frameDivPosition="absolute"
        frameDivTop="67px"
        frameDivLeft="18px"
      />
      <Adress aboutPosition="absolute" aboutTop="43px" aboutLeft="15px" />
      <div className={styles.about1}>About</div>
    </div>
  );
};

export default AboutContainer;
