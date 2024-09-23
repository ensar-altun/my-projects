import PropTypes from "prop-types";
import styles from "./FooterComponent.module.css";

const FooterComponent = ({ className = "" }) => {
  return (
    <section className={[styles.landingPageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <section className={styles.frameWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <h1 className={styles.ksacaIrketimiz}>Kısaca Şirketimiz</h1>
              <p className={styles.loremIpsumDolorContainer}>
                <span className={styles.loremIpsumDolorContainer1}>
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
          </section>
          <div className={styles.rght}>
            <div className={styles.rghtChild} />
            <div className={styles.aboutImageContainerWrapper}>
              <div className={styles.aboutImageContainer}>
                <div className={styles.whatLawProfessionalsShouldWrapper}>
                  <img
                    className={styles.whatLawProfessionalsShouldIcon}
                    loading="lazy"
                    alt=""
                    src="/whatlawprofessionalsshouldlookforinlegalconsultancyfirms-1@2x.png"
                  />
                </div>
                <img
                  className={styles.placeholderRectIcon}
                  loading="lazy"
                  alt=""
                  src="/3-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.aboutImageRectParent}>
              <img
                className={styles.aboutImageRect}
                loading="lazy"
                alt=""
                src="/2-1@2x.png"
              />
              <div className={styles.aboutImageRectWrapper}>
                <img
                  className={styles.aboutImageRect1}
                  loading="lazy"
                  alt=""
                  src="/4-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hedingParent}>
          <div className={styles.heding}>
            <h1 className={styles.ekibimiz}>Ekibimiz</h1>
            <p className={styles.loremIpsumDolorContainer2}>
              <span>
                <span className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut
                </span>
                <span className={styles.laboreEtDolore1}>
                  labore et dolore magna aliquyam erat, sed diam voluptua.
                </span>
              </span>
            </p>
          </div>
          <div className={styles.backgroundParent}>
            <div className={styles.background} />
            <div className={styles.ekipcontainer}>
              <div className={styles.ekiprow1}>
                <div className={styles.ekipcard1}>
                  <img
                    className={styles.memberImageIcon}
                    loading="lazy"
                    alt=""
                    src="/1520195567524-1@2x.png"
                  />
                  <h3 className={styles.saulGoodman}>Saul goodman</h3>
                  <div className={styles.sueemNow}>Sue’em now</div>
                </div>
                <div className={styles.ekipcard2}>
                  <img
                    className={styles.images11}
                    loading="lazy"
                    alt=""
                    src="/images-1-1@2x.png"
                  />
                  <b className={styles.ticaretHukuku}>Kim Wexler</b>
                  <p className={styles.testtesttesttesttesttesttestte}>
                    testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                  </p>
                </div>
                <div className={styles.ekipcard3}>
                  <img
                    className={styles.chuckMcgillInfobox1Icon}
                    loading="lazy"
                    alt=""
                    src="/chuck-mcgill-infobox-1@2x.png"
                  />
                  <h3 className={styles.yalKurtChuck}>Yaşlı Kurt Chuck</h3>
                  <p className={styles.hukukundaIiIverenIlikis}>
                    İş hukukunda işçi-işveren ilişkisinden kaynaklanan
                    ihtilaflar kapsamında; şirketlerin insan kaynakları
                    biriminin oluşturulmasını sağlarız...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FooterComponent.propTypes = {
  className: PropTypes.string,
};

export default FooterComponent;
