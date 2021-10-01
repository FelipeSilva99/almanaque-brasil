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
    "position": {bottom: "453px", left: "113px"},
    "img": aguaMarinhaMap,
    "name": 'agua-marinha',
    "stone": {
      position: {top: "55px", right: "75px"},
      state: {
        "todo": aguaMarinhaStoneBlocked,
        "doing": aguaMarinhaStoneDoing,
        "done": aguaMarinhaStoneDone
      }
    }
  },

  "Diamante": {
    "position": {bottom: "282px", left: "2px"},
    "img": diamanteMap,
    "name": 'diamante',
    "stone": {
      position: {top: "36px", right: "63px"},
      state: {
        "todo": diamanteStoneBlocked,
        "doing": diamanteStoneDoing,
        "done": diamanteStoneDone
      }
    }
  },

  "Ametista": {
    "position": {bottom: "3px", left: "2px"},
    "img": ametistaMap,
    "name": 'ametista',
    "stone": {
      position: {top: "36px", right: "70px"},
      state: {
        "todo": ametistaStoneBlocked,
        "doing": ametistaStoneDoing,
        "done": ametistaStoneDone
      }
    }
  },

  "Turmalina": {
    "position": {bottom: "345px", left: "227px"},
    "img": turmalinaMap,
    "name": 'turmalina',
    "stone": {
      position: {top: "64px", right: "28px"},
      state: {
        "todo": turmalinaStoneBlocked,
        "doing": turmalinaStoneDoing,
        "done": turmalinaStoneDone
      }
    }
  },

  "Prata": {
    "position": {bottom: "111px", left: "2px"},
    "img": prataMap,
    "name": 'prata',
    "stone": {
      position: {top: "49px", right: "46px"},
      state: {
        "todo": prataStoneBlocked,
        "doing": prataStoneDoing,
        "done": prataStoneDone
      }
    }
  },

  "Ouro": {
    "position": {bottom: "130px", left: "140px"},
    "img": ouroMap,
    "name": 'ouro',
    "stone": {
      position: {top: "62px", right: "55px"},
      state: {
        "todo": ouroStoneBlocked,
        "doing": ouroStoneDoing,
        "done": ouroStoneDone
      }
    }
  },

  "Esmeralda": {
    "position": {bottom: "280px", left: "166px"},
    "img": esmeraldaMap,
    "name": 'esmeralda',
    "stone": {
      position: {top: "41px", right: "104px"},
      state: {
        "todo": esmeraldaStoneBlocked,
        "doing": esmeraldaStoneDoing,
        "done": esmeraldaStoneDone
      }
    }
  },

  "Safira": {
    "position": {bottom: "107px", left: "291px"},
    "img": safiraMap,
    "name": 'safira',
    "stone": {
      position: {top: "92px", right: "28px"},
      state: {
        "todo": safiraStoneBlocked,
        "doing": safiraStoneDoing,
        "done": safiraStoneDone
      }
    }
  },

  "Alexandrita": {
    "position": {bottom: "3px", left: "143px"},
    "img": alexandritaMap,
    "name": 'alexandrita',
    "stone": {
      position: {top: "48px", right: "123px"},
      state: {
        "todo": alexandritaStoneBlocked,
        "doing": alexandritaStoneDoing,
        "done": alexandritaStoneDone
      }
    }
  },

  "Topázio": {
    "position": {bottom: "411px", left: "5px"},
    "img": topazioMap,
    "name": 'topazio',
    "stone": {
      position: {top: "58px", right: "80px"},
      state: {
        "todo": topazioStoneBlocked,
        "doing": topazioStoneDoing,
        "done": topazioStoneDone
      }
    }
  }

}

export default trailsMap;