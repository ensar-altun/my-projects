import ButtonVariant1 from "./ButtonVariant1";
import PropTypes from "prop-types";
import styles from "./MainHeader.module.css";

const MainHeader = ({ className = "" }) => {
  return (
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.navbarChild} />
      <div className={styles.logoWrapper}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
      </div>
      <div className={styles.actions}>
        <div className={styles.addCase}>
          <ButtonVariant1 />
        </div>
        <div className={styles.user} />
      </div>
    </header>
  );
};

MainHeader.propTypes = {
  className: PropTypes.string,
};

export default MainHeader;
