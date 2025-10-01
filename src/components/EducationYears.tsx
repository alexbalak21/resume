import {FunctionComponent, useMemo, type CSSProperties} from "react"
import styles from "./EducationYears.module.css"

export type EducationYearsType = {
    prop?: string

    /** Style props */
    yrGraduatePosition?: CSSProperties["position"]
    yrGraduateTop?: CSSProperties["top"]
    yrGraduateLeft?: CSSProperties["left"]
}

const EducationYears: FunctionComponent<EducationYearsType> = ({
    prop,
    yrGraduatePosition,
    yrGraduateTop,
    yrGraduateLeft,
}) => {
    const yrGraduateStyle: CSSProperties = useMemo(() => {
        return {
            position: yrGraduatePosition,
            top: yrGraduateTop,
            left: yrGraduateLeft,
        }
    }, [yrGraduatePosition, yrGraduateTop, yrGraduateLeft])

    return (
        <div className={styles.yrGraduate} style={yrGraduateStyle}>
            <img
                className={styles.materialSymbolsdateRangeOuIcon}
                alt=""
                src="/materialsymbolsdaterangeoutlinerounded.svg"
            />
            <div className={styles.div}>{prop}</div>
        </div>
    )
}

export default EducationYears
