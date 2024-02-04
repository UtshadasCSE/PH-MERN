// for (let i = 0; i <= 100; i++) {
//   console.log(i);
//   if (i > 50) {
//     break;
//   }
// }
let i = 1;
while (i < 10) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
  i++;
}
