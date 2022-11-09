
let main_container = document.getElementsByClassName("main-container");
let transparent_background = document.getElementsByClassName("transparent-background");
// innitialez counter to track changes in state
let counter = 0;
for(let i = 0; i <= main_container.length; i++){
 if(i == 0){
    main_container[i].style.left = i * 100 + "%";
 }else{
    main_container[i].style.left = 100 + "%";
 }
    
}




function forward(){
    main_container[counter].style.left = main_container.length * 100 + "%";
    counter++;
    //delays execution
    setTimeout(() => {
        main_container[counter].style.left = "0%";
    }, 250);
  }      

function back(){
      main_container[counter].style.left = main_container.length * 100 + "%";
      counter--;
       //delays execution
      setTimeout(() => {
          main_container[counter].style.left = "0%";
      }, 250);
    }      


function fadeOut(){
  for(let j = 0; j <= main_container.length; j++){
    console.log(j)
    if(j == main_container.length){
      main_container[main_container.length-1].style.opacity = "0";
      setTimeout(() => {
        main_container[counter].style.display = "none";
        }, 250);
  }else{
    main_container[main_container.length-1].style.opacity = "0";
    transparent_background[main_container.length-1].style.backgroundColor = "rgba(0, 0, 0, 0)";
    setTimeout(() => {
      main_container[counter].style.display = "none";
      transparent_background[j].style.display = "none";
      }, 150);
        }
setTimeout(() => {
main_container[counter].style.display = "none";
transparent_background[j].style.display = "none";
}, 250);
  }


}
