const bell = (input) => {
  process.stdout.write("\x07");
  setTimeout(bell, input.shift() * 1000, input);
};

const check = (input) => {
  if (input.length === 0) {
  } else {
    input = input.filter((x) => x > 0);
    input.sort((a, b) => a - b);
    for (let i = input.length - 1; i > 0; i--) {
      input[i] -= input[i - 1];
    }
    setTimeout(bell, input.shift() * 1000, input);
  }
};

const args = process.argv.slice(2);
check(args);
