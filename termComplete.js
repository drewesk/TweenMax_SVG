let char = body.querySelectorAll("script")[1].innerHTML.split("\n");
let rectWidth = canvas.width;
let rectHeight = canvas.height;

resume = () => {
  context.globalCompositeOperation = "source-over";
  context.shadowBlur = 0;
  context.fillStyle = "black";
  context.fillRect(0, 0, rectWidth, rectHeight);
  context.shadowColor = "#23D2CC";
  context.shadowBlur = 0.95;
  context.fillStyle = "#3CB0B4";
  context.globalCompositeOperation = "lighter";

  char.forEach(function(text, i) {
    if (i <= y) {
      if (i == y) {
        text = text.substr(0, x);
      }
      context.fillText(text, 100, 100 + i * 16);
    }
  });

  context.fillStyle = "#4598B8";
  context.fillRect(100 + context.measureText(char[y].substr(0, x)).width, 100 + y * 15, 10, 15);
  x += 10;
  if (x >= char[y].length) {
    x = 0;
    y++;
  }
  if (y * 100 > innerHeight - 200) {
    context.translate(0, -0.5);
  }
  if (y >= char.length - 1) {
    window.clearInterval();
  }
}

relay();
