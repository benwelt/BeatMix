// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const toggleDrum = (drum, index) => {
  drum[inded] ? false : true;
};

const clear = drums => {
  drums.forEach(drum => drum = false);
};

const invert = drums => {
  drums.forEach(function(drum) {
    drum ? false : true;
  });
}
