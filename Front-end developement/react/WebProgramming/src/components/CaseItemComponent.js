import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CaseItemComponent.module.css";

const CaseItemComponent = ({
  className = "",
  davaBal,
  propFlex,
  propMinWidth,
  propPadding,
  propFlex1,
  propMinWidth1,
  propHeight,
  propDisplay,
  propFontSize,
  propHeight1,
  propDisplay1,
}) => {
  const caseListStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const caseItemsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const caseItemContentStyle = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth1,
    };
  }, [propFlex1, propMinWidth1]);

  const davaBalStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
      fontSize: propFontSize,
    };
  }, [propHeight, propDisplay, propFontSize]);

  const grevlerGrevlerGrevlerGrevlStyle = useMemo(() => {
    return {
      height: propHeight1,
      display: propDisplay1,
    };
  }, [propHeight1, propDisplay1]);

  return (
    <div
      className={[styles.caseList, className].join(" ")}
      style={caseListStyle}
    >
      <div className={styles.caseItems} style={caseItemsStyle}>
        <div className={styles.caseItemBackground} />
      </div>
      <div className={styles.caseItemContent} style={caseItemContentStyle}>
        <b className={styles.davaBal} style={davaBalStyle}>
          {davaBal}
        </b>
        <div
          className={styles.grevlergrevlergrevlergrevl}
          style={grevlerGrevlerGrevlerGrevlStyle}
        >
          GörevlerGörevlerGörevlerGörevlerGörevlerGörevler
        </div>
      </div>
    </div>
  );
};

CaseItemComponent.propTypes = {
  className: PropTypes.string,
  davaBal: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propFontSize: PropTypes.any,
  propHeight1: PropTypes.any,
  propDisplay1: PropTypes.any,
};

export default CaseItemComponent;
