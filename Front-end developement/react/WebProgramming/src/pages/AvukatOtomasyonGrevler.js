import CaseItemComponent from "../components/CaseItemComponent";
import styles from "./AvukatOtomasyonGrevler.module.css";

import MainHeader from "../components/MainHeader";
import MainSideBar from "../components/MainSideBar";
const AvukatOtomasyonGrevler = () => {
  return (
    <div className={styles.avukatOtomasyonGrevler}>
      <MainHeader />
      <main className={styles.content}>
        <MainSideBar />
        <section className={styles.mainContent}>
          <div className={styles.taskHeader}>
            <div className={styles.taskTitle}>
              <b className={styles.grevler}>Görevler</b>
            </div>

            <CaseItemComponent
              davaBal="Görevler Başlığı"
              propFlex="unset"
              propMinWidth="unset"
              propPadding="var(--padding-smi-5) 0px 0px"
              propFlex1="unset"
              propMinWidth1="unset"
              propHeight="39px"
              propDisplay="flex"
              propFontSize="24px"
              propHeight1="29px"
              propDisplay1="flex"
            />
            <CaseItemComponent
              davaBal="Görevler Başlığı"
              propFlex="unset"
              propMinWidth="unset"
              propPadding="var(--padding-smi-5) 0px 0px"
              propFlex1="unset"
              propMinWidth1="unset"
              propHeight="39px"
              propDisplay="flex"
              propFontSize="24px"
              propHeight1="29px"
              propDisplay1="flex"
            />
            <CaseItemComponent
              davaBal="Görevler Başlığı"
              propFlex="unset"
              propMinWidth="unset"
              propPadding="var(--padding-smi-5) 0px 0px"
              propFlex1="unset"
              propMinWidth1="unset"
              propHeight="39px"
              propDisplay="flex"
              propFontSize="24px"
              propHeight1="29px"
              propDisplay1="flex"
            />
            <CaseItemComponent
              davaBal="Görevler Başlığı"
              propFlex="unset"
              propMinWidth="unset"
              propPadding="var(--padding-smi-5) 0px 0px"
              propFlex1="unset"
              propMinWidth1="unset"
              propHeight="39px"
              propDisplay="flex"
              propFontSize="24px"
              propHeight1="29px"
              propDisplay1="flex"
            />
            <CaseItemComponent
              davaBal="Görevler Başlığı"
              propFlex="unset"
              propMinWidth="unset"
              propPadding="var(--padding-smi-5) 0px 0px"
              propFlex1="unset"
              propMinWidth1="unset"
              propHeight="39px"
              propDisplay="flex"
              propFontSize="24px"
              propHeight1="29px"
              propDisplay1="flex"
            />
            <CaseItemComponent
              davaBal="Görevler Başlığı"
              propFlex="unset"
              propMinWidth="unset"
              propPadding="var(--padding-smi-5) 0px 0px"
              propFlex1="unset"
              propMinWidth1="unset"
              propHeight="39px"
              propDisplay="flex"
              propFontSize="24px"
              propHeight1="29px"
              propDisplay1="flex"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AvukatOtomasyonGrevler;
