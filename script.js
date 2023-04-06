function getNum(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

const body = document.querySelector('body');
const imgWrapper = document.createElement('div');
imgWrapper.classList.add('wrapper');

for (let i = 1; i <= 9; i++) {
  const img = document.createElement('img');
  img.setAttribute('src', `images/${getNum(9, 1)}.jpg`);
 
  imgWrapper.append(img);
}

body.append(imgWrapper);