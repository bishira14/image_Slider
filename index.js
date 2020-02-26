let container = document.querySelector('#image_container');
let nextBtn = document.querySelector('#next_Btn');
let prevBtn = document.querySelector('#prev_Btn');

let counter = 0
nextBtn.addEventListener('click', function(){
  container.animate([{opacity:'0.2'}, {opacity:'1.0'}],{duration:1000, fill:'forwards'});
  counter++;
  if(counter === 5){
    counter = 0
  }
  container.style.background = `url(img/bcg-${counter}.jpeg) center/cover no-repeat`;
})

prevBtn.addEventListener('click', function(){
  container.animate([{opacity:'0.2'}, {opacity:'1.0'}],{duration:1000, fill:'forwards'});
  counter--;
  if(counter === -1){
    counter = 4
  }
  container.style.background = `url(img/bcg-${counter}.jpeg) center/cover no-repeat`;
})
