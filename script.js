    $('.js-scroll-trigger').click(function(){
            $('.navbar-collapse').collapse('hide');
          });

let email;
let textarea;

document.getElementById("submit").onclick = function(){
    email = document.getElementById("myemail").value
    console.log(email)

    textarea = document.getElementById("mytextarea").value
    console.log(textarea)
}


  