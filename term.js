const canvas = document.getElementById('climbing');
let body = document.body;
let context = canvas.getContext('2d');
let resume;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 0;
let y = 1;

context.textBaseline = "top";
context.font = "1em monospace";

// function relay() {
//   window.requestAnimationFrame(relay);
//     resume();
// }
