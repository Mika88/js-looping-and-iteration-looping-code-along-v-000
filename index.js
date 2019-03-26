// Code your solutions in this file
function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
      console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
    }
    return names;
}

function tailsNeverFails() {
  while ( Math.random() >= 0.5) {
    let count = 0;
    let message = console.log(`You got ${++count} tails in a row!`);
  }
  return message;
}
