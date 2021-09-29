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

import aguaMarinhaStoneDone from '../../../images/stones/aguaMarinha/aguaMarinha.svg';
import aguaMarinhaStoneDoing from '../../../images/stones/aguaMarinha/aguaMarinhaDoing.svg';
import aguaMarinhaStoneBlocked from '../../../images/stones/aguaMarinha/aguaMarinhaBlocked.svg';

import alexandritaStoneDone from '../../../images/stones/alexandrita/alexandrita.svg';
import alexandritaStoneDoing from '../../../images/stones/alexandrita/alexandritaDoing.svg';
import alexandritaStoneBlocked from '../../../images/stones/alexandrita/alexandritaBlocked.svg';

import ametistaStoneDone from '../../../images/stones/ametista/ametista.svg';
import ametistaStoneDoing from '../../../images/stones/ametista/ametistaDoing.svg';
import ametistaStoneBlocked from '../../../images/stones/ametista/ametistaBlocked.svg';

import diamanteStoneDone from '../../../images/stones/diamante/diamante.svg';
import diamanteStoneDoing from '../../../images/stones/diamante/diamanteDoing.svg';
import diamanteStoneBlocked from '../../../images/stones/diamante/diamanteBlocked.svg';

import esmeraldaStoneDone from '../../../images/stones/esmeralda/esmeralda.svg';
import esmeraldaStoneDoing from '../../../images/stones/esmeralda/esmeraldaDoing.svg';
import esmeraldaStoneBlocked from '../../../images/stones/esmeralda/esmeraldaBlocked.svg';

import ouroStoneDone from '../../../images/stones/ouro/ouro.svg';
import ouroStoneDoing from '../../../images/stones/ouro/ouroDoing.svg';
import ouroStoneBlocked from '../../../images/stones/ouro/ouroBlocked.svg';

import prataStoneDone from '../../../images/stones/prata/prata.svg';
import prataStoneDoing from '../../../images/stones/prata/prataDoing.svg';
import prataStoneBlocked from '../../../images/stones/prata/prataBlocked.svg';

import safiraStoneDone from '../../../images/stones/safira/safira.svg';
import safiraStoneDoing from '../../../images/stones/safira/safiraDoing.svg';
import safiraStoneBlocked from '../../../images/stones/safira/safiraBlocked.svg';

import topazioStoneDone from '../../../images/stones/topazio/topazio.svg';
import topazioStoneDoing from '../../../images/stones/topazio/topazioDoing.svg';
import topazioStoneBlocked from '../../../images/stones/topazio/topazioBlocked.svg';

import turmalinaStoneDone from '../../../images/stones/turmalina/turmalina.svg';
import turmalinaStoneDoing from '../../../images/stones/turmalina/turmalinaDoing.svg';
import turmalinaStoneBlocked from '../../../images/stones/turmalina/turmalinaBlocked.svg';



const trailsMap = {
  "Água-Marinha": {
    "position": {bottom: "434px", left: "108px"},
    "img": aguaMarinhaMap,
    "name": 'agua-marinha',
    "stone": {
      position: {top: "38px", right: "72px"},
      state: {
        "todo": aguaMarinhaStoneBlocked,
        "doing": aguaMarinhaStoneDoing,
        "done": aguaMarinhaStoneDone
      }
    }
  },

  "Diamante": {
    "position": {bottom: "266px", left: "0px"},
    "img": diamanteMap,
    "name": 'diamante',
    "stone": {
      position: {top: "38px", right: "53px"},
      state: {
        "todo": diamanteStoneBlocked,
        "doing": diamanteStoneDoing,
        "done": diamanteStoneDone
      }
    }
  },

  "Ametista": {
    "position": {bottom: "0px", left: "0px"},
    "img": ametistaMap,
    "name": 'ametista',
    "stone": {
      position: {top: "38px", right: "66px"},
      state: {
        "todo": ametistaStoneBlocked,
        "doing": ametistaStoneDoing,
        "done": ametistaStoneDone
      }
    }
  },

  "Turmalina": {
    "position": {bottom: "328px", left: "218px"},
    "img": turmalinaMap,
    "name": 'turmalina',
    "stone": {
      position: {top: "52px", right: "12px"},
      state: {
        "todo": turmalinaStoneBlocked,
        "doing": turmalinaStoneDoing,
        "done": turmalinaStoneDone
      }
    }
  },

  "Prata": {
    "position": {bottom: "100px", left: "0px"},
    "img": prataMap,
    "name": 'prata',
    "stone": {
      position: {top: "38px", right: "35px"},
      state: {
        "todo": prataStoneBlocked,
        "doing": prataStoneDoing,
        "done": prataStoneDone
      }
    }
  },

  "Ouro": {
    "position": {bottom: "118px", left: "135px"},
    "img": ouroMap,
    "name": 'ouro',
    "stone": {
      position: {top: "53px", right: "47px"},
      state: {
        "todo": ouroStoneBlocked,
        "doing": ouroStoneDoing,
        "done": ouroStoneDone
      }
    }
  },

  "Esmeralda": {
    "position": {bottom: "265px", left: "157px"},
    "img": esmeraldaMap,
    "name": 'esmeralda',
    "stone": {
      position: {top: "38px", right: "75px"},
      state: {
        "todo": esmeraldaStoneBlocked,
        "doing": esmeraldaStoneDoing,
        "done": esmeraldaStoneDone
      }
    }
  },

  "Safira": {
    "position": {bottom: "96px", left: "282px"},
    "img": safiraMap,
    "name": 'safira',
    "stone": {
      position: {top: "81px", right: "12px"},
      state: {
        "todo": safiraStoneBlocked,
        "doing": safiraStoneDoing,
        "done": safiraStoneDone
      }
    }
  },

  "Alexandrita": {
    "position": {bottom: "0", left: "135px"},
    "img": alexandritaMap,
    "name": 'alexandrita',
    "stone": {
      position: {top: "38px", right: "101px"},
      state: {
        "todo": alexandritaStoneBlocked,
        "doing": alexandritaStoneDoing,
        "done": alexandritaStoneDone
      }
    }
  },

  "Topázio": {
    "position": {bottom: "394px", left: "0px"},
    "img": topazioMap,
    "name": 'topazio',
    "stone": {
      position: {top: "38px", right: "76px"},
      state: {
        "todo": topazioStoneBlocked,
        "doing": topazioStoneDoing,
        "done": topazioStoneDone
      }
    }
  }

}

export default trailsMap;