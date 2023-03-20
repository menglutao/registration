$(document).ready(function() {
    $('#email').blur(function() {
        var email = $('#email').val();
        if (IsEmail(email) == false) {
            $('#sign-up').attr('disabled', true);
        } else {
            $('#sign-up').attr('disabled', false);
        }
    });
    $('#password').keyup(function() {
        var password = $('#password').val();
        if (checkStrength(password) == false) {
            $('#sign-up').attr('disabled', true);
        }
      else {
            $('#sign-up').attr('disabled', false);
        }
    });

function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 /*In the regular expression ([a-zA-Z0-9]{2,4})+, the character set [a-zA-Z0-9] must appear between 2 and 4 times consecutively*/
       return regex.test(email);
    }
  
function checkStrength(password) {
        var strength = 0;
        // if 8+ characters
        
  if (password.length > 7) {
            strength += 1;
            $('#length').addClass('valid');
        } else {
            $('#length').removeClass('valid');           
        }

        //If password contains  lower characters, increase strength value.
        if (password.match(/[a-z]+/)) {
            strength += 1;
           $('#lowercase').addClass('valid');


        } else {
            $('#lowercase').removeClass('valid');
        }
  
   //If password contains upper characters, increase strength value.
   if (password.match(/[A-Z]+/)) {
            strength += 1;
      $('#uppercase').addClass('valid');
    }
     else{
       $('#uppercase').removeClass('valid');
       
     }
  
        //If it has numbers increase strength value.
        if (password.match(/([0-9])/)) {
            strength += 1;
           $('#decimal').addClass('valid');

        } else {
            $('#decimal').removeClass('valid');
        }

        //If it has one special character, increase strength value.
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
              strength += 1;
           $('#special').addClass('valid');

        } else {
            $('#special').removeClass('valid');
        }
   }
    
});
