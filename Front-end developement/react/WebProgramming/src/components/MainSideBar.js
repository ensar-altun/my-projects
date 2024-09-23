import PropTypes from "prop-types";
import styles from "./MainSideBar.module.css";
import { Link } from "react-router-dom";

const MainSideBar = ({ className = "" }) => {
  return (
    <div className={[styles.main, className].join(" ")}>
      <div className={styles.sde}>
        <div className={styles.container}>
          <Link to="/avukat-otomasyon-anasayfa" className={styles.text4} style={{ color: "inherit", textDecoration: "none" }}>
            <button className={styles.anasayfaButton} id="anasayfaButton">
              <img className={styles.home1Icon} alt="" src="/home-1@2x.png" />
              <a className={styles.anasayfa}>Anasayfa</a>
            </button>
          </Link>

          <Link to="/avukat-otomasyon-davalar" className={styles.text4} style={{ color: "inherit", textDecoration: "none" }}>
            <button className={styles.davalarButton} id="davalarButton">
              <img className={styles.home1Icon1} alt="" src="/home-1@2x.png" />
              <a className={styles.davalar}>Davalar</a>
            </button>
          </Link>

          <Link to="/avukat-otomasyon-grevler" className={styles.text4} style={{ color: "inherit", textDecoration: "none" }}>
            <button className={styles.dosyalarButton} id="dosyalarButton">
              <img className={styles.home1Icon2} alt="" src="/home-1@2x.png" />
              <b className={styles.dosyolar}>Görevler</b>
            </button>
          </Link>

          <Link to="/avukat-otomasyon-gorev-olusturma" className={styles.text4} style={{ color: "inherit", textDecoration: "none" }}>
            <button className={styles.mvekillerButton} id="müvekkillerButton">
              <img
                className={styles.home1Icon3}
                loading="lazy"
                alt=""
                src="/home-1@2x.png"
              />
              <b className={styles.mvekkiller}>Görev Oluştur</b>
            </button>
          </Link>
          <button className={styles.kButton} id="çıkışButton">
            <img className={styles.home1Icon4} alt="" src="/home-1@2x.png" />
            <b className={styles.k}>Çıkış</b>
          </button>
        </div>
      </div>
    </div>
  );
};

MainSideBar.propTypes = {
  className: PropTypes.string,
};

export default MainSideBar;
