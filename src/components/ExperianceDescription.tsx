import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ExperianceDescription.module.css";

export type ExperianceDescriptionType = {
  designClientRequirementsB?: string;

  /** Style props */
  frameDivPosition?: CSSProperties["position"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
  frameDivHeight?: CSSProperties["height"];
};

const ExperianceDescription: FunctionComponent<ExperianceDescriptionType> = ({
  designClientRequirementsB,
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
  frameDivHeight,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
      height: frameDivHeight,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft, frameDivHeight]);

  return (
    <div className={styles.ellipseParent} style={frameDivStyle}>
      <div className={styles.componentChild} />
      <div className={styles.designClientRequirements}>
        {designClientRequirementsB}
      </div>
    </div>
  );
};

export default ExperianceDescription;
