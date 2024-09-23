import MainHeader from "../components/MainHeader";
import CaseItemComponent from "../components/CaseItemComponent";
import styles from "./AvukatOtomasyonDavalar.module.css";
import MainSideBar from "../components/MainSideBar";

const AvukatOtomasyonDavalar = () => {
  return (
    <div className={styles.avukatOtomasyonDavalar}>
      <MainHeader />
      <main className={styles.content}>
        <MainSideBar />
        <section className={styles.contentHeaderWrapper}>
          <div className={styles.contentHeader}>
            <div className={styles.davalarWrapper}>
              <h2 className={styles.davalar}>Davalar</h2>
            </div>
            <div className={styles.contentBody}>
              <CaseItemComponent davaBal="Dava Başlığı" />
              <CaseItemComponent
                davaBal="Dava Başlığı"
                propFlex="unset"
                propMinWidth="unset"
                propPadding="var(--padding-smi-5) 0px 0px"
                propFlex1="unset"
                propMinWidth1="unset"
                propHeight="unset"
                propDisplay="unset"
                propFontSize="24px"
                propHeight1="unset"
                propDisplay1="unset"
              />
              <CaseItemComponent
                davaBal="Dava Başlığı"
                propFlex="unset"
                propMinWidth="unset"
                propPadding="var(--padding-smi-5) 0px 0px"
                propFlex1="unset"
                propMinWidth1="unset"
                propHeight="unset"
                propDisplay="unset"
                propFontSize="24px"
                propHeight1="unset"
                propDisplay1="unset"
              />
              <CaseItemComponent
                davaBal="Dava Başlığı"
                propFlex="unset"
                propMinWidth="unset"
                propPadding="var(--padding-smi-5) 0px 0px"
                propFlex1="unset"
                propMinWidth1="unset"
                propHeight="unset"
                propDisplay="unset"
                propFontSize="24px"
                propHeight1="unset"
                propDisplay1="unset"
              />
              <CaseItemComponent
                davaBal="Dava Başlığı"
                propFlex="unset"
                propMinWidth="unset"
                propPadding="var(--padding-smi-5) 0px 0px"
                propFlex1="unset"
                propMinWidth1="unset"
                propHeight="unset"
                propDisplay="unset"
                propFontSize="24px"
                propHeight1="unset"
                propDisplay1="unset"
              />
              <CaseItemComponent
                davaBal="Dava Başlığı"
                propFlex="unset"
                propMinWidth="unset"
                propPadding="var(--padding-smi-5) 0px 0px"
                propFlex1="unset"
                propMinWidth1="unset"
                propHeight="unset"
                propDisplay="unset"
                propFontSize="24px"
                propHeight1="unset"
                propDisplay1="unset"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AvukatOtomasyonDavalar;
