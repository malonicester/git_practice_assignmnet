let num = 6;
let count = 0;
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    count++;
  }
}
count == 2 ? console.log("prime") : console.log("not prime");
