const generateTshirtBtn = document.getElementById('generate-tshirt');
const imgElem = document.getElementById('shirt-img');

generateTshirtBtn.addEventListener('click', e => {
  const random = randomIntFromInterval(1, 10);
  const imgSrc = `https://res.cloudinary.com/mariusl/image/upload/e_auto_color/w_200/c_fit,e_overlay,l_blank_shirt,y_200/mike_${random}.jpg`
  imgElem.src = imgSrc;
});

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}