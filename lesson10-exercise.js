let val=document.querySelector('.js-button');
console.log(val.classList.contains('js-button'));
function play(){
  const val1=document.querySelector('.game-button');
if(!val1.classList.contains('game1'))
{
val1.classList.add('game1');
}
else {
val1.classList.remove('game1');
}
}
function play1(){
  const val2=document.querySelector('.game-button2');
if(!val2.classList.contains('game1'))
{
val2.classList.add('game1');
}
else {
val2.classList.remove('game1');
}
}
function play2(){
  const val3=document.querySelector('.game-button3');
if(!val3.classList.contains('game1'))
{
val3.classList.add('game1');
}
else {
val3.classList.remove('game1');
}
}