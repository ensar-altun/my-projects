import PropTypes from "prop-types";
import styles from "./ButtonVariant1.module.css";

const ButtonVariant1 = ({ className = "" }) => {
  return (
    <div className={[styles.buttonvariant3, className].join(" ")}>
      <button className={styles.addBackground} id="createCaseButton" />
      <img
        className={styles.plus1Icon}
        loading="lazy"
        alt=""
        src="/plus-1@2x.png"
      />
      <div className={styles.addLabel}>
        <a className={styles.davaOlutur}>Dava Oluştur</a>
      </div>
    </div>
  );
};

ButtonVariant1.propTypes = {
  className: PropTypes.string,
};

export default ButtonVariant1;
