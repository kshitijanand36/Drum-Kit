var g = document.querySelectorAll(".drum");

//for handling clicks
for(let i = 0 ;i< g.length ; i++){
  g[i].addEventListener("click" , function(){

    var h = this.innerHTML
    handleClick(h);
    buttonAnimation(h);
  });
}
//detecting key press.

document.addEventListener("keydown" , function(event){

  handleClick(event.key);

  buttonAnimation(event.key);
});


function buttonAnimation(key){

  var curr_class = "." + key;

  console.log(curr_class);

  var store2 = document.querySelector(curr_class);

  if(store2){
    store2.classList.add("pressed");
    var delayInMilliseconds = 130;
    setTimeout(function() {
      store2.classList.remove("pressed");
    }, delayInMilliseconds);
  }



}
//this funciton actually handles both clicks and key press

function handleClick(i){

  var my_audio;

  if(i == "w"){
    my_audio = new Audio("sounds/crash.mp3");

  }

  if(i == "a"){
    my_audio = new Audio("sounds/kick-bass.mp3");

  }

  if(i == "s"){
    my_audio = new Audio("sounds/snare.mp3");

  }

  if(i == "d"){
    my_audio = new Audio("sounds/tom-1.mp3");

  }

  if(i == "j"){
    my_audio = new Audio("sounds/tom-2.mp3");

  }
  if(i == "k"){
    my_audio = new Audio("sounds/tom-3.mp3");

  }
  if(i == "l"){
    my_audio = new Audio("sounds/tom-4.mp3");

  }
  if(my_audio){
    my_audio.play();

  }

}
