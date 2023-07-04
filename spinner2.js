// process.stdout.write('hello from spinner1.js... \rheyyy\n');
// refactor to about 8-10 lines of code


// setInterval(function() {
//   element.innerHTML += "Hello";
// }, 100);

const sentence = "| / - \\ | / - \\ | ";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + (sentence[i]) + '   ');
  },i * 200);
}


// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1200);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1400);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1600);
// // ... fill in the rest yourself ...