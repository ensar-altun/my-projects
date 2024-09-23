import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/avukat-otomasyon-anasayfa");
  }, [navigate]);

  const onRegisterButtonClick = useCallback(() => {
    navigate("/avukat-otomasyon-anasayfa");
  }, [navigate]);

  return (
    <div className={styles.loginpage}>
      <div className={styles.sectionLogoWrapper}>
        <img
          className={styles.sectionLogoIcon}
          loading="lazy"
          alt=""
          src="/section-logo@2x.png"
        />
      </div>
      <div className={styles.authContainer}>
        <div className={styles.kullancAd}>Kullanıcı Adı:</div>
        <input
          className={styles.credentials}
          name="usernameField"
          type="text"
        />
        <div className={styles.ifre}>Şifre</div>
        <input
          className={styles.credentials1}
          name="passwordInput"
          type="password"
        />
        <div className={styles.buttoncontainer}>
          <Button
            className={styles.loginbutton}
            name="LoginButton"
            variant="primary"
            onClick={onLoginButtonClick}
          >
            Giriş
          </Button>
          <Button
            className={styles.registerbutton}
            name="RegisterButton"
            variant="primary"
            onClick={onRegisterButtonClick}
          >
            Kayıt Ol
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
