'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// it helps to select multiple class have same name and same behaviour
const btnShowModal = document.querySelectorAll('.show-modal');
// for(let i = 0; i < btnShowModal.length; i++){
//     console.log(btnShowModal[i].textContent);
// }
// . is only using for selectors like .modal or .ovelays etc........
const openModal = function(){
    // console.log(`clicked ${i + 1}`);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for(let i = 0; i < btnShowModal.length; i++){
    btnShowModal[i].addEventListener('click', openModal);
}
// btn close event listener
const closeModal = function(){
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// key event is global event
document.addEventListener('keydown', function(e){
   
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();        
    }
});

