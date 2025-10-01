import {FunctionComponent, useMemo, type CSSProperties} from "react"
import styles from "./EducationSkill.module.css"

export type EducationSkillType = {
    c?: string

    /** Style props */
    frameDivPosition?: CSSProperties["position"]
    frameDivTop?: CSSProperties["top"]
    frameDivLeft?: CSSProperties["left"]
    cWidth?: CSSProperties["width"]
    cDisplay?: CSSProperties["display"]
    cHeight?: CSSProperties["height"]
}

const EducationSkill: FunctionComponent<EducationSkillType> = ({
    c,
    frameDivPosition,
    frameDivTop,
    frameDivLeft,
    cWidth,
    cDisplay,
    cHeight,
}) => {
    const frameDiv2Style: CSSProperties = useMemo(() => {
        return {
            position: frameDivPosition,
            top: frameDivTop,
            left: frameDivLeft,
        }
    }, [frameDivPosition, frameDivTop, frameDivLeft])

    const cStyle: CSSProperties = useMemo(() => {
        return {
            width: cWidth,
            display: cDisplay,
            height: cHeight,
        }
    }, [cWidth, cDisplay, cHeight])

    return (
        <div className={styles.cParent} style={frameDiv2Style}>
            <div className={styles.c} style={cStyle}>
                {c}
            </div>
        </div>
    )
}

export default EducationSkill
