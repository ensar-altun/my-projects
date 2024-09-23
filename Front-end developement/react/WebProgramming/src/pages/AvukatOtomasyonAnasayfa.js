import MainHeader from "../components/MainHeader";
import MainSideBar from "../components/MainSideBar";
import styles from "./AvukatOtomasyonAnasayfa.module.css";
import CaseItemComponent from "../components/CaseItemComponent";

const AvukatOtomasyonAnasayfa = () => {
  return (
    <div className={styles.avukatOtomasyonAnasayfa}>
      <MainHeader />
      <main className={styles.content}>
        <MainSideBar />
        <div className={styles.workspace}>
          <div className={styles.takvim}>
            <div className={styles.takvimChild} />
            <div className={styles.calendarGrid}>
              <div className={styles.takvim1}>
                <div className={styles.monthHeader}>
                  <div className={styles.daysvariant3}>
                    <div className={styles.monthBackground} />
                    <b className={styles.ocak}>Ocak</b>
                  </div>
                </div>
                <div className={styles.weekDays}>
                  <div className={styles.weekDays1}>
                    <div className={styles.weekDaysRow}>
                      <div className={styles.daysvariant31}>
                        <div className={styles.daysvariant3Child} />
                        <b className={styles.pzt}>Pzt</b>
                      </div>
                      <div className={styles.daysvariant32}>
                        <div className={styles.daysvariant3Item} />
                        <b className={styles.days}>1</b>
                      </div>
                    </div>
                    <div className={styles.daysvariant33}>
                      <div className={styles.daysvariant3Inner} />
                      <b className={styles.sal}>Sal</b>
                      <div className={styles.daysvariant34}>
                        <div className={styles.rectangleDiv} />
                        <b className={styles.days1}>2</b>
                      </div>
                    </div>
                    <div className={styles.daysvariant35}>
                      <div className={styles.daysvariant3Child1} />
                      <b className={styles.ar}>Çar</b>
                      <div className={styles.daysvariant36}>
                        <div className={styles.daysvariant3Child2} />
                        <b className={styles.b}>3</b>
                      </div>
                    </div>
                    <div className={styles.friday}>
                      <div className={styles.daysvariant37}>
                        <div className={styles.daysvariant3Child3} />
                        <b className={styles.per}>Per</b>
                        <div className={styles.daysvariant38}>
                          <div className={styles.daysvariant3Child4} />
                          <b className={styles.b1}>4</b>
                        </div>
                      </div>
                      <div className={styles.daysvariant39}>
                        <div className={styles.daysvariant3Child5} />
                        <b className={styles.b2}>1</b>
                      </div>
                    </div>
                    <div className={styles.weekDaysRow1}>
                      <div className={styles.daysvariant310}>
                        <div className={styles.daysvariant3Child6} />
                        <b className={styles.cum}>Cum</b>
                      </div>
                      <div className={styles.daysvariant311}>
                        <div className={styles.daysvariant3Child7} />
                        <b className={styles.b3}>5</b>
                      </div>
                    </div>
                    <div className={styles.weekDaysRow2}>
                      <div className={styles.daysvariant312}>
                        <div className={styles.daysvariant3Child8} />
                        <b className={styles.cmts}>Cmts</b>
                      </div>
                      <div className={styles.daysvariant313}>
                        <div className={styles.daysvariant3Child9} />
                        <b className={styles.b4}>6</b>
                      </div>
                    </div>
                    <div className={styles.weekDaysRow3}>
                      <div className={styles.daysvariant314}>
                        <div className={styles.daysvariant3Child10} />
                        <b className={styles.paz}>Paz</b>
                      </div>
                      <div className={styles.daysvariant315}>
                        <div className={styles.daysvariant3Child11} />
                        <b className={styles.b5}>7</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.weekOne}>
                    <div className={styles.weekTwo}>
                      <div className={styles.weekThree}>
                        <div className={styles.daysvariant316}>
                          <div className={styles.dayCells} />
                          <b className={styles.dateCellsTwo}>8</b>
                        </div>
                        <div className={styles.weekFour}>
                          <div className={styles.daysvariant317}>
                            <div className={styles.dayCellsFour} />
                            <b className={styles.dateLabelsFour}>9</b>
                          </div>
                        </div>
                      </div>
                      <div className={styles.daysvariant318}>
                        <div className={styles.dayCellsSix} />
                        <b className={styles.dateCellsSeven}>10</b>
                      </div>
                      <div className={styles.weekSix}>
                        <div className={styles.daysvariant319}>
                          <div className={styles.dayCellsEight} />
                          <b className={styles.dateLabelsEight}>1</b>
                        </div>
                        <div className={styles.weekSeven}>
                          <div className={styles.daysvariant320}>
                            <div className={styles.dayCellsNine} />
                            <b className={styles.dateLabelsNine}>11</b>
                          </div>
                        </div>
                      </div>
                      <div className={styles.daysvariant321}>
                        <div className={styles.dayCellsTen} />
                        <b className={styles.dateLabelsTen}>12</b>
                      </div>
                      <div className={styles.daysvariant322}>
                        <div className={styles.dayCellsEleven} />
                        <b className={styles.dateLabelsEleven}>13</b>
                      </div>
                      <div className={styles.daysvariant323}>
                        <div className={styles.dayCellsTwelve} />
                        <b className={styles.dateLabelsTwelve}>14</b>
                      </div>
                    </div>
                    <div className={styles.weekEight}>
                      <div className={styles.daysThirteen}>
                        <div className={styles.daysvariant324}>
                          <div className={styles.dateCellThirteen} />
                          <b className={styles.dateLabelThirteen}>15</b>
                        </div>
                        <div className={styles.weekNine}>
                          <div className={styles.daysvariant325}>
                            <div className={styles.dayCellsFourteen} />
                            <b className={styles.dateLabelsFourteen}>16</b>
                          </div>
                        </div>
                      </div>
                      <div className={styles.daysvariant326}>
                        <div className={styles.dayCellsFifteen} />
                        <b className={styles.dateCellsSixteen}>17</b>
                      </div>
                      <div className={styles.weekTen}>
                        <div className={styles.days2}>
                          <div className={styles.dayCellsSeventeen} />
                          <b className={styles.dateLabelsSeventeen}>18</b>
                        </div>
                        <div className={styles.daysvariant327}>
                          <div className={styles.dayCellsEighteen} />
                          <b className={styles.dateLabelsEighteen}>1</b>
                        </div>
                      </div>
                      <div className={styles.daysvariant328}>
                        <div className={styles.dayCellsNineteen} />
                        <b className={styles.dateLabelsNineteen}>19</b>
                      </div>
                      <div className={styles.daysvariant329}>
                        <div className={styles.dayCellsTwenty} />
                        <b className={styles.dateLabelsTwenty}>20</b>
                      </div>
                      <div className={styles.daysvariant330}>
                        <div className={styles.dayCellsTwentyOne} />
                        <b className={styles.dateLabelsTwenty1}>21</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.weekOne1}>
                    <div className={styles.frameParent}>
                      <div className={styles.frameGroup}>
                        <div className={styles.daysvariant3Parent}>
                          <div className={styles.daysvariant331}>
                            <div className={styles.dateCell} />
                            <b className={styles.dateLabel}>22</b>
                          </div>
                          <div className={styles.daysvariant332}>
                            <div className={styles.dateCellTwo} />
                            <b className={styles.dateLabelTwo}>23</b>
                          </div>
                        </div>
                        <div className={styles.daysvariant3Group}>
                          <div className={styles.daysvariant333}>
                            <div className={styles.daysvariant3Child12} />
                            <b className={styles.b6}>29</b>
                          </div>
                          <div className={styles.weekFive}>
                            <div className={styles.daysvariant334}>
                              <div className={styles.dayCellsFive} />
                              <b className={styles.dateLabelsFive}>30</b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.daysvariant3Container}>
                        <div className={styles.daysvariant335}>
                          <div className={styles.dateCellSix} />
                          <b className={styles.dateLabelSix}>24</b>
                        </div>
                        <div className={styles.daysvariant336}>
                          <div className={styles.dateCellSeven} />
                          <b className={styles.dateLabelSeven}>31</b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameDiv}>
                      <div className={styles.daysvariant337}>
                        <div className={styles.daysvariant3Child13} />
                        <b className={styles.b7}>1</b>
                      </div>
                      <div className={styles.daysvariant3Wrapper}>
                        <div className={styles.daysvariant338}>
                          <div className={styles.dateCellFifteen} />
                          <b className={styles.dateLabelFifteen}>25</b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.daysvariant339}>
                      <div className={styles.daysvariant3Child14} />
                      <b className={styles.day}>26</b>
                    </div>
                    <div className={styles.daysvariant340}>
                      <div className={styles.daysvariant3Child15} />
                      <b className={styles.day1}>27</b>
                    </div>
                    <div className={styles.daysvariant341}>
                      <div className={styles.daysvariant3Child16} />
                      <b className={styles.day2}>28</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.dateContainer}>
                <div className={styles.days3}>
                  <div className={styles.daysChild} />
                  <b className={styles.b8}>1</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.calendarContainer}>
          <div className={styles.tasksAndCases}>
            <div className={styles.grevler}>
              <div className={styles.tasksTitle}>
                <b className={styles.grevler1}>Görevler</b>
              </div>
              <CaseItemComponent davaBal="Gorev Basligi" />
              <CaseItemComponent davaBal="Gorev Basligi" />
              <CaseItemComponent davaBal="Gorev Basligi" />
            </div>
            <div className={styles.davalar}>
              <div className={styles.casesTitleContainer}>
                <div className={styles.casesInnerContainer}>
                  <b className={styles.davalar1}>Davalar</b>
                </div>
              </div>
              <CaseItemComponent davaBal="Dava Başlığı" />
              <CaseItemComponent davaBal="Dava Başlığı" />
              <CaseItemComponent davaBal="Dava Başlığı" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AvukatOtomasyonAnasayfa;
