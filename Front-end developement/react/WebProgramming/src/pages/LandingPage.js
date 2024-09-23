import NavigationComponent from "../components/LandingPageNavigationComponent";
import FooterComponent from "../components/FooterComponent";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <section className={styles.landingPageInner}>
        <div className={styles.navigationParent}>
          <NavigationComponent />
          <div className={styles.welcomesection}>
            <img
              className={styles.sectionBackgroundIcon}
              alt=""
              src="/section-background.svg"
            />
            <img
              className={styles.rigtSectionIcon}
              loading="lazy"
              alt=""
              src="/rigt-section.svg"
            />
            <div className={styles.leftSection}>
              <div className={styles.groupBackground} />
              <h1 className={styles.herkesInAdalet}>Herkes İçin Adalet</h1>
              <div className={styles.leftSectionInner}>
                <div className={styles.frameParent}>
                  <div className={styles.welcomeContentRectParent}>
                    <div className={styles.welcomeContentRect} />
                    <p className={styles.uzmanKadromuzBlaContainer}>
                      <span>
                        <span className={styles.uzmanKadromuzBla}>
                          UZMAN KADROMUZ BLA BLA BAL BLA BLA BLA BLA LBA LBA
                        </span>
                        <span className={styles.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa}>
                          {" "}
                          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                        </span>
                        <span
                          className={styles.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1}
                        >
                          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </span>
                        <span
                          className={styles.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2}
                        >
                          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <div className={styles.button}>
                      <div className={styles.welcomeButtonRect} />
                      <b className={styles.button1}>Müşretimiz Olun</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.lineParent}>
        <div className={styles.frameChild} />
        <section className={styles.customerlogosection}>
          <img
            className={styles.customerlogo1Icon}
            alt=""
            src="/customerlogo1@2x.png"
          />
          <img
            className={styles.custoemrlogo2Icon}
            alt=""
            src="/custoemrlogo2@2x.png"
          />
          <img
            className={styles.customerlogo3Icon}
            alt=""
            src="/customerlogo3@2x.png"
          />
          <img
            className={styles.customerlogo4Icon}
            alt=""
            src="/customerlogo4@2x.png"
          />
        </section>
      </section>
      <section className={styles.landingPageChild}>
        <div className={styles.hedingParent}>
          <div className={styles.heding}>
            <div className={styles.hedingChild} />
            <b className={styles.hizmetlerimiz}>Hizmetlerimiz</b>
            <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
              <p className={styles.loremIpsumDolorContainer}>
                <span>
                  <span className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut
                  </span>
                  <span className={styles.laboreEtDolore}>
                    labore et dolore magna aliquyam erat, sed diam voluptua.
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className={styles.testimonialSlider}>
            <div className={styles.background} />
            <div className={styles.hizmetlercontainer}>
              <div className={styles.hizmetlercard11}>
                <img
                  className={styles.family1Icon}
                  loading="lazy"
                  alt=""
                  src="/family-1@2x.png"
                />
                <b className={styles.aileHukuku}>Aile Hukuku</b>
                <p className={styles.aileHukukuToplumu}>
                  Aile Hukuku toplumu oluşturan bireylerin kurdukları aile
                  birliğinin sağlıklı ve mutlu bir şekilde devamı için
                  kurulmuştur. Kimse, kurduğu...
                </p>
              </div>
              <div className={styles.hizmetlercard12}>
                <img
                  className={styles.trading1Icon}
                  loading="lazy"
                  alt=""
                  src="/trading-1@2x.png"
                />
                <b className={styles.ticaretHukuku}>Ticaret Hukuku</b>
                <p className={styles.trkiyedeVeYurt}>
                  Türkiye’de ve yurt dışında iş ve yatırım yapan
                  müvekkillerimize yüksek kalitede hukuki hizmet sunarız. Yoğun
                  olarak hukuki destek verdiğimiz...
                </p>
              </div>
              <div className={styles.hizmetlercard13}>
                <img
                  className={styles.employees1Icon}
                  loading="lazy"
                  alt=""
                  src="/employees-1@2x.png"
                />
                <b className={styles.hukuku}>İş Hukuku</b>
                <p className={styles.hukukundaIiIverenIlikis}>
                  İş hukukunda işçi-işveren ilişkisinden kaynaklanan ihtilaflar
                  kapsamında; şirketlerin insan kaynakları biriminin
                  oluşturulmasını sağlarız...
                </p>
              </div>
              <div className={styles.hizmetlercard21}>
                <img
                  className={styles.goverment1Icon}
                  loading="lazy"
                  alt=""
                  src="/goverment-1@2x.png"
                />
                <b className={styles.dareHukuku}>İdare Hukuku</b>
                <p className={styles.uygulamaEsnasndaVatandan}>
                  Uygulama esnasında vatandaşın mağduriyetine neden olan hukuka
                  aykırı İdari eylem ve işlemlere sıklıkla rastlamaktayız.
                  İdare, kanuna bağlı kalmak...
                </p>
              </div>
              <div className={styles.hizmetlercard22}>
                <img
                  className={styles.house1Icon}
                  loading="lazy"
                  alt=""
                  src="/house-1@2x.png"
                />
                <b className={styles.gayrimenkulHukuku}>Gayrimenkul Hukuku</b>
                <p className={styles.tanmazMallarnAlm}>
                  Taşınmaz malların alım ve satımı, gayrimenkul finansmanı,
                  intifa, irtifak, ipotek gibi ayni hakların tesis ve terkini
                  gibi gayrimenkul hukukunun...
                </p>
              </div>
              <div className={styles.hizmetlercard23}>
                <img
                  className={styles.checklist1Icon}
                  loading="lazy"
                  alt=""
                  src="/checklist-1@2x.png"
                />
                <b className={styles.mirasHukuku}>Miras Hukuku</b>
                <p className={styles.mirasHukukuKiinin}>
                  Miras Hukuku, kişinin ölümü ile uygulama alanı bulan ve özel
                  hukuk ilişkilerini içine alan bir kurallar bütünü olup,
                  murisin mirasçılarına...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
      <section className={styles.footerWrapper}>
        <footer className={styles.footer}>
          <div className={styles.footerChild} />
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
        </footer>
      </section>
    </div>
  );
};

export default LandingPage;
