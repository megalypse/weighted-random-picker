var mental = {
  reflexos: 30,
  mira: 30,
  inteligencia: 30,
  telepatia: 5,
  massa: 5
};

var fisico = {
  forca: 37,
  resistencia: 37,
  armasVirais: 10,
  blindagem: 10,
  metamorfose: 10
};

var quimico = {
  eletricidade: 30,
  combustao:30,
  campoMagnetico: 20,
  necromancia: 10,
  estimuloCelular: 2
};

function picker(list){
  var valuesSum = 0;
  const values = Object.entries(list);
  for(var i = 0; i < values.length; i++) {
    valuesSum += values[i][1];
  }
  var randNum = Math.round(Math.random() * valuesSum);
  for (var i = 0; i < values.length; i++) {
    randNum -= values[i][1];
    if(randNum <= 0){
      console.log(values[i]);
      break;
    }
    if (i === values.length) {
      i = 0;
    }
  }
}

picker(mental);
