const sentence = "| / - \\ | / - \\ | ";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + (sentence[i]) + '   ');
  },i * 200);
}
