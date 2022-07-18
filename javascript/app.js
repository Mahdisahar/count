let count = 0;

const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
 btn.addEventListener('click', function(e) {
    const styles = (e.currentTarget.classList);

    if (styles.contains('decrease')) {
        count--;
    } else if (styles.contains('increase')) {
        count++;
    } else {
        count = 0;
    } 
    if (count > 0) {
       value.style.color = 'red'; 
    } else if (count < 0) {
        value.style.color = 'green';
    } else {
        value.style.color = 'black'
    }
    value.textContent = count;
  });
});

const colors = ['green', 'lightblue', 'pink', 'rgb(12, 13, 56)', 'rgb(12, 45, 80)'];

const buttonCliked = document.querySelector('.cliked');
const changeColor = document.getElementById('change-color');

buttonCliked.addEventListener('click', function() {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  changeColor.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);

}

