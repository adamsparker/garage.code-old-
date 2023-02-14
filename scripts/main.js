var modalBtns = document.querySelectorAll('.modal-able');

modalBtns.forEach(function(btn){
    btn.onclick = function(){
    var modal = btn.getAttribute('data-modal');

    document.getElementById(modal).style.display = "flex";
  };
});   

var closeBtns = document.querySelectorAll(".modal__close");

closeBtns.forEach(function(btn){
btn.onclick = function(){
  var modal = (btn.closest(".modal-holder").style.display = "none");
  };
});