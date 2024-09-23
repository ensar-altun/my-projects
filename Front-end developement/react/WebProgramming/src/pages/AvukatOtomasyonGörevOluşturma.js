import styles from "./AvukatOtomasyonGörevOluşturma.module.css";
import MainHeader from "../components/MainHeader";
import MainSideBar from "../components/MainSideBar";

const AvukatOtomasyonGörevOluşturma = () => {
  return (
    <div className={styles.avukatOtomasyonGrev}>
      <MainHeader />
      <main className={styles.content}>
        <MainSideBar />
        <section className={styles.mainPanel}>
          <div className={styles.taskHeader}>
            <div className={styles.headerLabels}>
              <b className={styles.grevBal}>Görev Başlığı</b>
            </div>
            <div className={styles.headerLabels1}>
              <img className={styles.headerLabelsChild} loading="lazy" alt="" />
            </div>
            <div className={styles.taskDetails}>
              <div className={styles.taskInformation}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <b className={styles.oluturan}>Oluşturan:</b>
                  <div className={styles.attributeValues}>
                    <div className={styles.baturayTarafndan26}>
                      Baturay tarafından 26 Mayıs 2024
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <b className={styles.atanan}>Atanan</b>
                  <div className={styles.ahmetYlmazWrapper}>
                    <div className={styles.ahmetYlmaz}>Ahmet Yılmaz</div>
                  </div>
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameInner} />
                  <div className={styles.tamamlanmaTarihi}>
                    Tamamlanma Tarihi:
                  </div>
                  <div className={styles.mays2024Wrapper}>
                    <div className={styles.mays2024}>30 Mayıs 2024</div>
                  </div>
                </div>
                <div className={styles.groupDiv}>
                  <div className={styles.rectangleDiv} />
                  <b className={styles.not}>Not:</b>
                  <div className={styles.baturayTarafndan26Mays20Wrapper}>
                    <div className={styles.baturayTarafndan261}>
                      Baturay tarafından 26 Mayıs 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.headerLabels2}>
              <img className={styles.headerLabelsItem} loading="lazy" alt="" />
            </div>
            <div className={styles.headerLabels3}>
              <b className={styles.grevTanm}>Görev Tanımı</b>
            </div>
            <div className={styles.divider} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AvukatOtomasyonGörevOluşturma;
