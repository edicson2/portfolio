const randomSquares = () => {
  const boxes = document.getElementById('box').children;
  for (const box of boxes) {
    let rnd = Math.random() * (90 - 1) + 1;
      // console.log(rnd);
    box.style.setProperty('left', rnd + '%');
    rnd = Math.random() * (90 - 10) + 10;
    box.style.setProperty('top', rnd + '%');
    rnd = Math.random() * (8 - 3) + 3;
    box.style.setProperty('time', rnd + 's');
  }
  setTimeout(randomSquares(), Math.random() * 1000);
}

// Squares random initial position
randomSquares();