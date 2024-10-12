let number = localStorage.getItem('number')||'';
function updateCalculator(value)
{
  number=number+value;
  let g=document.querySelector('.process');
  g.classList.add('number3');
   document.querySelector('.process').innerHTML=(number);

  localStorage.setItem('number',number);
}