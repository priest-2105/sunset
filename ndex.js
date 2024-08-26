function scatterDivsRandomly() {
    const container = document.getElementById('container');
    const divs = container.querySelectorAll('.rounded-star, .square-star');
  
    divs.forEach((div) => {
      const randomX = Math.floor(Math.random() * (container.offsetWidth - div.offsetWidth));
      const randomY = Math.floor(Math.random() * (container.offsetHeight - div.offsetHeight));
  
      div.style.top = `${randomY}px`;
      div.style.left = `${randomX}px`;
    });
  }
  
  scatterDivsRandomly();