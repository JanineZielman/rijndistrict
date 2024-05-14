
for (let i = 0; i < document.getElementsByClassName("triangle").length; i++) {
  let random = Math.floor(Math.random() * 2);
  if (random == 1){
    document.getElementsByClassName("triangle")[i].classList.add('white');
    document.getElementsByClassName("triangle")[i].classList.remove('black');
  } else {
    document.getElementsByClassName("triangle")[i].classList.remove('white');
    document.getElementsByClassName("triangle")[i].classList.add('black');
  }
}

setInterval(function(){ 
  for (let i = 0; i < document.getElementsByClassName("triangle").length; i++) {
    let random = Math.floor(Math.random() * 2);
    if (random == 1){
      document.getElementsByClassName("triangle")[i].classList.add('white');
      document.getElementsByClassName("triangle")[i].classList.remove('black');
    } else {
      document.getElementsByClassName("triangle")[i].classList.remove('white');
      document.getElementsByClassName("triangle")[i].classList.add('black');
    }
  }
}, 1000);