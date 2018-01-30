// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const toggleDrum = (drum, index) => {
  drum[index] ? false : true;
  console.log('toggle');
};

const clear = drums => {
  drums.forEach(drum => drum = false);
  console.log('clear');
};

const invert = drums => {
  drums.forEach(function(drum) {
    drum ? false : true;
    console.log('invert');
  });
}
