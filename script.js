const number = Math.floor(Math.random() * 10) + 1;

function check(){
  const guess = Number(document.getElementById('guess').value);
  const result = document.getElementById('result');

  if(!guess){
    result.innerText = 'Please enter a number';
  }else if(guess === number){
    result.innerText = '🎉 Correct!';
  }else{
    result.innerText = '❌ Wrong, try again';
  }
}
