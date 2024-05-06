import { FunctionComponent } from "react";
import GroupComponent2 from "./GroupComponent2";
import GroupComponent3 from "./GroupComponent3";
import styles from "./SkillsTools.module.css";

const SkillsTools: FunctionComponent = () => {
  return (
    <div className={styles.skillsTools}>
      <div className={styles.skillsToolsChild} />
      <div className={styles.backgroundIndicators}>Background Indicators</div>
      <div className={styles.feRelated}>FE related</div>
      <div className={styles.beRelated}>BE related</div>
      <div className={styles.coderRelated}>Coder related</div>
      <div className={styles.designerRelated}>Designer related</div>
      <div className={styles.languages}>Languages</div>
      <div className={styles.toolsSoftware}>{`Tools & Software`}</div>
      <div className={styles.others}>Others</div>
      <img className={styles.skillsToolsItem} alt="" src="/line-2.svg" />
      <div className={styles.skillsTools1}>{`Skills & Tools`}</div>
      <GroupComponent2
        labelText="Commonly used"
        groupDivPosition="absolute"
        groupDivTop="63px"
        groupDivLeft="97px"
        groupDivHeight="15.1px"
      />
      <GroupComponent2
        labelText="Visual Studio Code"
        groupDivPosition="absolute"
        groupDivTop="295.3px"
        groupDivLeft="18px"
        groupDivHeight="15.1px"
      />
      <GroupComponent2
        labelText="Photoshop"
        groupDivPosition="absolute"
        groupDivTop="342.5px"
        groupDivLeft="16px"
        groupDivHeight="15.1px"
      />
      <GroupComponent2
        labelText="Illustrator"
        groupDivPosition="absolute"
        groupDivTop="342.5px"
        groupDivLeft="90px"
        groupDivHeight="15.1px"
      />
      <GroupComponent2
        labelText="Webflow"
        groupDivPosition="absolute"
        groupDivTop="362.6px"
        groupDivLeft="70px"
        groupDivHeight="15.1px"
      />
      <GroupComponent2
        labelText="Canva"
        groupDivPosition="absolute"
        groupDivTop="362.6px"
        groupDivLeft="16px"
        groupDivHeight="15.1px"
      />
      <GroupComponent2
        labelText="MS Office"
        groupDivPosition="absolute"
        groupDivTop="415.7px"
        groupDivLeft="16px"
        groupDivHeight="15.1px"
      />
      <GroupComponent2
        labelText="PC setup"
        groupDivPosition="absolute"
        groupDivTop="415.7px"
        groupDivLeft="83px"
        groupDivHeight="15.1px"
      />
      <GroupComponent2
        labelText="Command Prompt"
        groupDivPosition="absolute"
        groupDivTop="435.8px"
        groupDivLeft="15px"
        groupDivHeight="15.1px"
      />
      <GroupComponent2
        labelText="Figma"
        groupDivPosition="absolute"
        groupDivTop="342.5px"
        groupDivLeft="159px"
        groupDivHeight="15.1px"
      />
      <GroupComponent2
        labelText="GitHub"
        groupDivPosition="absolute"
        groupDivTop="295.3px"
        groupDivLeft="134px"
        groupDivHeight="15.1px"
      />
      <GroupComponent2
        labelText="HTML"
        groupDivPosition="absolute"
        groupDivTop="154.7px"
        groupDivLeft="17px"
        groupDivHeight="15.1px"
      />
      <GroupComponent2
        labelText="Java"
        groupDivPosition="absolute"
        groupDivTop="201.9px"
        groupDivLeft="163px"
        groupDivHeight="15.1px"
      />
      <GroupComponent3
        labelText="Sometimes"
        groupDivPosition="absolute"
        groupDivTop="63.3px"
        groupDivLeft="19px"
        groupDivWidth="66px"
        rectangleDivWidth="39.39%"
        rectangleDivRight="60.61%"
        skillLabelHeight="99.34%"
        skillLabelBottom="0.66%"
        skillLabelWidth="100%"
        skillLabelRight="0%"
        skillLabelLeft="0%"
      />
      <GroupComponent3
        labelText="C Language"
        groupDivPosition="absolute"
        groupDivTop="201.9px"
        groupDivLeft="19px"
        groupDivWidth="70px"
        rectangleDivWidth="39.43%"
        rectangleDivRight="60.57%"
        skillLabelHeight="99.34%"
        skillLabelBottom="0.66%"
        skillLabelWidth="100%"
        skillLabelRight="0%"
        skillLabelLeft="0%"
      />
      <GroupComponent3
        labelText="C Sharp"
        groupDivPosition="absolute"
        groupDivTop="201.9px"
        groupDivLeft="101px"
        groupDivWidth="50px"
        rectangleDivWidth="39.4%"
        rectangleDivRight="60.6%"
        skillLabelHeight="99.34%"
        skillLabelBottom="0.66%"
        skillLabelWidth="98%"
        skillLabelRight="1%"
        skillLabelLeft="1%"
      />
      <GroupComponent3
        labelText="JavaScript"
        groupDivPosition="absolute"
        groupDivTop="154.7px"
        groupDivLeft="102px"
        groupDivWidth="63px"
        rectangleDivWidth="39.37%"
        rectangleDivRight="60.63%"
        skillLabelHeight="99.34%"
        skillLabelBottom="0.66%"
        skillLabelWidth="98.41%"
        skillLabelRight="0.79%"
        skillLabelLeft="0.79%"
      />
      <GroupComponent3
        labelText="JavaScript"
        groupDivPosition="absolute"
        groupDivTop="222px"
        groupDivLeft="19px"
        groupDivWidth="63px"
        rectangleDivWidth="39.37%"
        rectangleDivRight="60.63%"
        skillLabelHeight="99.34%"
        skillLabelBottom="0.66%"
        skillLabelWidth="98.41%"
        skillLabelRight="0.79%"
        skillLabelLeft="0.79%"
      />
      <GroupComponent3
        labelText="MySQL"
        groupDivPosition="absolute"
        groupDivTop="222px"
        groupDivLeft="94px"
        groupDivWidth="41px"
        rectangleDivWidth="39.51%"
        rectangleDivRight="60.49%"
        skillLabelHeight="99.34%"
        skillLabelBottom="0.66%"
        skillLabelWidth="100%"
        skillLabelRight="0%"
        skillLabelLeft="0%"
      />
      <GroupComponent3
        labelText="CSS"
        groupDivPosition="absolute"
        groupDivTop="154.7px"
        groupDivLeft="63px"
        groupDivWidth="27px"
        rectangleDivWidth="39.26%"
        rectangleDivRight="60.74%"
        skillLabelHeight="99.34%"
        skillLabelBottom="0.66%"
        skillLabelWidth="103.7%"
        skillLabelRight="-1.85%"
        skillLabelLeft="-1.85%"
      />
    </div>
  );
};

export default SkillsTools;
