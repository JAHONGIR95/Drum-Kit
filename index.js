var n = document.querySelectorAll('.drum').length;

for (var i = 0; i < n; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        var button = this.innerHTML;

        makesound(button);
        keyAnimations(button); 
    });

}

document.addEventListener('keypress', function(all) {
    console.log(all);
    makesound(all.key);
    keyAnimations(all.key);
    
})

function makesound(key){

    switch (key) {

        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'a':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case 's':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case 'd':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case 'j':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'k':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 'l':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
    }
}

function keyAnimations(currentKey){

    var activeKey = document.querySelector('.'+currentKey);
    activeKey.classList.add('pressed');

   setTimeout(function(){
       activeKey.classList.remove('pressed');
   }, 100);
}




