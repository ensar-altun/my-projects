import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./ButtonVariant.module.css";

const ButtonVariant = ({
  className = "",
  propAlignSelf,
  propPadding,
  propGap,
  propWidth,
  propHeight,
  propBorder,
  propPadding1,
  propMinHeight,
  propHeight1,
  propWidth1,
  propMinWidth,
  propWidth2,
  propHeight2,
}) => {
  const buttonVariant3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      gap: propGap,
      width: propWidth,
      height: propHeight,
    };
  }, [propAlignSelf, propPadding, propGap, propWidth, propHeight]);

  const plusBackgroundStyle = useMemo(() => {
    return {
      border: propBorder,
      padding: propPadding1,
    };
  }, [propBorder, propPadding1]);

  const plus1IconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth1,
    };
  }, [propHeight1, propWidth1]);

  const davaOluturStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: propWidth2,
      height: propHeight2,
    };
  }, [propMinWidth, propWidth2, propHeight2]);

  return (
    <div
      className={[styles.buttonvariant3, className].join(" ")}
      style={buttonVariant3Style}
    >
      <div className={styles.plusBackground} style={plusBackgroundStyle} />
      <img
        className={styles.plus1Icon}
        loading="lazy"
        alt=""
        src="/plus-1@2x.png"
        style={plus1IconStyle}
      />
      <div className={styles.davaOluturWrapper} style={frameDivStyle}>
        <a className={styles.davaOlutur} style={davaOluturStyle}>
          Dava Oluştur
        </a>
      </div>
    </div>
  );
};

ButtonVariant.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propBorder: PropTypes.any,
  propPadding1: PropTypes.any,
  propMinHeight: PropTypes.any,
  propHeight1: PropTypes.any,
  propWidth1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth2: PropTypes.any,
  propHeight2: PropTypes.any,
};

export default ButtonVariant;
