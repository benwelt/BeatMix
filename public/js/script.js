// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const toggleDrum = (drum, index) => {
  if (drum[index]) {
    drum[index] = false;
  } else if (!drum[index]) {
    drum[index] = true;
  }
};

const clear = drums => {
  drums.forEach(function(drum) {
    drum = false;
  });
};
