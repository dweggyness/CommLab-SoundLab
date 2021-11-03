
const synth = new Tone.Synth().toDestination();

$('.clickToStart').on('click', () => {
  $('.clickToStart').css('display', 'none');
})

// listne to piano clicks
$('.piano div').on('click', (e) => {
  const key = e.target.id;

  switch(key) {
    case "CKey":
      triggerCSound();
      break;
    case "CSharpKey":
      triggerCSharpSound();
      break;
    case "DKey":
      triggerDSound();
      break;
    case "DSharpKey":
      triggerDSharpSound();
      break;
    case "EKey":
      triggerESound();
      break;
    case "FKey":
      triggerFSound();
      break;
    case "FSharpKey":
      triggerFSharpSound();
      break;
    case "GKey":
      triggerGSound();
      break;
    case "GSharpKey":
      triggerGSharpSound();
      break;
    case "AKey":
      triggerASound();
      break;
    case "ASharpKey":
      triggerASharpSound();
      break;
    case "BKey":
      triggerBSound();
      break;
  }
})

// listne to keyboard clicks
document.addEventListener('keydown', function (e) {
  if (e.key === 'a') {
    triggerCSound();
  }
  if (e.key === 'w') {
    triggerCSharpSound();
  }
  if (e.key === 's') {
    triggerDSound();
  }
  if (e.key === 'e') {
    triggerDSharpSound();
  }
  if (e.key === 'd') {
    triggerESound();
  }
  if (e.key === 'f') {
    triggerFSound();
  }
  if (e.key === 't') {
    triggerFSharpSound();
  }
  if (e.key === 'g') {
    triggerGSound();
  }
  if (e.key === 'y') {
    triggerGSharpSound();
  }
  if (e.key === 'h') {
    triggerASound();
  }
  if (e.key === 'u') {
    triggerASharpSound();
  }
  if (e.key === 'j') {
    triggerBSound();
  }
});

function triggerCSound() {
  synth.triggerAttackRelease("C4", "8n");
  $("#CKey").css('background-color', 'lightgreen');
  setTimeout(() => {
    $("#CKey").css('background-color', 'white');
  }, 200)
}

function triggerCSharpSound() {
  synth.triggerAttackRelease("C#4", "8n");
  $("#CSharpKey").css('background-color', 'lightgreen');
  setTimeout(() => {
    $("#CSharpKey").css('background-color', 'black');
  }, 200)
}

function triggerDSound() {
  synth.triggerAttackRelease("D4", "8n");
  $("#DKey").css('background-color', 'lightgreen');
  setTimeout(() => {
    $("#DKey").css('background-color', 'white');
  }, 200)
}

function triggerDSharpSound() {
  synth.triggerAttackRelease("D#4", "8n");
  $("#DSharpKey").css('background-color', 'lightgreen');
  setTimeout(() => {
    $("#DSharpKey").css('background-color', 'black');
  }, 200)
}

function triggerESound() {
  synth.triggerAttackRelease("E4", "8n");
  $("#EKey").css('background-color', 'lightgreen');
  setTimeout(() => {
    $("#EKey").css('background-color', 'white');
  }, 200)
}

function triggerFSound() {
  synth.triggerAttackRelease("F4", "8n");
  $("#FKey").css('background-color', 'lightgreen');
  setTimeout(() => {
    $("#FKey").css('background-color', 'white');
  }, 200)
}

function triggerFSharpSound() {
  synth.triggerAttackRelease("F#4", "8n");
  $("#FSharpKey").css('background-color', 'lightgreen');
  setTimeout(() => {
    $("#FSharpKey").css('background-color', 'black');
  }, 200)
}

function triggerGSound() {
  synth.triggerAttackRelease("G4", "8n");
  $("#GKey").css('background-color', 'lightgreen');
  setTimeout(() => {
    $("#GKey").css('background-color', 'white');
  }, 200)
}

function triggerGSharpSound() {
  synth.triggerAttackRelease("G#4", "8n");
  $("#GSharpKey").css('background-color', 'lightgreen');
  setTimeout(() => {
    $("#GSharpKey").css('background-color', 'black');
  }, 200)
}

function triggerASound() {
  synth.triggerAttackRelease("A4", "8n");
  $("#AKey").css('background-color', 'lightgreen');
  setTimeout(() => {
    $("#AKey").css('background-color', 'white');
  }, 200)
}

function triggerASharpSound() {
  synth.triggerAttackRelease("A#4", "8n");
  $("#ASharpKey").css('background-color', 'lightgreen');
  setTimeout(() => {
    $("#ASharpKey").css('background-color', 'black');
  }, 200)
}

function triggerBSound() {
  synth.triggerAttackRelease("B4", "8n");
  $("#BKey").css('background-color', 'lightgreen');
  setTimeout(() => {
    $("#BKey").css('background-color', 'white');
  }, 200)
}