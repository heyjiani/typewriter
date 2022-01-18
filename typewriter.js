const sentence = "hello there from lighthouse labs";
let x = 0;

for (const char of sentence) {
  x += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, x)
}

setTimeout(() => {
  process.stdout.write('\n');
}, x);