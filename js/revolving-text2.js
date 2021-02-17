const tasks = [
  'Graphic Designer',
  'Data Scientist',
  'Illustrator',
  'Music Producer'
];

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const task = document.getElementById('word-target');

function waitNMilliSeconds(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, n);
  });
}

function createCarousel(element, values) {
  let i = 1;
  return function() {
    element.classList.remove('pre-animation');
    element.classList.add('post-animation');

    waitNMilliSeconds(500)
    .then(() => {
      element.classList.remove('post-animation');
      element.innerHTML = "";
      element.innerHTML = values[i];
      i = (i === values.length - 1) ? 0 : (i + 1);
      element.classList.add('pre-animation');
      var col = getRandomColor();
      document.getElementById("word-target").style.color = col;
    });
  }
}

const tasksIterator = createCarousel(task, tasks);

setInterval(() => {
  tasksIterator();
}, 3500);
