import "./style.css";
import { MdReplay } from "react-icons/md";

function App() {
  return (
    <div className="background">
      <div className="main-view">
        <div className="assembly">
          <div className="assembly-sidecollumn"></div>
          <div className="assembly-content overflow">
            <div className="title">
              <div className="assembly-toprow"></div>
              <h1>ASSEMBLY</h1>
            </div>
            <br/>
            <div className="mission entry">
              <span>MISSION:</span>
            </div>
            <br/>
            <div className="category">
                <h2>UNIT</h2>
                <div className="entry-container">
                  <div className="entry selectable">
                    <h3>R-ARM UNIT</h3>
                    <div className="row">
                      <span>PART NAME</span>
                      <div className="collumn">
                        <span className="weight-or-en">WEIGHT: 1000</span>
                        <span className="weight-or-en">EN LOAD: 1000</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-rando-button selectable">
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry selectable">
                    <h3>L-ARM UNIT</h3>
                    <div className="row">
                      <span>PART NAME</span>
                      <div className="collumn">
                        <span className="weight-or-en">WEIGHT: 1000</span>
                        <span className="weight-or-en">EN LOAD: 1000</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-rando-button selectable">
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry selectable">
                    <h3>R-BACK UNIT</h3>
                    <div className="row">
                      <span>PART NAME</span>
                      <div className="collumn">
                        <span className="weight-or-en">WEIGHT: 1000</span>
                        <span className="weight-or-en">EN LOAD: 1000</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-rando-button selectable">
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry selectable">
                    <h3>L-BACK UNIT</h3>
                    <div className="row">
                      <span>PART NAME</span>
                      <div className="collumn">
                        <span className="weight-or-en">WEIGHT: 1000</span>
                        <span className="weight-or-en">EN LOAD: 1000</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-rando-button selectable">
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
            </div>
            <br/>
            <div className="category">
                <h2>FRAME</h2>
                <div className="entry-container">
                  <div className="entry selectable">
                    <h3>HEAD</h3>
                    <div className="row">
                      <span>PART NAME</span>
                      <div className="collumn">
                        <span className="weight-or-en">WEIGHT: 1000</span>
                        <span className="weight-or-en">EN LOAD: 1000</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-rando-button selectable">
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry selectable">
                    <h3>CORE</h3>
                    <div className="row">
                      <span>PART NAME</span>
                      <div className="collumn">
                        <span className="weight-or-en">WEIGHT: 1000</span>
                        <span className="weight-or-en">EN LOAD: 1000</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-rando-button selectable">
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry selectable">
                    <h3>ARMS</h3>
                    <div className="row">
                      <span>PART NAME</span>
                      <div className="collumn">
                        <span className="weight-or-en">WEIGHT: 1000</span>
                        <span className="weight-or-en">EN LOAD: 1000</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-rando-button selectable">
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry selectable">
                    <h3>LEGS</h3>
                    <div className="row">
                      <span>PART NAME</span>
                      <div className="collumn">
                        <span className="weight-or-en">WEIGHT: 1000</span>
                        <span className="weight-or-en">EN LOAD: 1000</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-rando-button selectable">
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
            </div>
            <br/>
            <div className="category">
                <h2>INNER</h2>
                <div className="entry-container">
                  <div className="entry selectable">
                    <h3>BOOSTER</h3>
                    <div className="row">
                      <span>PART NAME</span>
                      <div className="collumn">
                        <span className="weight-or-en">WEIGHT: 1000</span>
                        <span className="weight-or-en">EN LOAD: 1000</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-rando-button selectable">
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry selectable">
                    <h3>FCS</h3>
                    <div className="row">
                      <span>PART NAME</span>
                      <div className="collumn">
                        <span className="weight-or-en">WEIGHT: 1000</span>
                        <span className="weight-or-en">EN LOAD: 1000</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-rando-button selectable">
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry selectable">
                    <h3>GENERATOR</h3>
                    <div className="row">
                      <span>PART NAME</span>
                      <div className="collumn">
                        <span className="weight-or-en">WEIGHT: 1000</span>
                        <span className="weight-or-en">EN LOAD: 1000</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-rando-button selectable">
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
            </div>
            <br/>
            <div className="category">
                <h2>EXPANSION</h2>
                <div className="entry-container">
                  <div className="entry selectable">
                    <h3>EXPANSION</h3>
                    <div className="row">
                      <span>PART NAME</span>
                      <div className="collumn">
                        <span className="weight-or-en">WEIGHT: 1000</span>
                        <span className="weight-or-en">EN LOAD: 1000</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-rando-button selectable">
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="collumn-2">
          <div className="randomizer-options">
            <div className="collumn-2-toprow"></div>
            <h1>RANDOMIZER</h1>
            <br/>
            <div className="category">
              <h2>RANDOMIZE</h2>
              <div className="entry-container">
                <div className="entry selectable">
                  <span>RANDOMIZE BUILD</span>
                </div>
                <div className="entry selectable">
                  <span>RANDOMIZE MISSION</span>
                </div>
              </div>
            </div>
            <br/>
            <div className="category">
              <h2>OPTIONS</h2>
              <div className="option">
                <input type="checkbox" id="no-overweight"/>
                <span>DISABLE OVERWEIGHT</span>
              </div>
              <div className="option">
                <input type="checkbox" id="no-weapon"/>
                <span>INCLUDES "NOTHING" IN WEAPON ROTATION</span>
              </div>
              <div className="option">
                <input type="checkbox" id="arena"/>
                <span>INCLUDES ARENA IN MISSION ROTATION</span>
              </div>
            </div>
            <br/>
            <div className="category">
              <h2>PARTS UNLOCKED</h2>
              <br/>
              <div className="unlocked-table">
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MA-J-200</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>LR-036</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>LR-037</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>RF-024</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>RF-025</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MA-J-201</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MG-014</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>DF-MG-02</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>WR-0555</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MA-E-210</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>DF-GA-08</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>SG-026</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>SG-027</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>WR-0777</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>HG-003</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>HG-004</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MA-E-211</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>EL-PW-00</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>VP-66EG</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>DF-BA-06</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MAJESTIC</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>LITTLE GEM</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>44-141</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>DF-GR-07</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>DIZZY</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>IRIDIUM</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MA-T-222</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MA-T-223</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>WS-1200</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>WB-0000</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>VP-66LR</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>VP-66LA</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>VE-66LRB</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>VP-66LS</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>WUERGER</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>VP-66LH</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>VVC-760PR</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>IA-C01W1</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>IA-C01W6</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>IB-C03W1</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>44-142</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>HI-16</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>HI-18</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>HML-G2</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>HML-G3</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>WS-5000</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>PFAU-66D</span>
                  </div>
                </div>
                <br/>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MA-J-200</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>LR-036</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>LR-037</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>RF-024</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>RF-025</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MA-J-201</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MG-014</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>DF-MG-02</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>WR-0555</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MA-E-210</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>DF-GA-08</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>SG-026</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>SG-027</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>WR-0777</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>HG-003</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>HG-004</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MA-E-211</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>EL-PW-00</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>VP-66EG</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>DF-BA-06</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MAJESTIC</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>LITTLE GEM</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>44-141</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>DF-GR-07</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>DIZZY</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>IRIDIUM</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MA-T-222</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>MA-T-223</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>WS-1200</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>WB-0000</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>VP-66LR</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>VP-66LA</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>VE-66LRB</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>VP-66LS</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>WUERGER</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>VP-66LH</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>VVC-760PR</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>IA-C01W1</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>IA-C01W6</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>IB-C03W1</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>44-142</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>HI-16</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>HI-18</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>HML-G2</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>HML-G3</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>WS-5000</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input"/>
                    <span>PFAU-66D</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ac-stats">
          <div className="ac-stats-content">
            <div className="collumn-3-toprow"></div>
            <div className="">
              <h1>AC STATS</h1>
            </div>
          </div>
          <div className="assembly-sidecollumn"></div>
        </div>
      </div>
    </div>
  );
}

export default App;