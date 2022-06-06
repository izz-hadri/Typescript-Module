// import { aString, bString as b } from './a';
// npm run test
// console.log(aString);
// console.log(b);
if (Math.random() > 1) {
    import('./a').then(a => console.log("THE MESSAGE IS ", a.aString));
}
import * as config from './config.json';
console.log(config.helo);
// import { cube } from './cube';
// let a =cube(3);
