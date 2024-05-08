import "./style.css";

import { allRArmParts } from "./data/right-arm";
import { allLArmParts } from "./data/left-arm";
import { allRBackParts } from "./data/right-back";
import { allLBackParts } from "./data/left-back";
import { allHeadParts } from "./data/head";
import { allCoreParts } from "./data/core";
import { allArmsParts } from "./data/arms";
import { allLegsParts } from "./data/legs";
import { allGeneratorParts } from "./data/generator";
import { allBoosterParts } from "./data/booster";
import { allFCSParts } from "./data/fcs";
import { allExpansionParts } from "./data/expansion";
import { allMissions } from "./data/mission";

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
  const [generator, setGenerator] = useState({name: "GENERATOR", weight: 0, en_output: 0})

  //EXPANSION
  const [expansion, setExpansion] = useState({name: "EXPANSION"})

  //MISSION
  const [mission, setMission] = useState({name: ""})
  
  //TOTAL VALUES
  const [totalWeight, setTotalWeight] = useState(0)
  const [totalENLoad, setTotaENLoad] = useState(0)

  //OTHER
  const [wasFullRando, setWasFullRando] = useState(false);

  // -- RANDOMIZER FUNCTIONS -- //
  //PART SPECIFIC
  const randomizeMission = () => {
    let partsArray = [];
    let finalPart;

    partsArray = createPartsArray("MI", 59)

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]
    
    setMission(finalPart)
  }

  const randomizeRArm = () => {
    let partsArray = [];
    let finalPart;
    setWasFullRando(false)

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
    setWasFullRando(false)

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
    setWasFullRando(false)

    if(document.getElementById("enable-weapon-switch").checked){
      partsArray = createMixedPartsArray(["RB", "RA"], [40, 47])
    } else {
      partsArray = createPartsArray("RB", 40)
    }

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setRightBack(finalPart)
  }

  const randomizeLBack = () => {
    let partsArray = [];
    let finalPart;
    setWasFullRando(false)

    if(document.getElementById("enable-weapon-switch").checked){
      partsArray = createMixedPartsArray(["LB", "LA"], [47, 60])
    } else {
      partsArray = createPartsArray("LB", 40)
    }

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setLeftBack(finalPart)
  }

  const randomizeHead = () => {
    let partsArray = [];
    let finalPart;
    setWasFullRando(false)

    partsArray = createPartsArray("HE", 23)

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setHead(finalPart)
  }

  const randomizeCore = () => {
    let partsArray = [];
    let finalPart;
    setWasFullRando(false)

    partsArray = createPartsArray("CO", 17)

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setCore(finalPart)
  }
  
  const randomizeArms = () => {
    let partsArray = [];
    let finalPart;
    setWasFullRando(false)

    partsArray = createPartsArray("AR", 19)

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setArms(finalPart)
  }

  const randomizeLegs = () => {
    let partsArray = [];
    let finalPart;
    setWasFullRando(false)

    partsArray = createPartsArray("LE", 25)

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setLegs(finalPart)
  }

  const randomizeGenerator = () => {
    let partsArray = [];
    let finalPart;
    setWasFullRando(false)

    partsArray = createPartsArray("GE", 14)

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setGenerator(finalPart)
  }

  const randomizeBooster = () => {
    let partsArray = [];
    let finalPart;
    setWasFullRando(false)

    partsArray = createPartsArray("BO", 12)

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setBooster(finalPart)
  }

  const randomizeFCS = () => {
    let partsArray = [];
    let finalPart;
    setWasFullRando(false)

    partsArray = createPartsArray("FC", 10)

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setFcs(finalPart)
  }

  const randomizeExpansion = () => {
    let partsArray = [];
    let finalPart;
    setWasFullRando(false)

    partsArray = createPartsArray("EX", 4)

    finalPart = partsArray[Math.floor(Math.random() * partsArray.length)]

    setExpansion(finalPart)
  }

  //GENERIC
  const createPartsArray = (prefix, max, weightLimit, enLimit) => {
    let aux = []

    for(let i=1; i <= max; i++){
      if (
        (weightLimit === undefined ? true : getPartById(`${prefix}${i < 10 ? `0${i}` : i}`, prefix).weight < weightLimit) &&
        (enLimit === undefined ? true : getPartById(`${prefix}${i < 10 ? `0${i}` : i}`, prefix).en_load < enLimit)
      ){
        aux.push(getPartById(`${prefix}${i < 10 ? `0${i}` : i}`, prefix))
      }
    }

    return aux;
  }

  const createMixedPartsArray = (prefixArray, maxArray, weightLimit, enLimit) => {
    let aux = []

    for(let i=0; i<prefixArray.length; i++){
      for(let j=1; j <= maxArray[i]; j++){
        if (
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
      case "GE":
        aux = allGeneratorParts;
        break
      case "BO":
        aux = allBoosterParts;
        break
      case "FC":
        aux = allFCSParts;
        break
      case "EX":
        aux = allExpansionParts;
        break
      case "MI":
        aux = allMissions;
        break
    }

    return aux.find((part) =>{
      return part.id == id;
    })
  }

  const updateTotalValues = async () => {
    await setTotalWeight(
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

    await setTotaENLoad(
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
  }

  //FULL RANDOMIZER
  const randomizeFullBuild = () => {
     randomizeRArm();
    randomizeLArm();
    randomizeRBack();
    randomizeLBack();
    randomizeHead();
    randomizeCore();
    randomizeArms();
    randomizeLegs();
    randomizeBooster();
    randomizeGenerator();
    randomizeFCS();
    randomizeExpansion();

    setWasFullRando(true); 
  }

  useEffect(() => {
    updateTotalValues();
  }, [rightArm, leftArm, rightBack, leftBack, head, core, arms, legs, booster, fcs, generator]);

  useEffect(() => {
    if(totalWeight / legs.leg_max_load * 100 <=  100){
      document.getElementById("weight-bar").style.width = `${totalWeight / legs.leg_max_load * 100}%`;
      document.getElementById("weight-bar").style.backgroundColor = "rgba(20, 140, 240, 1)";
    } else {
      document.getElementById("weight-bar").style.width = "100%";
      document.getElementById("weight-bar").style.backgroundColor = "red";
    }

    if(totalENLoad / ((core.core_out_adj/100) * generator.en_output) * 100 <= 100){
      document.getElementById("enload-bar").style.width = `${totalENLoad / ((core.core_out_adj/100) * generator.en_output) * 100}%`;
      document.getElementById("enload-bar").style.backgroundColor = "rgba(20, 140, 240, 1)";
    } else {
      document.getElementById("enload-bar").style.width = "100%";
      document.getElementById("enload-bar").style.backgroundColor = "orange";
    }

    if(wasFullRando){
      console.log("was full random")
      if(
        (totalWeight > legs.leg_max_load && document.getElementById("no-overweight").checked) ||
        totalENLoad > (core.core_out_adj/100)*generator.en_output                             ||
        leftArm.weight + rightArm.weight > arms.arm_max_load                                  ||
        leftArm.weight + rightBack.weight > arms.arm_max_load                                 ||
        leftBack.weight + rightArm.weight > arms.arm_max_load                                 ||
        leftBack.weight + rightBack.weight > arms.arm_max_load
      ){
        randomizeFullBuild()
        console.log("was full random and did get overweight")
      } else {
        console.log("was full random but didnt get any overweight")
      }
    }
    else{
      console.log("was not full random")
    }
  }, [totalWeight, totalENLoad]);

  // -- WEB PAGE -- //
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
            <div className="category">
                <h2>UNIT</h2>
                <div className="entry-container">
                  <div className="entry">
                    <h3>R-ARM UNIT</h3>
                    <div className="row">
                      <span id="right-arm">{rightArm.name}</span>
                    </div>
                  </div>
                  <button className="single-rando-button selectable" onClick={randomizeRArm}>
                    <MdReplay size={37} color="#FFF"/>
                  </button>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>L-ARM UNIT</h3>
                    <div className="row">
                      <span id="left-arm">{leftArm.name}</span>
                    </div>
                  </div>
                  <button className="single-rando-button selectable" onClick={randomizeLArm}>
                    <MdReplay size={37} color="#FFF"/>
                  </button>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>R-BACK UNIT</h3>
                    <div className="row">
                      <span id="right-back">{rightBack.name}</span>
                    </div>
                  </div>
                  <button className="single-rando-button selectable" onClick={randomizeRBack}>
                    <MdReplay size={37} color="#FFF"/>
                  </button>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>L-BACK UNIT</h3>
                    <div className="row">
                      <span id="left-back">{leftBack.name}</span>
                    </div>
                  </div>
                  <button className="single-rando-button selectable" onClick={randomizeLBack}>
                    <MdReplay size={37} color="#FFF"/>
                  </button>
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
                  <button className="single-rando-button selectable" onClick={randomizeHead}>
                    <MdReplay size={37} color="#FFF"/>
                  </button>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>CORE</h3>
                    <div className="row">
                      <span id="core">{core.name}</span>
                    </div>
                  </div>
                  <button className="single-rando-button selectable" onClick={randomizeCore}>
                    <MdReplay size={37} color="#FFF"/>
                  </button>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>ARMS</h3>
                    <div className="row">
                      <span id="arms">{arms.name}</span>
                    </div>
                  </div>
                  <button className="single-rando-button selectable" onClick={randomizeArms}>
                    <MdReplay size={37} color="#FFF"/>
                  </button>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>LEGS</h3>
                    <div className="row">
                      <span id="legs">{legs.name}</span>
                    </div>
                  </div>
                  <button className="single-rando-button selectable" onClick={randomizeLegs}>
                    <MdReplay size={37} color="#FFF"/>
                  </button>
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
                  <button className="single-rando-button selectable" onClick={randomizeBooster}>
                    <MdReplay size={37} color="#FFF"/>
                  </button>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>FCS</h3>
                    <div className="row">
                      <span id="fcs">{fcs.name}</span>
                    </div>
                  </div>
                  <button className="single-rando-button selectable" onClick={randomizeFCS}>
                    <MdReplay size={37} color="#FFF"/>
                  </button>
                </div>
                <div className="entry-container">
                  <div className="entry">
                    <h3>GENERATOR</h3>
                    <div className="row">
                      <span id="generator">{generator.name}</span>
                    </div>
                  </div>
                  <button className="single-rando-button selectable" onClick={randomizeGenerator}>
                    <MdReplay size={37} color="#FFF"/>
                  </button>
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
                  <button className="single-rando-button selectable" onClick={randomizeExpansion}>
                    <MdReplay size={37} color="#FFF"/>
                  </button>
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
                <div className="entry selectable" onClick={randomizeFullBuild}>
                  <span>RANDOMIZE BUILD</span>
                </div>
                <div className="entry selectable" onClick={randomizeMission}>
                  <span>RANDOMIZE MISSION</span>
                </div>
              </div>
            </div>
            <br/>
            <div className="category">
              <h2>OPTIONS</h2>
              <div className="option">
                <input type="checkbox" defaultChecked id="no-overweight"/>
                <span>DISABLE OVERWEIGHT ON FULL RANDOMIZE</span>
              </div>
              <div className="option">
                <input type="checkbox" id="no-weapon"/>
                <span>INCLUDES "NOTHING" IN WEAPON ROTATION</span>
              </div>
              <div className="option">
                <input type="checkbox" id="enable-weapon-switch"/>
                <span>INCLUDES ARM UNITS IN BACK UNIT ROTATION</span>
              </div>
            </div>
            <br/>
            <div className="category">
              <h2>MECH STATS</h2>
              <div className="mission entry-full-width">
                <p>MISSION: {mission.name}</p>
              </div>
              <div className="mech-status entry-full-width">
                <p>WEIGHT: {totalWeight} / {legs.leg_max_load} {totalWeight > legs.leg_max_load ? <span className="red-warning">OVERWEIGHT</span> : ""}</p>
                <div className="progress-bar">
                  <div id="weight-bar"></div>
                </div>
                <p>EN LOAD: {totalENLoad} / {generator.en_output * core.core_out_adj/100} {totalENLoad > generator.en_output * (core.core_out_adj/100) ? <span className="orange-warning">EN SHORTFALL</span> : ""}</p>
                <div className="progress-bar">
                  <div id="enload-bar"></div>
                </div>
              </div>
              <div className="mech-status entry-full-width">
                <h2>ARMS LOAD</h2>
                <br/>
                <p>LARM + RARM: {leftArm.weight + rightArm.weight} / {arms.arm_max_load} {leftArm.weight + rightArm.weight > arms.arm_max_load ? <span className="yellow-warning">ARMS OVERLOAD</span> : ""}</p>
                <p>LARM + RBACK: {leftArm.weight + rightBack.weight} / {arms.arm_max_load} {leftArm.weight + rightBack.weight > arms.arm_max_load ? <span className="yellow-warning">ARMS OVERLOAD</span> : ""}</p>
                <p>LBACK + RARM: {leftBack.weight + rightArm.weight} / {arms.arm_max_load} {leftBack.weight + rightArm.weight > arms.arm_max_load ? <span className="yellow-warning">ARMS OVERLOAD</span> : ""}</p>
                <p>LBACK + RBACK: {leftBack.weight + rightBack.weight} / {arms.arm_max_load} {leftBack.weight + rightBack.weight > arms.arm_max_load ? <span className="yellow-warning">ARMS OVERLOAD</span> : ""}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;