let a = 7;
let b = 0;
for (let i = 7; i > a; i++) {
  b += 1;
  console.log(b)
}
 

this code will not run because in this code initially we let a=7, and then we also consider i=7 in for loop,
and we apply condition that i>a, which is not possible.
hence code is not runing.