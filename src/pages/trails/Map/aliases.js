// Assets
import aguaMarinhaMap from '../../../images/trails/map/agua-marinha.svg'
import alexandritaMap from '../../../images/trails/map/alexandrita.svg'
import ametistaMap from '../../../images/trails/map/ametista.svg'
import diamanteMap from '../../../images/trails/map/diamante.svg'
import esmeraldaMap from '../../../images/trails/map/esmeralda.svg'
import ouroMap from '../../../images/trails/map/ouro.svg'
import prataMap from '../../../images/trails/map/prata.svg'
import safiraMap from '../../../images/trails/map/safira.svg'
import topazioMap from '../../../images/trails/map/topazio.svg'
import turmalinaMap from '../../../images/trails/map/turmalina.svg'

import aguamarinhaStoneDone from '../../../images/stones/aquamarine.svg'
import alexandritaStoneDone from '../../../images/stones/alexandrita.svg'
import ametistaStoneDone from '../../../images/stones/ametista.svg'
import diamanteStoneDone from '../../../images/stones/diamante.svg'
import esmeraldaStoneDone from '../../../images/stones/esmeralda.svg'
import ouroStoneDone from '../../../images/stones/ouro.svg'
import prataStoneDone from '../../../images/stones/prata.svg'
import safiraStoneDone from '../../../images/stones/safira.svg'
import topazioStoneDone from '../../../images/stones/topazio.svg'
import turmalinaStoneDone from '../../../images/stones/turmalina.svg'


const trailsMap = {
  "Água-Marinha": {
    "position": {bottom: "434px", left: "108px"},
    "img": aguaMarinhaMap,
    "stone": {
      position: {top: "38px", right: "72px"},
      state: {
        "todo": "",
        "doing": "",
        "done": aguamarinhaStoneDone
      }
    }
  },

  "Diamante": {
    "position": {bottom: "266px", left: "0px"},
    "img": diamanteMap,
    "stone": {
      position: {top: "38px", right: "53px"},
      state: {
        "todo": "",
        "doing": "",
        "done": diamanteStoneDone
      }
    }
  },

  "Ametista": {
    "position": {bottom: "0px", left: "0px"},
    "img": ametistaMap,
    "stone": {
      position: {top: "38px", right: "66px"},
      state: {
        "todo": "",
        "doing": "",
        "done": ametistaStoneDone
      }
    }
  },

  "Turmalina": {
    "position": {bottom: "328px", left: "218px"},
    "img": turmalinaMap,
    "stone": {
      position: {top: "52px", right: "12px"},
      state: {
        "todo": "",
        "doing": "",
        "done": turmalinaStoneDone
      }
    }
  },

  "Prata": {
    "position": {bottom: "100px", left: "0px"},
    "img": prataMap,
    "stone": {
      position: {top: "38px", right: "35px"},
      state: {
        "todo": "",
        "doing": "",
        "done": prataStoneDone
      }
    }
  },

  "Ouro": {
    "position": {bottom: "118px", left: "135px"},
    "img": ouroMap,
    "stone": {
      position: {top: "53px", right: "47px"},
      state: {
        "todo": "",
        "doing": "",
        "done": ouroStoneDone
      }
    }
  },

  "Esmeralda": {
    "position": {bottom: "265px", left: "157px"},
    "img": esmeraldaMap,
    "stone": {
      position: {top: "38px", right: "75px"},
      state: {
        "todo": "",
        "doing": "",
        "done": esmeraldaStoneDone
      }
    }
  },

  "Safira": {
    "position": {bottom: "96px", left: "282px"},
    "img": safiraMap,
    "stone": {
      position: {top: "81px", right: "12px"},
      state: {
        "todo": "",
        "doing": "",
        "done": safiraStoneDone
      }
    }
  },

  "Alexandrita": {
    "position": {bottom: "0", left: "135px"},
    "img": alexandritaMap,
    "stone": {
      position: {top: "38px", right: "101px"},
      state: {
        "todo": "",
        "doing": "",
        "done": alexandritaStoneDone
      }
    }
  },

  "Topázio": {
    "position": {bottom: "394px", left: "0px"},
    "img": topazioMap,
    "stone": {
      position: {top: "38px", right: "76px"},
      state: {
        "todo": "",
        "doing": "",
        "done": topazioStoneDone
      }
    }
  }

}

export default trailsMap;