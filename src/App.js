import "./style.css";

import { allRArmParts } from "./data/right-arm";
import { allLArmParts } from "./data/left-arm";
import { allRBackParts } from "./data/right-back";
import { allLBackParts } from "./data/left-back";
import { allHeadParts } from "./data/head";
import { allCoreParts } from "./data/core";
import { allArmsParts } from "./data/arms";
import { allLegsParts } from "./data/legs";

import { useState } from "react";
import { useEffect } from "react";
import { MdReplay } from "react-icons/md";

function App() {

  // -- STATE VARIABLES -- //
  //UNIT
  const [rightArm, setRightArm] = useState({name: "RIGHT ARM", weight: 0, en_load: 0})
  const [leftArm, setLeftArm] = useState({name: "LEFT ARM", weight: 0, en_load: 0})
  const [rightBack, setRightBack] = useState({name: "RIGHT BACK", weight: 0, en_load: 0})
  const [leftBack, setLeftBack] = useState({name: "LEFT BACK", weight: 0, en_load: 0})

  //FRAME
  const [head, setHead] = useState({name: "HEAD", weight: 0, en_load: 0})
  const [core, setCore] = useState({name: "CORE", weight: 0, en_load: 0, core_out_adj: 0})
  const [arms, setArms] = useState({name: "ARMS", weight: 0, en_load: 0, arm_max_load: 0})
  const [legs, setLegs] = useState({name: "LEGS", en_load: 0, leg_max_load: 0})

  //INNER
  const [booster, setBooster] = useState({name: "BOOSTER", weight: 0, en_load: 0})
  const [fcs, setFcs] = useState({name: "FCS", weight: 0, en_load: 0})
  const [generator, setgenerator] = useState({name: "GENERATOR", weight: 0, en_output: 1000})

  //EXPANSION
  const [expansion, setExpansion] = useState({name: "EXPANSION"})
  
  //TOTAL VALUES
  const [totalWeight, setTotalWeight] = useState(0)
  const [totalENLoad, setTotaENLoad] = useState(0)

  // -- RANDOMIZER FUNCTIONS -- //
  //PART SPECIFIC
  const randomizeRArm = () => {
    let partsArray = [];
    let finalPart;

    partsArray = createPartsArray("RA", 47)

    if(document.getElementById('no-weapon').checked){
      partsArray.push(allRArmParts[0])
    }

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]
    
    setRightArm(finalPart)
  }

  const randomizeLArm = () => {
    let partsArray = [];
    let finalPart;

    partsArray = createPartsArray("LA", 60)

    if(document.getElementById('no-weapon').checked){
      partsArray.push(allLArmParts[0])
    }

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]
    
    setLeftArm(finalPart)
  }

  const randomizeRBack = () => {
    let partsArray = [];
    let finalPart;

    if(document.getElementById("enable-weapon-switch").checked){
      partsArray = createMixedPartsArray(["RB", "RA"], [40, 47], 2)
    } else {
      partsArray = createPartsArray("RB", 40)
    }

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setRightBack(finalPart)
  }

  const randomizeLBack = () => {
    let partsArray = [];
    let finalPart;

    if(document.getElementById("enable-weapon-switch").checked){
      partsArray = createMixedPartsArray(["LB", "LA"], [47, 60], 2)
    } else {
      partsArray = createPartsArray("LB", 40)
    }

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setLeftBack(finalPart)
  }

  const randomizeHead = () => {
    let partsArray = [];
    let finalPart;

    partsArray = createPartsArray("HE", 23)

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setHead(finalPart)
  }

  const randomizeCore = () => {
    let partsArray = [];
    let finalPart;

    partsArray = createPartsArray("CO", 17)

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setCore(finalPart)
  }
  
  const randomizeArms = () => {
    let partsArray = [];
    let finalPart;

    partsArray = createPartsArray("AR", 19)

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setArms(finalPart)
  }

  const randomizeLegs = () => {
    let partsArray = [];
    let finalPart;

    partsArray = createPartsArray("LE", 25)

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setLegs(finalPart)
  }

  //GENERIC
  const createPartsArray = (prefix, max, weightLimit, enLimit) => {
    let aux = []

    for(let i=1; i <= max; i++){
      if (
        (document.getElementById(`${prefix}${i < 10 ? `0${i}` : i}`).checked) && 
        (weightLimit === undefined ? true : getPartById(`${prefix}${i < 10 ? `0${i}` : i}`, prefix).weight) &&
        (enLimit === undefined ? true : getPartById(`${prefix}${i < 10 ? `0${i}` : i}`, prefix).en_load < enLimit)
      ){
        aux.push(getPartById(`${prefix}${i < 10 ? `0${i}` : i}`, prefix))
      }
    }

    return aux;
  }

  const createMixedPartsArray = (prefixArray, maxArray, typesQtty, weightLimit, enLimit) => {
    let aux = []

    for(let i=0; i<typesQtty; i++){
      for(let j=1; j <= maxArray[i]; j++){
        if (
          (document.getElementById(`${prefixArray[i]}${j < 10 ? `0${j}` : j}`).checked) && 
          (weightLimit === undefined ? true : getPartById(`${prefixArray[i]}${j < 10 ? `0${j}` : j}`, prefixArray[i]).weight) &&
          (enLimit === undefined ? true : getPartById(`${prefixArray[i]}${j < 10 ? `0${j}` : j}`, prefixArray[i]).en_load < enLimit)
        ){
          aux.push(getPartById(`${prefixArray[i]}${j < 10 ? `0${j}` : j}`, prefixArray[i]))
        }
      }
    }
    
    return aux;
  }

  const getPartById = (id, prefix) => {
    let aux = [];
  
    switch (prefix) {
      case "RA": 
        aux = allRArmParts; 
        break
      case "LA":
        aux = allLArmParts;
        break
      case "RB":
        aux = allRBackParts;
        break
      case "LB":
        aux = allLBackParts;
        break
      case "HE":
        aux = allHeadParts;
        break
      case "CO":
        aux = allCoreParts;
        break
      case "AR":
        aux = allArmsParts;
        break
      case "LE":
        aux = allLegsParts;
        break
    }

    return aux.find((part) =>{
      return part.id == id;
    })
  }

  const updateTotalValues = () => {
    setTotalWeight(
      rightArm.weight +
      leftArm.weight +
      rightBack.weight +
      leftBack.weight +
      head.weight +
      core.weight +
      arms.weight +
      booster.weight +
      fcs.weight +
      generator.weight 
    )
    console.log(totalWeight)

    setTotaENLoad(
      rightArm.en_load +
      leftArm.en_load +
      rightBack.en_load +
      leftBack.en_load +
      head.en_load +
      core.en_load +
      arms.en_load +
      booster.en_load +
      fcs.en_load +
      legs.en_load 
    )
    console.log(totalENLoad)
  }

  useEffect(() => {
    updateTotalValues()
  }, [rightArm, leftArm, rightBack, leftBack, head, core, arms, legs, booster, fcs, generator]);

  useEffect(() => {
    if(totalWeight / legs.leg_max_load * 100 <=  100){
      document.getElementById("weight-bar").style.width = `${totalWeight / legs.leg_max_load * 100}%`
      document.getElementById("weight-bar").style.backgroundColor = "rgba(20, 140, 240, 1)"
    } else {
      document.getElementById("weight-bar").style.width = "100%";
      document.getElementById("weight-bar").style.backgroundColor = "red";
    }

    if(totalENLoad / ((core.core_out_adj/100) * generator.en_output) * 100 <= 100){
      document.getElementById("enload-bar").style.width = `${totalENLoad / ((core.core_out_adj/100) * generator.en_output) * 100}%`
      document.getElementById("enload-bar").style.backgroundColor = "rgba(20, 140, 240, 1)"
    } else {
      document.getElementById("enload-bar").style.width = "100%";
      document.getElementById("enload-bar").style.backgroundColor = "orange";
    }
  }, [totalWeight, totalENLoad]);

  // -- WEB PAGE -- //
  return (
    <div className="background">
      <button onClick={() => {createPartsArray("RA", 30, null, 2000, true)}}>debug button lmao</button>
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
            <div className="mech-status entry">
              <p>WEIGHT: {totalWeight} / {legs.leg_max_load} {totalWeight > legs.leg_max_load ? <span className="red-warning">OVERWEIGHT</span> : ""}</p>
              <div className="progress-bar">
                <div id="weight-bar"></div>
              </div>
              <p>EN LOAD: {totalENLoad} / {generator.en_output * core.core_out_adj/100} {totalENLoad > generator.en_output ? <span className="orange-warning">EN SHORTFALL</span> : ""}</p>
              <div className="progress-bar">
                <div id="enload-bar"></div>
              </div>
            </div>
            <div className="mech-status entry">
              <h2>ARMS LOAD</h2>
              <br/>
              <p>LARM + RARM: {leftArm.weight + rightArm.weight} / {arms.arm_max_load} {leftArm.weight + rightArm.weight > arms.arm_max_load ? <span className="yellow-warning">ARMS OVERLOAD</span> : ""}</p>
              <p>LARM + RBACK: {leftArm.weight + rightBack.weight} / {arms.arm_max_load} {leftArm.weight + rightBack.weight > arms.arm_max_load ? <span className="yellow-warning">ARMS OVERLOAD</span> : ""}</p>
              <p>LBACK + RARM: {leftBack.weight + rightArm.weight} / {arms.arm_max_load} {leftBack.weight + rightArm.weight > arms.arm_max_load ? <span className="yellow-warning">ARMS OVERLOAD</span> : ""}</p>
              <p>LBACK + RBACK: {leftBack.weight + rightBack.weight} / {arms.arm_max_load} {leftBack.weight + rightBack.weight > arms.arm_max_load ? <span className="yellow-warning">ARMS OVERLOAD</span> : ""}</p>
            </div>
            <br/>
            <div className="category">
                <h2>UNIT</h2>
                <div className="entry-container">
                  <div className="entry">
                    <h3>R-ARM UNIT</h3>
                    <div className="row">
                      <span id="right-arm">{rightArm.name}</span>
                    </div>
                  </div>
                  <div className="single-rando-button selectable" onClick={randomizeRArm}>
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>L-ARM UNIT</h3>
                    <div className="row">
                      <span id="left-arm">{leftArm.name}</span>
                    </div>
                  </div>
                  <div className="single-rando-button selectable" onClick={randomizeLArm}>
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>R-BACK UNIT</h3>
                    <div className="row">
                      <span id="right-back">{rightBack.name}</span>
                    </div>
                  </div>
                  <div className="single-rando-button selectable" onClick={randomizeRBack}>
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>L-BACK UNIT</h3>
                    <div className="row">
                      <span id="left-back">{leftBack.name}</span>
                    </div>
                  </div>
                  <div className="single-rando-button selectable" onClick={randomizeLBack}>
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
            </div>
            <br/>
            <div className="category">
                <h2>FRAME</h2>
                <div className="entry-container">
                  <div className="entry">
                    <h3>HEAD</h3>
                    <div className="row">
                      <span id="head">{head.name}</span>
                    </div>
                  </div>
                  <div className="single-rando-button selectable" onClick={randomizeHead}>
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>CORE</h3>
                    <div className="row">
                      <span id="core">{core.name}</span>
                    </div>
                  </div>
                  <div className="single-rando-button selectable" onClick={randomizeCore}>
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>ARMS</h3>
                    <div className="row">
                      <span id="arms">{arms.name}</span>
                    </div>
                  </div>
                  <div className="single-rando-button selectable" onClick={randomizeArms}>
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>LEGS</h3>
                    <div className="row">
                      <span id="legs">{legs.name}</span>
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
                  <div className="entry">
                    <h3>BOOSTER</h3>
                    <div className="row">
                      <span id="booster">{booster.name}</span>
                    </div>
                  </div>
                  <div className="single-rando-button selectable">
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>FCS</h3>
                    <div className="row">
                      <span id="fcs">{fcs.name}</span>
                    </div>
                  </div>
                  <div className="single-rando-button selectable">
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>GENERATOR</h3>
                    <div className="row">
                      <span id="generator">{generator.name}</span>
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
                  <div className="entry">
                    <h3>EXPANSION</h3>
                    <div className="row">
                      <span id="expansion">{expansion.name}</span>
                    </div>
                  </div>
                  <div className="single-rando-button selectable">
                    <MdReplay size={37} color="#FFF"/>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="collumn-2 overflow">
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
                <input type="checkbox" defaultChecked id="no-overweight"/>
                <span>DISABLE OVERWEIGHT ON FULL RANDO</span>
              </div>
              <div className="option">
                <input type="checkbox" id="no-weapon"/>
                <span>INCLUDES "NOTHING" IN WEAPON ROTATION</span>
              </div>
              <div className="option">
                <input type="checkbox" id="arena"/>
                <span>INCLUDES ARENA IN MISSION ROTATION</span>
              </div>
              <div className="option">
                <input type="checkbox" id="enable-weapon-switch"/>
                <span>INCLUDES ARM UNITS IN BACK UNIT ROTATION</span>
              </div>
            </div>
            <br/>
            <div className="category">
              <h2>PARTS ENABLED</h2>
              <br/>
              <div className="unlocked-table">
                <p className="table-title">RIGHT ARM</p>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA01"/>
                    <span>MA-J-200</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA02"/>
                    <span>LR-036</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA03"/>
                    <span>LR-037</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA04"/>
                    <span>RF-024</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA05"/>
                    <span>RF-025</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA06"/>
                    <span>MA-J-201</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA07"/>
                    <span>MG-014</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA08"/>
                    <span>DF-MG-02</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA09"/>
                    <span>WR-0555</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA10"/>
                    <span>MA-E-210</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA11"/>
                    <span>DF-GA-08</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA12"/>
                    <span>SG-026</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA13"/>
                    <span>SG-027</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA14"/>
                    <span>WR-0777</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA15"/>
                    <span>HG-003</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA16"/>
                    <span>HG-004</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA17"/>
                    <span>MA-E-211</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA18"/>
                    <span>EL-PW-00</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA19"/>
                    <span>VP-66EG</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA20"/>
                    <span>DF-BA-06</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA21"/>
                    <span>MAJESTIC</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA22"/>
                    <span>LITTLE GEM</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA23"/>
                    <span>44-141</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA24"/>
                    <span>DF-GR-07</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA25"/>
                    <span>DIZZY</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA26"/>
                    <span>IRIDIUM</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA27"/>
                    <span>MA-T-222</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA28"/>
                    <span>MA-T-223</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA29"/>
                    <span>WS-1200</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA30"/>
                    <span>WB-0000</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA31"/>
                    <span>VP-66LR</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA32"/>
                    <span>VP-66LA</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA33"/>
                    <span>VE-66LRB</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA34"/>
                    <span>VP-66LS</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA35"/>
                    <span>WUERGER</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA36"/>
                    <span>VP-66LH</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA37"/>
                    <span>VVC-760PR</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA38"/>
                    <span>IA-C01W1</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA39"/>
                    <span>IA-C01W6</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA40"/>
                    <span>IB-C03W1</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA41"/>
                    <span>44-142</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA42"/>
                    <span>HI-16</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA43"/>
                    <span>HI-18</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA44"/>
                    <span>HML-G2</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA45"/>
                    <span>HML-G3</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA46"/>
                    <span>WS-5000</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RA47"/>
                    <span>PFAU-66D</span>
                  </div>
                </div>
                <br/>
                <p className="table-title">LEFT ARM</p>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA01"/>
                    <span>MA-J-200</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA02"/>
                    <span>LR-036</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA03"/>
                    <span>LR-037</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA04"/>
                    <span>RF-024</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA05"/>
                    <span>RF-025</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA06"/>
                    <span>MA-J-201</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA07"/>
                    <span>MG-014</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA08"/>
                    <span>DF-MG-02</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA09"/>
                    <span>WR-0555</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA10"/>
                    <span>MA-E-210</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA11"/>
                    <span>DF-GA-08</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA12"/>
                    <span>SG-026</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA13"/>
                    <span>SG-027</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA14"/>
                    <span>WR-0777</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA15"/>
                    <span>HG-003</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA16"/>
                    <span>HG-004</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA17"/>
                    <span>MA-E-211</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA18"/>
                    <span>EL-PW-00</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA19"/>
                    <span>VP-66EG</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA20"/>
                    <span>DF-BA-06</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA21"/>
                    <span>MAJESTIC</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA22"/>
                    <span>LITTLE GEM</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA23"/>
                    <span>44-141</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA24"/>
                    <span>DF-GR-07</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA25"/>
                    <span>DIZZY</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA26"/>
                    <span>IRIDIUM</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA27"/>
                    <span>MA-T-222</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA28"/>
                    <span>MA-T-223</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA29"/>
                    <span>WS-1200</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA30"/>
                    <span>WB-0000</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA31"/>
                    <span>VP-66LR</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA32"/>
                    <span>VP-66LA</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA33"/>
                    <span>VE-66LRB</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA34"/>
                    <span>VP-66LS</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA35"/>
                    <span>WUERGER</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA36"/>
                    <span>VP-66LH</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA37"/>
                    <span>VVC-760PR</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA38"/>
                    <span>IA-C01W1</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA39"/>
                    <span>IA-C01W6</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA40"/>
                    <span>IB-C03W1</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA41"/>
                    <span>44-142</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA42"/>
                    <span>HI-16</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA43"/>
                    <span>HI-18</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA44"/>
                    <span>HML-G2</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA45"/>
                    <span>HML-G3</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA46"/>
                    <span>WS-5000</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA47"/>
                    <span>PFAU-66D</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA48"/>
                    <span>PB-033M</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA49"/>
                    <span>DF-ET-09</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA50"/>
                    <span>WB-0010</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA51"/>
                    <span>VP-67EB</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA52"/>
                    <span>VP-67LD</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA53"/>
                    <span>VVC-770LB</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA54"/>
                    <span>VVC-774LS</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA55"/>
                    <span>VE-67LLA</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA56"/>
                    <span>44-143</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA57"/>
                    <span>HI-32</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA58"/>
                    <span>IA-C01W2</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA59"/>
                    <span>IA-C01W7</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LA60"/>
                    <span>IB-C03W2</span>
                  </div>
                </div>
                <br/>
                <p className="table-title">RIGHT BACK</p>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB01"/>
                    <span>DF-GA-09</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB02"/>
                    <span>SB-033M</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB03"/>
                    <span>EARSHOT</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB04"/>
                    <span>SONGBIRDS</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB05"/>
                    <span>VE-60SNA</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB06"/>
                    <span>VP-60LCS</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB07"/>
                    <span>VE-60LCA</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB08"/>
                    <span>VE-60LCB</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB09"/>
                    <span>VE-60LCD</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB10"/>
                    <span>FASAN</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB11"/>
                    <span>KRANICH</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB12"/>
                    <span>EULE</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB13"/>
                    <span>IA-C01W3</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB14"/>
                    <span>BML-G1/P20</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB15"/>
                    <span>BML-G2/P03</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB16"/>
                    <span>BML-G2/P05</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB17"/>
                    <span>BML-G2/P19</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB18"/>
                    <span>BML-G2/P16</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB19"/>
                    <span>BML-G2/P17</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB20"/>
                    <span>BML-G1/P31</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB21"/>
                    <span>BML-G1/P32</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB22"/>
                    <span>BML-G2/P08</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB23"/>
                    <span>BML-G1/P01</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB24"/>
                    <span>BML-G1/P03</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB25"/>
                    <span>BML-G1/P07</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB26"/>
                    <span>BML-G3/P04</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB27"/>
                    <span>BML-G3/P05</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB28"/>
                    <span>BML-G1/P29</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB29"/>
                    <span>WR-0999</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB30"/>
                    <span>WS-5001</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB31"/>
                    <span>45-091</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB32"/>
                    <span>EL-PW-01</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB33"/>
                    <span>VVC-703PM</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB34"/>
                    <span>VVC-706PM</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB35"/>
                    <span>VVC-70VPM</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB36"/>
                    <span>IB-C03W3</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB37"/>
                    <span>B0-044</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB38"/>
                    <span>45-091</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB39"/>
                    <span>VP-60LT</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="RB40"/>
                    <span>VVC-700LD</span>
                  </div>
                </div>
                <br/>
                <p className="table-title">LEFT BACK</p>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB01"/>
                    <span>DF-GA-09</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB02"/>
                    <span>SB-033M</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB03"/>
                    <span>EARSHOT</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB04"/>
                    <span>SONGBIRDS</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB05"/>
                    <span>VE-60SNA</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB06"/>
                    <span>VP-60LCS</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB07"/>
                    <span>VE-60LCA</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB08"/>
                    <span>VE-60LCB</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB09"/>
                    <span>VE-60LCD</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB10"/>
                    <span>FASAN</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB11"/>
                    <span>KRANICH</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB12"/>
                    <span>EULE</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB13"/>
                    <span>IA-C01W3</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB14"/>
                    <span>BML-G1/P20</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB15"/>
                    <span>BML-G2/P03</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB16"/>
                    <span>BML-G2/P05</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB17"/>
                    <span>BML-G2/P19</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB18"/>
                    <span>BML-G2/P16</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB19"/>
                    <span>BML-G2/P17</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB20"/>
                    <span>BML-G1/P31</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB21"/>
                    <span>BML-G1/P32</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB22"/>
                    <span>BML-G2/P08</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB23"/>
                    <span>BML-G1/P01</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB24"/>
                    <span>BML-G1/P03</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB25"/>
                    <span>BML-G1/P07</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB26"/>
                    <span>BML-G3/P04</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB27"/>
                    <span>BML-G3/P05</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB28"/>
                    <span>BML-G1/P29</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB29"/>
                    <span>WR-0999</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB30"/>
                    <span>WS-5001</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB31"/>
                    <span>45-091</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB32"/>
                    <span>EL-PW-01</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB33"/>
                    <span>VVC-703PM</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB34"/>
                    <span>VVC-706PM</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB35"/>
                    <span>VVC-70VPM</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB36"/>
                    <span>IB-C03W3</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB37"/>
                    <span>B0-044</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB38"/>
                    <span>45-091</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB39"/>
                    <span>VP-60LT</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB40"/>
                    <span>VVC-700LD</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB41"/>
                    <span>VP-61PS</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB42"/>
                    <span>SI-24</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB43"/>
                    <span>SI-27</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB44"/>
                    <span>VP-61PB</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB45"/>
                    <span>SI-29</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB46"/>
                    <span>VE-61PSA</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LB47"/>
                    <span>IB-C03W4</span>
                  </div>
                </div>
                <br/>
                <p className="table-title">HEAD</p>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE01"/>
                    <span>AH-J-124</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE02"/>
                    <span>AH-J-124/RC</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE03"/>
                    <span>HD-011</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE04"/>
                    <span>HD-033</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE05"/>
                    <span>HD-012</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE06"/>
                    <span>DF-HD-08</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE07"/>
                    <span>VP-44S</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE08"/>
                    <span>VP-44D</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE09"/>
                    <span>NACHTRE</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE10"/>
                    <span>KASUAR</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE11"/>
                    <span>LAMMER</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE12"/>
                    <span>VE-44A</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE13"/>
                    <span>VE-44B</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE14"/>
                    <span>HC-2000</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE15"/>
                    <span>HC-2000/BC</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE16"/>
                    <span>HC-3000</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE17"/>
                    <span>HS-5000</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE18"/>
                    <span>EL-TH-10</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE19"/>
                    <span>EL-PH-00</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE20"/>
                    <span>20-081</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE21"/>
                    <span>20-082</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE22"/>
                    <span>IA-C01H</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="HE23"/>
                    <span>IB-C03H</span>
                  </div>
                </div>
                <br/>
                <p className="table-title">CORE</p>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO01"/>
                    <span>ILLEGAL</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO02"/>
                    <span>AH-J-120/RC</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO03"/>
                    <span>BD-011</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO04"/>
                    <span>BD-012</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO05"/>
                    <span>DF-BD-08</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO06"/>
                    <span>VP-40S</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO07"/>
                    <span>NACHTRE</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO08"/>
                    <span>LAMMER</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO09"/>
                    <span>VE-40A</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO10"/>
                    <span>CC-2000</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO11"/>
                    <span>CC-3000</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO12"/>
                    <span>CS-5000</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO13"/>
                    <span>EL-TC-10</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO14"/>
                    <span>EL-PC-00</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO15"/>
                    <span>07-061</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO16"/>
                    <span>IA-C01C</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="CO17"/>
                    <span>IB-C03C</span>
                  </div>
                </div>
                <br/>
                <p className="table-title">ARM</p>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR01"/>
                    <span>AH-J-123</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR02"/>
                    <span>AH-J-123/RC</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR03"/>
                    <span>AR-011</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR04"/>
                    <span>AR-012</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR05"/>
                    <span>DF-AR-08</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR06"/>
                    <span>DF-AR-09</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR07"/>
                    <span>VP-46S</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR08"/>
                    <span>VP-46D</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR09"/>
                    <span>NACHTRE</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR10"/>
                    <span>LAMMER</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR11"/>
                    <span>VE-46A</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR12"/>
                    <span>AC-2000</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR13"/>
                    <span>AC-3000</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR14"/>
                    <span>AC-5000</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR15"/>
                    <span>EL-TA-10</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR16"/>
                    <span>EL-PA-00</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR17"/>
                    <span>04-101</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR18"/>
                    <span>IA-C01A</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="AR19"/>
                    <span>IB-C03A</span>
                  </div>
                </div>
                <br/>
                <p className="table-title">LEGS</p>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE01"/>
                    <span>AH-J-121</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE02"/>
                    <span>AH-J-121/RC</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE03"/>
                    <span>LG-011</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE04"/>
                    <span>LG-012</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE05"/>
                    <span>DF-LG-08</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE06"/>
                    <span>VP-422</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE07"/>
                    <span>NACHTRE</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE08"/>
                    <span>VE-42A</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE09"/>
                    <span>2C-2000</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE10"/>
                    <span>2C-3000</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE11"/>
                    <span>2S-5000</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE12"/>
                    <span>EL-TL-10</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE13"/>
                    <span>EL-PL-00</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE14"/>
                    <span>06-041</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE15"/>
                    <span>IA-C01L</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE16"/>
                    <span>IA-C03L</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE17"/>
                    <span>KASUAR</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE18"/>
                    <span>RC-2000</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE19"/>
                    <span>06-042</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE20"/>
                    <span>LG-033</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE21"/>
                    <span>VP-424</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE22"/>
                    <span>LAMMER</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE23"/>
                    <span>LG-022T</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE24"/>
                    <span>VE-42B</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="LE25"/>
                    <span>EL-TL-11</span>
                  </div>
                </div>
                <br/>
                <p className="table-title">BOOSTER</p>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="BO01"/>
                    <span>AB-J-137</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="BO02"/>
                    <span>BST-G1/P10</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="BO03"/>
                    <span>BST-G2/P04</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="BO04"/>
                    <span>BST-G2/P06</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="BO05"/>
                    <span>ALULA</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="BO06"/>
                    <span>FLUEGEL</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="BO07"/>
                    <span>BUERZEL</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="BO08"/>
                    <span>BC-0600</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="BO09"/>
                    <span>BC-0400</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="BO10"/>
                    <span>BC-0200</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="BO11"/>
                    <span>IA-C01B</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="BO12"/>
                    <span>IB-C03B</span>
                  </div>
                </div>
                <br/>
                <p className="table-title">FCS</p>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="FC01"/>
                    <span>FCS-G1/P01</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="FC02"/>
                    <span>FCS-G2/P05</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="FC03"/>
                    <span>FCS-G2/P10</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="FC04"/>
                    <span>FCS-G2/P12</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="FC05"/>
                    <span>FC-006</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="FC06"/>
                    <span>FC-008</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="FC07"/>
                    <span>VE-21A</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="FC08"/>
                    <span>VE-21B</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="FC09"/>
                    <span>IA-C01F</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="FC10"/>
                    <span>IB-C03F</span>
                  </div>
                </div>
                <br/>
                <p className="table-title">GENERATOR</p>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="GE01"/>
                    <span>AG-J-098</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="GE02"/>
                    <span>AG-E-013</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="GE03"/>
                    <span>AG-T-005</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="GE04"/>
                    <span>DF-GN-02</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="GE05"/>
                    <span>DF-GN-06</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="GE06"/>
                    <span>DF-GN-08</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="GE07"/>
                    <span>VP-20S</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="GE08"/>
                    <span>VP-20C</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="GE09"/>
                    <span>VP-20D</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="GE10"/>
                    <span>VE-20A</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="GE11"/>
                    <span>VE-20B</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="GE12"/>
                    <span>VE-20C</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="GE13"/>
                    <span>IA-C01G</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="GE14"/>
                    <span>IB-C03G</span>
                  </div>
                </div>
                <br/>
                <p className="table-title">EXPANSION</p>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="EX01"/>
                    <span>ASSAULT ARMOR</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="EX02"/>
                    <span>PULSE ARMOR</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="EX03"/>
                    <span>PULSE PROTECTION</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="EX04"/>
                    <span>TERMINAL ARMOR</span>
                  </div>
                </div>
                <br/>
                <p className="table-title">MISSIONS</p>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI01"/>
                    <span>ILLEGAL ENTRY</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI02"/>
                    <span>DESTROY ARTILLERY</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI03"/>
                    <span>GRID 135 CLEANUP</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI04"/>
                    <span>DESTROY TRANSPORT</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI05"/>
                    <span>DESTROY TESTER AC</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI06"/>
                    <span>ATTACK DAM COMPLEX</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI07"/>
                    <span>ATTACK DAM COMPLEX [ALT]</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI08"/>
                    <span>DESTROY MINING SHIP</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI09"/>
                    <span>ESCORT MINING SHIP</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI10"/>
                    <span>OPERATION WALLCLIMBER</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI11"/>
                    <span>RETRIEVE COMBAT LOGS</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI12"/>
                    <span>PRISONER RESCUE</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI13"/>
                    <span>INVESTIGATE BAWS</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI14"/>
                    <span>OBSTRUCT INSPECTION</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI15"/>
                    <span>ATTACK WATCHPOINT</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI16"/>
                    <span>ATTACK WATCHPT [ALT]</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI17"/>
                    <span>INFILTRATE GRID 086</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI18"/>
                    <span>ELIMINATE DOSER</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI19"/>
                    <span>STOP DATA BREACH</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI20"/>
                    <span>OCEAN CROSSING</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI21"/>
                    <span>STEAL SURVEY DATA</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI22"/>
                    <span>ATTACK REFUEL BASE</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI23"/>
                    <span>ELIMINATE VI.VII</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI24"/>
                    <span>TUNNEL SABOTAGE</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI25"/>
                    <span>PREVENT SALVAGE</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI26"/>
                    <span>SURVEY THE FLOATING CITY</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI27"/>
                    <span>SURVEY THE FLOATING CITY [ALT]</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI28"/>
                    <span>HEAVY MISSILE LAUNCH SUPPORT</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI29"/>
                    <span>ELIMINATE ENFORCEMENT SQUAD</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI30"/>
                    <span>DESTROY SPECIAL FORCES CRAFT</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI31"/>
                    <span>ATTACK OLD SPACEPORT</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI32"/>
                    <span>ELIMINATE HONEST BRUTE</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI33"/>
                    <span>DEFEND OLD SPACEPORT</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI34"/>
                    <span>DEFEND DAM COMPLEX</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI35"/>
                    <span>HISTORIC DATA RECOVERY</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI36"/>
                    <span>CORAL EXPORT DENIAL</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI37"/>
                    <span>DESTROY THE ICE WORM</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI38"/>
                    <span>UNDERGROUND EXPLORATION 1</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI39"/>
                    <span>UNDERGROUND EXPLORATION 2</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI40"/>
                    <span>UNDERGROUND EXPLORATION 2 [ALT]</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI41"/>
                    <span>UNDERGROUND EXPLORATION 3</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI42"/>
                    <span>INTERCEPT THE REDGUNS</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI43"/>
                    <span>AMBUSH THE VESPERS</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI44"/>
                    <span>ELIMINATE V.III</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI45"/>
                    <span>UNKNOWN TERRITORY SURVEY</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI46"/>
                    <span>UNKNOWN TERRITORY SURVEY [ALT]</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI47"/>
                    <span>REACH THE CORAL CONVERGENCE</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI48"/>
                    <span>ESCAPE</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI49"/>
                    <span>TAKE THE FLOATING CITY</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI50"/>
                    <span>INTERCEPT CORPORATE FORCES</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI51"/>
                    <span>BREACH THE KARMAN LINE</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI52"/>
                    <span>SHUT DOWN THE CLOSURE SATELLITES</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI53"/>
                    <span>ELIMINATE CINDER CARLA</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI54"/>
                    <span>DESTROY THE DRIVE BLOCK</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI55"/>
                    <span>BRING DOWN XYLEM</span>
                  </div>
                </div>
                <div className="unlocked-row">
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI56"/>
                    <span>MIA</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI57"/>
                    <span>REGAIN CONTROL OF XYLEM</span>
                  </div>
                  <div className="unlocked-part">
                    <input type="checkbox" className="small-input" defaultChecked id="MI58"/>
                    <span>CORAL RELEASE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


/** 
    These are just some general notes on how Weight, EN Load and Arms Load calculations work, and an idea of
    how I want the rando to work. So, let's start by explaining how each value is calculated, before I can
    think of an algorythm to try keeping them in check:

    Weight is pretty simple, basically, take the legs, and the value from the stat "Load Limit". That determines
    the weight that leg can take, for example, a "Mind Alpha" has a load limit of 63810, so if we put a core
    that has a Weight value of 20000, that value goes down to 43810, leaving that for the rest of the build

    Arms Load is exactly the same, however there are a few details that should be considered. First of all,
    while the only values that are considered are the current weapons on the Arms Unit, we should consider the
    shoulder units as well, since when swapped to those, their values is the one that counts, so if we have
    a limit of 5000, on our left arm we have something that weights 3000, on the right arm something that weights
    2000, that's okay, but the moment we swap what's on the right arm to something equipped on the shoulders
    that weights 3000 as well, we go above 5000, which causes an overload

    Lastly, there's EN Load, where we have two values to consider - The generator output, and the core output
    adjustment - Basically, the generator output is multiplied by the core output adjustment%. So, for example,
    if our Generator has 5000 EN Output, and our Core has 120% adjustment, our final value is of 6000 EN Load. 
    Which then goes through the same rules of subtraction as Weight

    Now, to talk a bit about how I think the algorythm should work. First of all, it will generate a completely
    random build, and check if it fails Weight, EN Load or Arms Load requirements, if it fails, then it will
    try to re-do the build - EN Load > Arms Load > Weight priority - depending on which factor failed, there will
    be a rotation limit of 10, where it will pick a part at random, that is not the Legs, Core, Generator or Arms,
    and randomize it again including only parts with a lower value than it in the rotation for whatever failed,
    if after 10 rotations it still fails, then the respective part which determines the value gets randomized
    again, and it repeats the 10 rotations. This process repeats a max of 3 times, and if all of them fail,
    the randomizer returns an error saying it couldn't pick a combination that satisifies the requirement
**/