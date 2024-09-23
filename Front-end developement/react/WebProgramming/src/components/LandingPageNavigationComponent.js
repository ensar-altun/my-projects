import PropTypes from "prop-types";
import styles from "./LandingPageNavigationComponent.module.css";
import { Link } from "react-router-dom";

const NavigationComponent = ({ className = "" }) => {

  return (
    <header className={[styles.navigation, className].join(" ")}>
      <div className={styles.navigationContainer} />
      <div className={styles.logoWrapper}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
      </div>
      <div className={styles.navLinkBoundingRectParent}>
        <div className={styles.navLinkBoundingRect} />
        <div className={styles.navigationLink}>
          <img className={styles.containerIcon} alt="" src="/container.svg" />
          <div className={styles.textWrapper}>
            <a className={styles.text}>Anasayfa</a>
          </div>
          <div className={styles.navigationLinkChild} />
        </div>
        <div className={styles.navigationLink1}>
          <img
            className={styles.containerIcon1}
            loading="lazy"
            alt=""
            src="/container.svg"
          />
          <a className={styles.text1}>Hizmetlerimiz</a>
        </div>
        <div className={styles.navigationLink2}>
          <img
            className={styles.containerIcon2}
            loading="lazy"
            alt=""
            src="/container.svg"
          />
          <a className={styles.text2}>Ekip</a>
        </div>
        <div className={styles.navigationLink3}>
          <img
            className={styles.containerIcon3}
            loading="lazy"
            alt=""
            src="/container.svg"
          />
          <a className={styles.text3}>İletişim</a>
        </div>
      </div>
      <div className={styles.loginLinkWrapper} style={{ cursor: 'pointer' }}>
        <div className={styles.loginLink}>
          <img className={styles.containerIcon4} alt="" src="/container.svg" />
          <Link to="/loginpage" className={styles.text4} style={{ color: "inherit", textDecoration: "none" }}>
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

NavigationComponent.propTypes = {
  className: PropTypes.string,
};

export default NavigationComponent;
