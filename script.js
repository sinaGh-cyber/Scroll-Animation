const boxes = document.querySelectorAll('.box');
const hight = (window.innerHeight / 5) * 4;

const checkBoxes = () => {
  boxes.forEach((box) => {
    box.getBoundingClientRect().top < hight
      ? box.classList.add('show')
      : box.classList.remove('show');
  });
};

checkBoxes();

window.addEventListener('scroll', checkBoxes);
